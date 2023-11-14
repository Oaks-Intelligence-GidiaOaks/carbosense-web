import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { router } from "./roots/Router.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";
import { base_url, base_url_local } from "./constants/service.js";

const queryClient = new QueryClient();

// axios defaults
axios.defaults.baseURL = base_url_local;
axios.defaults.headers.post["Content-Type"] = "application/json";
// axios.defaults.headers.common["Authorization"] = `Bearer ${
//   user?.accessToken ?? user?.accesssToken ?? user?.user?.accessToken
// }`;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
      {/* <App /> */}
    </Provider>
  </React.StrictMode>
);
