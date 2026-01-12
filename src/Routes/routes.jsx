import { createBrowserRouter, Navigate } from "react-router";
import React, { Suspense } from "react";

import SignIn from "@/Pages/Authentication/SignIn";
import SignUp from "@/Pages/Authentication/SignUp";
import MailVerification from "@/Pages/Authentication/MailVerification";
import OTPVerification from "@/Pages/Authentication/OTPVerification";

import DashboardLayout from "@/Layout/DashboardLayout/DashboardLayout";
import NotFound from "@/Layout/404Page/NotFound";
import Help_Support from "@/Pages/Settings/Help_Support";
import Terms_Conditions from "@/Pages/Settings/Terms_Conditions";
import Manage_subscription from "@/Pages/Settings/Manage_subcription";
import Privacy_Policy from "@/Pages/Settings/Privacy_Policy";

const AdminHome = React.lazy(() => import("@/Pages/Home/AdminHome/Admin_Home"));
const Order = React.lazy(() => import("@/Pages/Home/OrderPage/Order"));
const Category = React.lazy(() => import("@/Pages/Home/Menu/Category"));
const AllFood = React.lazy(() => import("@/Pages/Home/Menu/All_food"));
const Review = React.lazy(() => import("@/Pages/Home/Review/Review"));
const Branding = React.lazy(() => import("@/Pages/Home/Branding/Branding"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/sign_up",
    element: <SignUp />,
  },
  {
    path: "/email_verification",
    element: <MailVerification />,
  },
  {
    path: "/otp_verification",
    element: <OTPVerification />,
  },

  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <AdminHome />,
      },

      {
        path: "menu",
        children: [
          {
            index: true,
            element: <Navigate to="all_food" replace />,
          },
          {
            path: "category",
            element: <Category />,
          },
          {
            path: "all_food",
            element: <AllFood />,
          },
        ],
      },

      {
        path: "help_support",
        element: <Help_Support />,
      },
      {
        path: "terms_conditions",
        element: <Terms_Conditions />,
      },
      {
        path: "manage_subscriptions",
        element: <Manage_subscription />,
      },
      {
        path: "privacy_policy",
        element: <Privacy_Policy />,
      },

      {
        path: "orders",
        element: <Order />,
      },
      {
        path: "reviews",
        element: <Review />,
      },
      {
        path: "branding",
        element: <Branding />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);
