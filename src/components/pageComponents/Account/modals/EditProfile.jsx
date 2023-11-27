import { motion } from "framer-motion";
import {
  fadeIn,
  fadeOut,
  initialDown,
  invisible,
  slideDown,
  slideUp,
} from "../../../../constants/framer";
import { useRef } from "react";
import { X } from "lucide-react";
import { SizedBox } from "../../../ui";
import { useDispatch } from "react-redux";
import { editProfile } from "../../../../features/user/userSlice";

const EditProfile = () => {
  const dispatch = useDispatch();
  const editProfileRef = useRef();

  return (
    <motion.div
      initial={invisible}
      animate={fadeIn}
      exit={fadeOut}
      className="fixed p-4 inset-0 w-screen h-screen bg-modal-black backdrop-blur-lg overflow-y-auto"
    >
      <motion.div
        initial={initialDown}
        animate={slideUp}
        exit={slideDown}
        ref={editProfileRef}
        className={`relative mx-auto my-40 max-w-md w-full h-fit bg-white shadow-lg rounded-lg pointer-events-auto flex flex-col ring-1 ring-black ring-opacity-5`}
      >
        <X
          onClick={() => dispatch(editProfile(false))}
          className="absolute top-3 right-3 cursor-pointer hover:text-primary-red hover:rotate-90 duration-300 transition-all"
        />
        <div className="pl-3 pt-2">
          <p className="text-xl font-semibold">Edit Personal Details</p>
          {/* <SizedBox height /> */}
          <p className="">Update your information</p>
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
            // onClick={() => closeToast(t.id)}
            className="w-full border border-transparent bg-gray-200 hover:bg-primary-blue hover:text-white transition-all duration-300
       rounded-none p-3 flex items-center justify-center text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary-blue"
          >
            Okay
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default EditProfile;
