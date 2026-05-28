import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/dashboard";
import Residents from '../pages/dashboard/Residents';

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        {
          index: true,
          element: <Dashboard />
        },
        {
          path : "residents",
            element : <Residents />
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;

