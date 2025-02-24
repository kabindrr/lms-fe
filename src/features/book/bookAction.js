import { adminFetchAllBook, postNewBookApi } from "./bookAPI";
import { setBook } from "./bookSlice";

export const postNewBookAction = async (payload) => {
  const book = await postNewBookApi(payload);
  console.log(book);
};
export const adminFetchAllBookAction = () => async (dispatch) => {
  const { status, payload } = await adminFetchAllBook();

  status === "success" && dispatch(setBook(payload));
};
