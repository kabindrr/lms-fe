import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/home/HomePage";
import { DashboardPage } from "../pages/dashboard/DashboardPage";
import { DefaultLayout } from "../components/layouts/DefaultLayout";

export const AppRouters = () => {
  return (
    <>
      <Routes>
        {/* public Pages */}
        <Route
          path="/"
          element={
            <DefaultLayout>
              <HomePage />
            </DefaultLayout>
          }
        />
        {/* private Pages */}
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </>
  );
};
