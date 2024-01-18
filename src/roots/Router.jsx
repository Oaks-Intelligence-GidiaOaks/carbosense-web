import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Login, Register } from "../pages";
import { OrganizationLayout, StaffLayout } from "../components/layout";

import {
  Dashboard,
  Emissions,
  Invoice,
  Account,
  OrganizationPage,
  ActivityLog,
} from "../pages/organization";

import {
  StaffDashboard,
  StaffActivityLog,
  StaffEmission,
  StaffAccount,
  StaffInvoice,
} from "../pages/staff";
import RootContainer from "../components/containers/RootContainer";
import EmissionReport from "../components/pageComponents/Emission/EmissionReport";

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
        <Route path="report/:id" element={<EmissionReport />} />
        {/* ... etc. */}
      </Route>

      {/* Staff routes */}
      <Route path="/staff" element={<StaffLayout />}>
        <Route index element={<StaffDashboard />} />
        <Route path="emissions" element={<StaffEmission />} />
        <Route path="invoice" element={<StaffInvoice />} />
        <Route path="account" element={<StaffAccount />} />
        <Route path="activity" element={<StaffActivityLog />} />
     
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
      {
        path: "report",
        element: <EmissionReport />,
      },
    ],
  },

    // Staff routes
    {
      path: "/staff",
      element: <StaffLayout />,
      children: [
        {
          path: "/staff",
          element: <StaffDashboard />,
        },
        {
          path: "emissions",
          element: <StaffEmission />,
        },
        {
          path: "invoice",
          element: <StaffInvoice />,
        },
        {
          path: "account",
          element: <StaffAccount />,
        },
   
        {
          path: "activity",
          element: <StaffActivityLog />,
        },
   
      ],
    },
]);
