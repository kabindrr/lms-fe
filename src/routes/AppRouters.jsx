import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/home/HomePage";
import { DashboardPage } from "../pages/dashboard/DashboardPage";

export const AppRouters = () => {
  return (
    <>
      <Routes>
        {/* public Pages */}
        <Route path="/" element={<HomePage />} />
        {/* private Pages */}
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </>
  );
};
