import PropTypes from "prop-types";
import { useRef } from "react";
import toast from "react-hot-toast";
import sessionTimeOut from "../../assets/session_timeout.svg";
import { useDispatch } from "react-redux";
import {
  clearSessionTimedOut,
  resetAccountActions,
} from "../../features/user/userSlice";
import { handleAxiosError } from "../../utils";
import { RotateCw } from "lucide-react";
import errorGraphic from "../../assets/error.svg";
import { Button } from "../ui";
import { motion } from "framer-motion";
import { initialUp, slideDown, slideUp } from "../../constants/framer";

const RequestError = ({ retryCallback, error, isLoading }) => {
  const dispatch = useDispatch();
  const sessionTimeOutRef = useRef();

  const closeToast = (toastId) => {
    dispatch(clearSessionTimedOut());
    dispatch(resetAccountActions());
    toast.dismiss(toastId);
  };

  return (
    <motion.div
      initial={initialUp}
      animate={slideDown}
      exit={slideUp}
      className="flex justify-center px-3"
    >
      <div
        ref={sessionTimeOutRef}
        className={`mx-auto mt-[10vh] max-w-md w-full h-fit bg-white rounded-lg pointer-events-auto flex flex-col ring-1 ring-black ring-opacity-5`}
      >
        <div className="bg-red-100 rounded-t-lg w-full py-10 h-[180px] flex items-center justify-center relative">
          <img
            alt="session expired"
            src={errorGraphic}
            className="w-[clamp(100px,50%,150px)]"
          />
        </div>
        <div className="pl-3 pt-2">
          <p className="text-xl font-semibold text-red-600">
            An Error Occured!🫢
          </p>
        </div>
        <div className="px-3 pt-5">
          <p>{handleAxiosError(error)}</p>
        </div>
        <div className="flex border-l mt-5 mb-3 mx-3 border-gray-200">
          <Button
            callback={() => retryCallback()}
            bgColor={"bg-gray-300"}
            textColor={"text-gray-800"}
            hoverColor={"hover:text-white hover:bg-primary-blue"}
            width={"w-full"}
            content={"Retry"}
            isLoading={isLoading}
            disabled={isLoading}
          />
        </div>
      </div>
    </motion.div>
  );
};

RequestError.propTypes = {
  retryCallback: PropTypes.func.isRequired,
  error: PropTypes.object.isRequired,
  isLoading: PropTypes.bool,
};

export default RequestError;
