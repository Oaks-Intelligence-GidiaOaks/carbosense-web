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
import { editOrg, editProfile } from "../../../../features/user/userSlice";
import PhoneNumberInput from "../../../ui/PhoneInput";
import * as _ from "lodash";
import validator from "validator";

const OrgProfile = () => {
  const dispatch = useDispatch();
  const modalRef = useRef();
  const { user } = useSelector((state) => state.user);

  const initialValues = {
    orgName: user.organizationName,
    fullName: user.fullName,
    email: user.companyEmail,
    tel: user.tel,
  };
  const [orgInfo, setOrgInfo] = useState({
    orgName: user.organizationName,
    fullName: user.fullName,
    email: user.companyEmail,
    tel: user.tel,
  });

  // custom setter function for auth input fields
  const setFormValue = (name, value) => {
    setOrgInfo((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <motion.div
      initial={invisible}
      animate={fadeIn}
      exit={fadeOut}
      className="fixed p-4 inset-0 w-screen h-screen bg-modal-black backdrop-blur-lg overflow-y-auto"
      onClick={(e) =>
        modalRef.current &&
        !modalRef.current.contains(e.target) &&
        dispatch(editOrg(false))
      }
    >
      <motion.div
        initial={initialDown}
        animate={slideUp}
        exit={slideDown}
        ref={modalRef}
        className={` relative mx-auto mt-28 mb-10 max-w-md w-full h-fit bg-white shadow-lg rounded-lg pointer-events-auto flex flex-col ring-1 ring-black ring-opacity-5`}
      >
        <X
          onClick={() => dispatch(editOrg(false))}
          className="absolute top-3 right-3 cursor-pointer hover:text-primary-red hover:rotate-90 duration-300 transition-all"
        />
        <div className="pl-3 pt-5">
          <p className="text-xl font-semibold">Edit Organization Details</p>
          {/* <SizedBox height /> */}
          <p className="">Update your organization&apos;s information</p>
        </div>
        <div className="px-3 pt-10">
          <TextInput
            width={"w-[clamp(240px,100%,480px)]"}
            value={orgInfo.orgName}
            valueSetter={setFormValue}
            name={"orgName"}
            label={"Organization Name"}
          />
          <SizedBox height={"h-6"} />
          <TextInput
            width={"w-[clamp(240px,100%,480px)]"}
            value={orgInfo.email}
            valueSetter={setFormValue}
            name={"email"}
            label={"Organization Email"}
            isDisabled={true}
          />
          <SizedBox height={"h-6"} />
          <PhoneNumberInput
            width={"w-[clamp(240px,100%,480px)]"}
            value={orgInfo.tel}
            valueSetter={setFormValue}
            name={"tel"}
          />
          <SizedBox height={"h-6"} />
          <TextInput
            width={"w-[clamp(240px,100%,480px)]"}
            value={orgInfo.fullName}
            valueSetter={setFormValue}
            name={"fullName"}
            label={"Created By"}
            isDisabled={true}
          />
        </div>
        <div className="flex border-l gap-x-5 mt-10 mb-3 mx-3 border-gray-200">
          <button
            onClick={() => dispatch(editOrg(false))}
            className="w-full border border-[#ACB7BC] hover:bg-red-500 hover:border-red-500 hover:text-white transition-all duration-300
       rounded-none p-3 flex items-center justify-center text-sm font-medium"
          >
            Cancel
          </button>
          <Button
            // disabled={
            //   _.isEqual(initialValues, profileInfo) ||
            //   _.isEmpty(profileInfo.fullName) ||
            //   !validator.isEmail(profileInfo.email) ||
            //   profileInfo.tel.trim().length < 6
            // }
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

export default OrgProfile;
