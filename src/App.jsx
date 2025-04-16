import "./App.css";

import { ToastContainer, toast } from "react-toastify";
import { AppRouters } from "./routes/AppRouters";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllPublicBookAction } from "./features/book/bookAction";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    //fetch all the data then mount in the redux store
    dispatch(fetchAllPublicBookAction());
  }, [dispatch]);
  return (
    <>
      <AppRouters />
      <ToastContainer />
    </>
  );
};

export default App;
