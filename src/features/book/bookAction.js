import { adminFetchAllBook, postNewBookApi } from "./bookAPI";

export const postNewBookAction = async (payload) => {
  const book = await postNewBookApi(payload);
  console.log(book);
};
export const adminFetchAllBookAction = async () => {
  const response = await adminFetchAllBook();
  console.log(response);
};
