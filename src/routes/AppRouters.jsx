import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/home/HomePage";
import { DashboardPage } from "../pages/dashboard/DashboardPage";
import { DefaultLayout } from "../components/layouts/DefaultLayout";
import { SignInPage } from "../pages/auth/SignInPage";
import { SignUpPage } from "../pages/auth/SignUpPage";
import { ForgetPasswordPage } from "../pages/auth/ForgetPasswordPage";
import { UserLayout } from "../components/layouts/UserLayout";
import { Books } from "../pages/books/Books";
import { UserPage } from "../pages/users/UserPage";
import { Borrow } from "../pages/borrow/Borrow";
import { Profile } from "../pages/profile/profile";
import { ReviewsPage } from "../pages/reviews/ReviewsPage";
import { EditBookPage } from "../pages/books/EditBookPage";
import { NewBookPage } from "../pages/books/NewBookPage";
import { BookLandingPage } from "../pages/books/BookLandingPage";

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
        <Route path="/user" element={<UserLayout />}>
          <Route path="user-list" element={<UserPage />} />
          <Route path="books" element={<Books />} />
          <Route path="edit-book" element={<EditBookPage />} />
          <Route path="new-book" element={<NewBookPage />} />
          <Route path="book-landing" element={<BookLandingPage />} />
          <Route path="borrow" element={<Borrow />} />
          <Route path="profile" element={<Profile />} />
          <Route path="reviews" element={<ReviewsPage />} />
        </Route>
      </Routes>
    </>
  );
};
