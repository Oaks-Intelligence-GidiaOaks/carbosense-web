
import { createBrowserRouter } from "react-router-dom";
import { Login, Register } from "../pages";
import { OrganizationLayout } from "../components/layout";
import { Dashboard, Emissions, Invoice, Account, Organization } from "../pages/organization";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },

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
        element: <Organization />,
      },
    ],
  },
]);

