import { apiProcessor } from "./axiosHelper";

const apiBaseURL = "http://localhost:3000";
const authApiEP = apiBaseURL + "/api/v1/auth";

export const signUpNewUserApi = (payload) => {
  const axiosObj = {
    url: authApiEP + "/register",
    method: "post",
    payload,
    showToast: true,
  };
  return apiProcessor(axiosObj);
};
export const activateNewUserApi = (payload) => {
  const axiosObj = {
    url: authApiEP + "/activate-user",
    method: "post",
    payload,
  };
  return apiProcessor(axiosObj);
};

export const signInUserApi = (payload) => {
  const axiosObj = {
    url: authApiEP + "/login",
    method: "post",
    payload,
    showToast: true,
  };
  return apiProcessor(axiosObj);
};

export const fetchNewAccessJWTapi = async () => {
  const axiosObj = {
    url: authApiEP + "/renew-access-JWT",
    method: "get",
    isPrivate: true,
    isRefreshJWT: true,
  };
  return apiProcessor(axiosObj);
};
