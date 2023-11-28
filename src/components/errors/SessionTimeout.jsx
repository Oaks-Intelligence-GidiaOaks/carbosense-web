import PropTypes from "prop-types";
import { useRef } from "react";
import { X } from "lucide-react";
import toast from "react-hot-toast";
import sessionTimeOut from "../../assets/session_timeout.svg";
import { useDispatch } from "react-redux";
import {
  clearSessionTimedOut,
  resetAccountActions,
} from "../../features/user/userSlice";

const SessionTimeout = ({ t }) => {
  const dispatch = useDispatch();
  const sessionTimeOutRef = useRef();

  const closeToast = (toastId) => {
    dispatch(clearSessionTimedOut());
    dispatch(resetAccountActions());
    toast.dismiss(toastId);
  };

  return (
    <div
      onClick={(e) =>
        sessionTimeOutRef.current &&
        !sessionTimeOutRef.current.contains(e.target) &&
        closeToast(t.id)
      }
      className={`${
        t.visible ? "animate-enter" : "animate-leave"
      } w-screen p-4 h-screen bg-[rgba(0,0,0,0.2)] backdrop-blur-lg flex justify-center items-center`}
    >
      <div
        ref={sessionTimeOutRef}
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } max-w-md w-full h-fit bg-white shadow-lg rounded-lg pointer-events-auto flex flex-col ring-1 ring-black ring-opacity-5`}
      >
        <div className="bg-yellow-300 rounded-t-lg w-full py-10 h-[180px] flex items-center justify-center relative">
          <X
            onClick={() => closeToast(t.id)}
            className="absolute top-3 right-3 cursor-pointer hover:text-primary-red hover:rotate-90 duration-300 transition-all"
          />
          <img
            alt="session expired"
            src={sessionTimeOut}
            className="w-[clamp(100px,50%,150px)]"
          />
        </div>
        <div className="pl-3 pt-2">
          <p className="text-xl font-semibold text-red-600">Expired Session!</p>
        </div>
        <div className="px-3 pt-5">
          <p>
            Your session expired and you&apos;ve been logged out. For security
            reasons, you need to sign in again to continue using this
            application.
          </p>
        </div>
        <div className="flex border-l mt-5 mb-3 mx-3 border-gray-200">
          <button
            onClick={() => closeToast(t.id)}
            className="w-full border border-transparent bg-gray-200 hover:bg-primary-blue hover:text-white transition-all duration-300
       rounded-none p-3 flex items-center justify-center text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary-blue"
          >
            Okay
          </button>
        </div>
      </div>
    </div>
  );
};

SessionTimeout.propTypes = {
  t: PropTypes.object.isRequired,
};

export default SessionTimeout;
