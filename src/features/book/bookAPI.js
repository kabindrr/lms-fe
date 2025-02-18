import { apiProcessor } from "../../services/axiosHelper";

const apiBaseUrl = import.meta.env.VITE_ROOT_URL;
const bookApiEp = apiBaseUrl + "/api/v1/books";

export const postNewBookApi = async (payload) => {
  const obj = {
    url: bookApiEp,
    method: "post",
    showToast: true,
    isPrivate: true,
    payload,
  };
  const result = await apiProcessor(obj);
  return result;
};
