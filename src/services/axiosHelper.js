import axios from "axios";
import { toast } from "react-toastify";
import { fetchNewAccessJWTapi } from "./authApi";

const getAccessJWT = () => sessionStorage.getItem("accessJWT");
const getRefreshJWT = () => localStorage.getItem("refreshJWT");

export const apiProcessor = async ({
  url,
  method,
  payload,
  showToast,
  isPrivate,
  isRefreshJWT,
}) => {
  try {
    const headers = {};

    if (isPrivate) {
      const token = isRefreshJWT ? getRefreshJWT() : getAccessJWT();
      if (!token) {
        throw new Error("No access token found. Please log in.");
      }
      headers.authorization = "bearer " + token;
    }

    const responsePending = axios({
      url,
      method,
      data: payload,
      headers,
    });

    if (showToast) {
      toast.promise(responsePending, { pending: "Please Wait" });
    }

    const { data } = await responsePending;
    showToast && toast[data.status](data.message);
    return data;
  } catch (error) {
    console.error("API Error:", error);

    const msg = error?.response?.data?.message || error.message;
    const status = error.response?.status;

    showToast && toast.error(msg);

    // Handle expired JWT case
    if (status === 401 && msg === "jwt expired") {
      console.log("Access token expired. Trying to refresh...");
      const { payload } = await fetchNewAccessJWTapi();

      if (payload) {
        sessionStorage.setItem("accessJWT", payload);
        console.log("New access token received. Retrying request...");

        // Retry the API call with new token
        return apiProcessor({
          url,
          method,
          payload,
          showToast,
          isPrivate,
          isRefreshJWT,
        });
      } else {
        console.log("Refresh token expired or invalid. Logging out...");
        sessionStorage.clear();
        localStorage.clear();
        window.location.href = "/signin"; // Redirect to login page
        return {
          status: "error",
          message: "Session expired. Please log in again.",
        };
      }
    }

    // If other errors, clear storage and redirect
    if (status === 401 || status === 403) {
      console.log("Unauthorized request. Logging out...");
      sessionStorage.clear();
      localStorage.clear();
      window.location.href = "/signin";
    }

    return { status: "error", message: msg };
  }
};
