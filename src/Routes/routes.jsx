import { createBrowserRouter, Navigate } from "react-router";
import React, { Suspense } from "react";

import SignIn from "@/Pages/Authentication/SignIn";
import SignUp from "@/Pages/Authentication/SignUp";
import MailVerification from "@/Pages/Authentication/MailVerification";
import OTPVerification from "@/Pages/Authentication/OTPVerification";
import ResetPassowrd from "@/Pages/Authentication/ResetPassowrd";
import DashboardLayout from "@/Layout/DashboardLayout/DashboardLayout";
import Category from "@/Pages/Home/Menu/Category";
import All_food from "@/Pages/Home/Menu/All_food";

const Admin_Home = React.lazy(() =>
  import("../Pages/Home/AdminHome/Admin_Home")
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true, 
        element: (
          <Suspense fallback={<div className="p-8">Loading Dashboard...</div>}>
            <Admin_Home />
          </Suspense>
        ),
      },
      {
        path: "admin_home",
        element: (
          <Suspense fallback={<div className="p-8">Loading...</div>}>
            <Admin_Home />
          </Suspense>
        ),
      },
      {
        path: "menu",
        children: [
          { index: true, element: <Navigate to="all_food" replace /> },
          { path: "category", element: <Category /> },
          { path: "all_food", element: <All_food /> },
        ],
      },
    ],
  },
  { path: "/sign_up", element: <SignUp /> },
  { path: "/email_verification", element: <MailVerification /> },
  { path: "/otp_verification", element: <OTPVerification /> },
  { path: "/reset_password", element: <ResetPassowrd /> },
]);
