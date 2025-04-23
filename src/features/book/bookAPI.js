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
export const adminFetchAllBook = async () => {
  const obj = {
    url: bookApiEp + "/admin",
    method: "get",
    showToast: false,
    isPrivate: true,
  };
  const result = await apiProcessor(obj);
  return result;
};
export const updateBookApi = async (payload) => {
  const obj = {
    url: bookApiEp,
    method: "put",
    showToast: true,
    isPrivate: true,
    payload,
  };
  const result = await apiProcessor(obj);
  return result;
};

export const deleteBookApi = async (_id) => {
  const obj = {
    url: bookApiEp + "/" + _id,
    method: "delete",
    showToast: true,
    isPrivate: true,
  };
  const result = await apiProcessor(obj);
  return result;
};

//fetch public book for home page
export const fetchAllPublicBookApi = async () => {
  const obj = {
    url: bookApiEp,
    method: "get",
  };
  const result = await apiProcessor(obj);
  return result;
};
export const fetchSinglePublicBookApi = async (slug) => {
  const obj = {
    url: bookApiEp + "/public/" + slug,
    method: "get",
  };
  const result = await apiProcessor(obj);
  return result;
};
