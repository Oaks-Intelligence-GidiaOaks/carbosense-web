import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonTheme } from "react-loading-skeleton";
import { AxiosConfig, ToasterConfig } from "./roots";
import { router } from "./roots/Router.jsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store}>
    <AxiosConfig>
      <QueryClientProvider client={queryClient}>
        <SkeletonTheme baseColor="#d9d9d9" highlightColor="#e9e9e9">
          <RouterProvider key={location.pathname} router={router} />
        </SkeletonTheme>
        <ToasterConfig />
      </QueryClientProvider>
    </AxiosConfig>
    {/* <App /> */}
  </Provider>
  // </React.StrictMode>
);
