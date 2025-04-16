import {
  adminFetchAllBook,
  fetchAllPublicBookApi,
  postNewBookApi,
} from "./bookAPI";
import { setBook, setPublicBooks } from "./bookSlice";

export const postNewBookAction = async (payload) => {
  const book = await postNewBookApi(payload);
  console.log(book);
};
export const adminFetchAllBookAction = () => async (dispatch) => {
  const { status, payload } = await adminFetchAllBook();

  status === "success" && dispatch(setBook(payload));
};
export const fetchAllPublicBookAction = () => async (dispatch) => {
  const { status, payload } = await fetchAllPublicBookApi();

  status === "success" && dispatch(setPublicBooks(payload));
};
