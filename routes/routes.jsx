import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Login from "../pages/Login";
import Layout from "../layout/Layout";
import LoginDetails from "../pages/loginDetails/LoginDetails";
import Dashboard from "../pages/home/Dashboard";
import ToolsProfile from "../pages/toolsProfile/ToolsProfile";
import BrandProfile from "../pages/brandProfile/BrandProfile";
import Usage from "../pages/usage/Usage";
import BillingAndPlans from "../pages/billing/BillingAndPlans";
import Security from "../pages/userProfile/Security";
import UserProfileScreen from "../pages/userProfile/UserProfileScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Login />
      </Layout>
    ),
  },
  {
    path: "/loginDetails",
    element: (
      <Layout>
        <LoginDetails />
      </Layout>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <Layout>
        <Dashboard />
      </Layout>
    ),
  },
  {
    path: "/toolsProfile",
    element: (
      <Layout>
        <ToolsProfile />
      </Layout>
    ),
  },
  {
    path: "/database",
    element: (
      <Layout>
        <BrandProfile />
      </Layout>
    ),
  },
  {
    path: "/usage",
    element: (
      <Layout>
        <Usage />
      </Layout>
    ),
  },
  {
    path: "/billingAndPlans",
    element: (
      <Layout>
        <BillingAndPlans />
      </Layout>
    ),
  },
  {
    path: "/userProfileScreen",
    element: (
      <Layout>
        <UserProfileScreen />
      </Layout>
    ),
  },
  {
    path: "/security",
    element: (
      <Layout>
        <Security />
      </Layout>
    ),
  },
]);

export default router;
