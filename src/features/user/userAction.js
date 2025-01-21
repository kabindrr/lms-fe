import { fetchNewAccessJWTapi } from "../../services/authApi";
import { fetchUserAPI } from "./userAPI";
import { setUser } from "./userSlice";

export const fetchUserAction = () => async (dispatch) => {
  //call api to get user profile
  const { status, payload } = await fetchUserAPI();

  //receive user

  //dispatch user to redux store

  status === "success" && payload?._id && dispatch(setUser(payload));
};

export const autoLoginUser = () => async (dispatch) => {
  const accessJWT = sessionStorage.getItem("accessJWT");
  if (accessJWT) {
    dispatch(fetchUserAction());
    return;
  }

  const refreshJWT = localStorage.getItem("refreshJWT");
  if (refreshJWT) {
    //fetch accessJWT and set in the session storage
    const { payload } = await fetchNewAccessJWTapi();

    if (payload) {
      sessionStorage.setItem("accessJWT", payload);
      dispatch(fetchUserAction());
    }
  }
};
