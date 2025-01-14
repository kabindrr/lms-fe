import { apiProcessor } from "../../services/axiosHelper";

const apiBaseUrl = "http://localhost:3000";
const userApiEP = apiBaseUrl + "/api/v1/users";
//call api processor to fetch user

export const fetchUserAPI = async () => {
  const obj = {
    url: userApiEP + "/profile",
    method: "get",
    showToast: false,
    isPrivate: true,
  };
  const result = await apiProcessor(obj);
  return result;
};
