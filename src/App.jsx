import "./App.css";

import { ToastContainer, toast } from "react-toastify";
import { AppRouters } from "./routes/AppRouters";

const App = () => {
  return (
    <>
      <AppRouters />
      <ToastContainer />
    </>
  );
};

export default App;
