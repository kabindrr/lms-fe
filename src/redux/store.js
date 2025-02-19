import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice.js";
import bookReducer from "../features/book/bookSlice.js";

const store = configureStore({
  reducer: {
    userInfo: userReducer,
    bookInfo: bookReducer,
  },
});
console.log("redux Store state", store.getState());

export default store;
