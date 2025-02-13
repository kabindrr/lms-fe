import React from "react";
import Header from "../Header";
import { Footer } from "../Footer";
import { Outlet } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import SideBar from "./SideBar";
import { AuthRoute } from "./auth/AuthRoute";

export const UserLayout = () => {
  return (
    <AuthRoute>
      {/* navbar */}
      <Header />

      <div>
        <div className="d-flex">
          <div className="bg-dark text-white p-3" style={{ width: "200px" }}>
            <div className="p-3">
              <div>Welcome Back</div>
              <h4>Kabindra Ranabhat</h4>
            </div>
            <hr />
            <SideBar />
          </div>

          {/* main body */}
          <main className="main">
            <Outlet />
          </main>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </AuthRoute>
  );
};
