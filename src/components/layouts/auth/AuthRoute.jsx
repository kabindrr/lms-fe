import React from "react";
import { Navigate } from "react-router-dom";

export const AuthRoute = ({ children }) => {
  const isAuth = true;

  return isAuth ? children : <Navigate to="/signin" />;
};
