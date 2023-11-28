import { motion } from "framer-motion";
import {
  fadeIn,
  fadeOut,
  initialDown,
  invisible,
  slideDown,
  slideUp,
} from "../../../../constants/framer";
import { useRef, useState } from "react";
import { X } from "lucide-react";
import { Button, SizedBox, TextInput } from "../../../ui";
import { useDispatch, useSelector } from "react-redux";
import { editProfile } from "../../../../features/user/userSlice";
import PhoneNumberInput from "../../../ui/PhoneInput";
import * as _ from "lodash";
import validator from "validator";

const EditProfile = () => {
  const dispatch = useDispatch();
  const editProfileRef = useRef();
  const { user } = useSelector((state) => state.user);

  const initialValues = {
    fullName: user.fullName,
    email: user.email,
    tel: user.tel,
  };
  const [profileInfo, setProfileInfo] = useState({
    fullName: user.fullName,
    email: user.email,
    tel: user.tel,
  });

  // custom setter function for auth input fields
  const setFormValue = (name, value) => {
    setProfileInfo((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <motion.div
      initial={invisible}
      animate={fadeIn}
      exit={fadeOut}
      className="fixed p-4 inset-0 w-screen h-screen bg-modal-black backdrop-blur-lg overflow-y-auto"
      onClick={(e) =>
        editProfileRef.current &&
        !editProfileRef.current.contains(e.target) &&
        dispatch(editProfile(false))
      }
    >
      <motion.div
        initial={initialDown}
        animate={slideUp}
        exit={slideDown}
        ref={editProfileRef}
        className={` relative mx-auto mt-28 mb-10 max-w-md w-full h-fit bg-white shadow-lg rounded-lg pointer-events-auto flex flex-col ring-1 ring-black ring-opacity-5`}
      >
        <X
          onClick={() => dispatch(editProfile(false))}
          className="absolute top-3 right-3 cursor-pointer hover:text-primary-red hover:rotate-90 duration-300 transition-all"
        />
        <div className="pl-3 pt-5">
          <p className="text-xl font-semibold">Edit Personal Details</p>
          {/* <SizedBox height /> */}
          <p className="">Update your information</p>
        </div>
        <div className="px-3 pt-10">
          <TextInput
            width={"w-[clamp(240px,100%,480px)]"}
            value={profileInfo.fullName}
            valueSetter={setFormValue}
            name={"fullName"}
            label={"Full Name"}
          />
          <SizedBox height={"h-6"} />
          <TextInput
            width={"w-[clamp(240px,100%,480px)]"}
            value={profileInfo.email}
            valueSetter={setFormValue}
            name={"email"}
            label={"Email"}
          />
          <SizedBox height={"h-6"} />
          <PhoneNumberInput
            width={"w-[clamp(240px,100%,480px)]"}
            value={profileInfo.tel}
            valueSetter={setFormValue}
            name={"tel"}
          />
        </div>
        <div className="flex border-l gap-x-5 mt-10 mb-3 mx-3 border-gray-200">
          <button
            onClick={() => dispatch(editProfile(false))}
            className="w-full border border-[#ACB7BC] hover:bg-red-500 hover:border-red-500 hover:text-white transition-all duration-300
       rounded-none p-3 flex items-center justify-center text-sm font-medium"
          >
            Cancel
          </button>
          <Button
            disabled={
              _.isEqual(initialValues, profileInfo) ||
              _.isEmpty(profileInfo.fullName) ||
              !validator.isEmail(profileInfo.email) ||
              profileInfo.tel.trim().length < 6
            }
            content={"Save Changes"}
            width={"w-full"}
          >
            Save Changes
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default EditProfile;
