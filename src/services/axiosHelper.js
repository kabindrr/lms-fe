import axios from "axios";
import { toast } from "react-toastify";

export const apiProcessor = async ({ url, method, payload, showToast }) => {
  try {
    console.log(payload);
    const responsePending = axios({
      url,
      method,
      data: payload,
      //   headers,
    });

    //show toast message
    if (showToast) {
      toast.promise(responsePending, {
        pending: "Please Wait",
      });
    }
    const { data } = await responsePending;
    showToast && toast[data.status](data.message);
    return data;
  } catch (error) {
    const msg = error?.response?.data?.message || error.message;
    toast.error(msg);
  }
};
