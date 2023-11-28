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
import { Button, PasswordInput, SizedBox } from "../../../ui";
import { useDispatch } from "react-redux";
import { changePassword } from "../../../../features/user/userSlice";
import validator from "validator";
import { useMutation } from "@tanstack/react-query";
import { changePasswordValue } from "../../../../services";
import toast from "react-hot-toast";
import { handleAxiosError } from "../../../../utils";

const ChangePassword = () => {
  const dispatch = useDispatch();
  const modalRef = useRef();

  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirmNew: "",
  });

  // custom setter function for auth input fields
  const setFormValue = (name, value) => {
    setPasswords((prev) => ({ ...prev, [name]: value }));
  };

  const changePasswordMutation = useMutation({
    mutationKey: ["change_password"],
    mutationFn: (data) => changePasswordValue(data),
    onSuccess: () => {
      toast.success(`Password updated successfully`, {
        duration: 5000,
        id: "profile-updated",
      });
      dispatch(changePassword(false));
    },
    onError: (e) => toast.error(handleAxiosError(e)),
  });

  return (
    <motion.div
      initial={invisible}
      animate={fadeIn}
      exit={fadeOut}
      className="fixed p-4 inset-0 w-screen h-screen bg-modal-black backdrop-blur-lg overflow-y-auto"
      onClick={(e) =>
        modalRef.current &&
        !modalRef.current.contains(e.target) &&
        dispatch(changePassword(false))
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
          onClick={() => dispatch(changePassword(false))}
          className="absolute top-3 right-3 cursor-pointer hover:text-primary-red hover:rotate-90 duration-300 transition-all"
        />
        <div className="pl-3 pt-5">
          <p className="text-xl font-semibold">Change Password</p>
          {/* <SizedBox height /> */}
          <p className="">Update your password</p>
        </div>
        <div className="px-3 pt-10">
          <PasswordInput
            width={"w-[clamp(240px,100%,480px)]"}
            value={passwords.current}
            valueSetter={setFormValue}
            name={"current"}
            label={"Current Password"}
          />
          <SizedBox height={"h-6"} />
          <PasswordInput
            width={"w-[clamp(240px,100%,480px)]"}
            value={passwords.new}
            valueSetter={setFormValue}
            name={"new"}
            label={"New Password"}
            newPassword={true}
          />
          <SizedBox height={"h-6"} />
          <PasswordInput
            width={"w-[clamp(240px,100%,480px)]"}
            value={passwords.confirmNew}
            valueSetter={setFormValue}
            name={"confirmNew"}
            label={"Confirm Password"}
          />
          <SizedBox height={"h-6"} />
        </div>
        <div className="flex border-l gap-x-5 mt-10 mb-3 mx-3 border-gray-200">
          <button
            onClick={() => dispatch(changePassword(false))}
            className="w-full border border-[#ACB7BC] hover:bg-red-500 hover:border-red-500 hover:text-white transition-all duration-300
       rounded-none p-3 flex items-center justify-center text-sm font-medium"
          >
            Cancel
          </button>
          <Button
            disabled={
              !validator.isStrongPassword(passwords.current, {
                minLength: 6,
                minNumbers: 1,
                minUppercase: 1,
                minSymbols: 1,
                minLowercase: 1,
              }) ||
              !validator.isStrongPassword(passwords.new, {
                minLength: 6,
                minNumbers: 1,
                minUppercase: 1,
                minSymbols: 1,
                minLowercase: 1,
              }) ||
              !validator.isStrongPassword(passwords.confirmNew, {
                minLength: 6,
                minNumbers: 1,
                minUppercase: 1,
                minSymbols: 1,
                minLowercase: 1,
              }) ||
              changePasswordMutation.isPending
            }
            content={"Save Changes"}
            width={"w-full"}
            callback={() =>
              changePasswordMutation.mutate({
                oldPassword: passwords.current,
                newPassword: passwords.new,
              })
            }
            isLoading={changePasswordMutation.isPending}
          >
            Save Changes
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ChangePassword;
