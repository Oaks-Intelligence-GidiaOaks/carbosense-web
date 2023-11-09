// import { createBrowserRouter, Routes, Route, Outlet } from "react-router-dom";
// import { Login, Register } from "../pages";
// import { OrganizationLayout } from "../components/layout";
// import { Dashboard, Emissions } from "../pages/organization";

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Login />,
//   },
//   {
//     path: "/register",
//     element: <Register />,
//   },

//   {
//     path: "/admin",
//     element: <OrganizationLayout />,
//     children: [
//       {
//         path: "admin",
//         element: <Dashboard />,

//       },
//       {
//         path: "/admin/emissions",
//         element: <Emissions />,

//       },
//     ]
//   },
// ]);


import { createBrowserRouter } from "react-router-dom";
import { Login, Register } from "../pages";
import { OrganizationLayout } from "../components/layout";
import { Dashboard, Emissions } from "../pages/organization";

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
    ],
  },
]);

