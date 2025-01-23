import { apiProcessor } from "../../services/axiosHelper";

const apiBaseUrl = import.meta.env.VITE_ROOT_URL;
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
