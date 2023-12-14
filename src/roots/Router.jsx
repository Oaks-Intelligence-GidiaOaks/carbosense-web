import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Login, Register } from "../pages";
import { OrganizationLayout } from "../components/layout";
import {
  Dashboard,
  Emissions,
  Invoice,
  Account,
  OrganizationPage,
  ActivityLog,
} from "../pages/organization";
import RootContainer from "../components/containers/RootContainer";

// export const router = createBrowserRouter([
//   // login
//   {
//     path: "/",
//     element: <RootContainer />,
//     children: [
//       {
//         index: true,
//         element: <Login />,
//       },
//     ],
//   },
//   // registere
//   {
//     path: "/register",
//     element: <RootContainer />,
//     children: [
//       {
//         index: true,
//         element: <Register />,
//       },
//     ],
//   },
//   // admin
//   {
//     path: "/admin",
//     element: <OrganizationLayout />,
//     children: [
//       {
//         path: "/admin",
//         element: <Dashboard />,
//       },
//       {
//         path: "emissions",
//         element: <Emissions />,
//       },
//       {
//         path: "invoice",
//         element: <Invoice />,
//       },
//       {
//         path: "account",
//         element: <Account />,
//       },
//       {
//         path: "organization",
//         element: <OrganizationPage />,

//       },
//       {
//         path: "activity",
//         element: <ActivityLog />,

//       },

//     ],
//   },
// ]);

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootContainer />}>
        <Route index element={<Login />} />
        {/* ... etc. */}
      </Route>
      <Route path="/" element={<RootContainer />}>
        <Route path="register" element={<Register />} />
        {/* ... etc. */}
      </Route>
      <Route path="/admin" element={<OrganizationLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="emissions" element={<Emissions />} />
        <Route path="invoice" element={<Invoice />} />
        <Route path="account" element={<Account />} />
        <Route path="organization" element={<OrganizationPage />} />
        <Route path="activity" element={<ActivityLog />} />
        {/* ... etc. */}
      </Route>
    </>
  )
);

createBrowserRouter([
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
