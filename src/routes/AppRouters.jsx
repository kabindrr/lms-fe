import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/home/HomePage";
import { DashboardPage } from "../pages/dashboard/DashboardPage";
import { DefaultLayout } from "../components/layouts/DefaultLayout";
import { SignInPage } from "../pages/auth/SignInPage";
import { SignUpPage } from "../pages/auth/SignUpPage";
import { ForgetPasswordPage } from "../pages/auth/ForgetPasswordPage";

export const AppRouters = () => {
  return (
    <>
      <Routes>
        {/* public Pages */}

        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="signin" element={<SignInPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="forgot-password" element={<ForgetPasswordPage />} />
        </Route>
        {/* private Pages */}
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </>
  );
};
