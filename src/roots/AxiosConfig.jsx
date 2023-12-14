import axios from "axios";
import PropTypes from "prop-types";
import { base_url, base_url_local } from "../constants/service";
import { useDispatch, useSelector } from "react-redux";
import secureLocalStorage from "react-secure-storage";
import { removeUser, setSessionTimedOut } from "../features/user/userSlice";
import toast from "react-hot-toast";
import { SessionTimeout } from "../components/errors";

const AxiosConfig = ({ children }) => {
  const dispatch = useDispatch();
  const { accessToken } = useSelector((state) => state.user);

  // axios defaults
  axios.defaults.baseURL = base_url;
  axios.defaults.headers.post["Content-Type"] = "application/json";
  axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

  //   interceptors
  axios.interceptors.request.use(async (req) => {
    console.log("request: ", req);
    return req;
  });

  axios.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      if (
        error.response.status === 401 ||
        error.response.statusText === "Unauthorized"
      ) {
        secureLocalStorage.clear();
        dispatch(removeUser());
        dispatch(setSessionTimedOut());
        {
          toast.custom((t) => <SessionTimeout t={t} />, {
            duration: Infinity,
            id: "expired-session",
          });
        }
      }
      return Promise.reject(error);
    }
  );

  return <>{children}</>;
};

AxiosConfig.propTypes = {
  children: PropTypes.node,
};

export default AxiosConfig;
