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
  const result = apiProcessor(axiosObj);
};
