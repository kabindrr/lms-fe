import { fetchUserAPI } from "./userAPI";
import { setUser } from "./userSlice";

export const fetchUserAction = () => async (dispatch) => {
  //call api to get user profile
  const { status, payload } = await fetchUserAPI();

  //receive user

  //dispatch user to redux store

  status === "success" && payload?._id && dispatch(setUser(payload));
};

export const autoLoginUser = () => (dispatch) => {
  const accessJWT = sessionStorage.getItem("accessJWT");
  if (accessJWT) {
    dispatch(fetchUserAction());
    return;
  }

  const refreshJWT = sessionStorage.getItem("refreshJWT");

  
};
