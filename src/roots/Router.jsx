import { createBrowserRouter } from "react-router-dom";
import { Login, Register } from "../pages";
import { OrganizationLayout } from "../components/layout";
import { Dashboard, Emissions, Invoice, Account, OrganizationPage, ActivityLog } from "../pages/organization";
import RootContainer from "../components/containers/RootContainer";

export const router = createBrowserRouter([
  // login
  {
    path: "/",
    element: <RootContainer />,
    children: [
      {
        index: true,
        element: <Login />,
      },
    ],
  },
  // registere
  {
    path: "/register",
    element: <RootContainer />,
    children: [
      {
        index: true,
        element: <Register />,
      },
    ],
  },
  // admin
  {
    path: "/admin",
    element: <OrganizationLayout />,
    children: [
      {
        path: "/admin",
        element: <Dashboard />,
      },
      {
        path: "emissions",
        element: <Emissions />,
      },
      {
        path: "invoice",
        element: <Invoice />,
      },
      {
        path: "account",
        element: <Account />,
      },
      {
        path: "organization",
        element: <OrganizationPage />,
        
      },
      {
        path: "activity",
        element: <ActivityLog />,
        
      },

    ],
  },
]);
