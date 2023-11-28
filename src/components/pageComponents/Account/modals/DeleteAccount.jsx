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
import { Button, PasswordInput, SizedBox, TextInput } from "../../../ui";
import { useDispatch } from "react-redux";
import { deleteAccount } from "../../../../features/user/userSlice";
import * as _ from "lodash";
import validator from "validator";

const DeleteAccount = () => {
  const dispatch = useDispatch();
  const modalRef = useRef();

  const [deleteAction, setDeleteAction] = useState({
    password: "",
    phrase: "",
  });

  // custom setter function for auth input fields
  const setFormValue = (name, value) => {
    setDeleteAction((prev) => ({ ...prev, [name]: value }));
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
        dispatch(deleteAccount(false))
      }
    >
      <motion.div
        initial={initialDown}
        animate={slideUp}
        exit={slideDown}
        ref={modalRef}
        className={`relative mx-auto mt-28 mb-10 max-w-md w-full h-fit bg-white shadow-lg rounded-lg pointer-events-auto flex flex-col ring-1 ring-black ring-opacity-5`}
      >
        <X
          onClick={() => dispatch(deleteAccount(false))}
          className="absolute top-3 right-3 cursor-pointer hover:text-primary-red hover:rotate-90 duration-300 transition-all"
        />
        <div className="pl-3 pt-5">
          <p className="text-xl font-semibold text-red-500">Delete Account</p>
          {/* <SizedBox height /> */}
          <SizedBox height={"h-4"} />
          <p className="">
            Are you sure you want to delete your account? This action is{" "}
            <span className="font-semibold text-red-500">irreversible</span>
          </p>
        </div>
        <div className="px-3 pt-10">
          <p className="">Enter your password to prove your identity.</p>
          <SizedBox height={"h-4"} />
          <PasswordInput
            width={"w-[clamp(240px,100%,480px)]"}
            value={deleteAction.password}
            valueSetter={setFormValue}
            name={"password"}
            label={"Password"}
          />
          <SizedBox height={"h-6"} />
          <p className="">
            Enter{" "}
            <span className="font-semibold text-red-500">
              delete my account
            </span>{" "}
            below to confirm your action.
          </p>
          <SizedBox height={"h-4"} />
          <TextInput
            width={"w-[clamp(240px,100%,480px)]"}
            value={deleteAction.phrase}
            valueSetter={setFormValue}
            name={"phrase"}
            label={""}
          />
        </div>
        <div className="flex border-l gap-x-5 mt-10 mb-3 mx-3 border-gray-200">
          <button
            onClick={() => dispatch(deleteAccount(false))}
            className="w-full border border-[#ACB7BC] hover:bg-primary-blue hover:border-primary-blue hover:text-white transition-all duration-300
       rounded-none p-3 flex items-center justify-center text-sm font-medium"
          >
            Cancel
          </button>
          <Button
            disabled={
              !validator.isStrongPassword(deleteAction.password, {
                minLength: 6,
                minNumbers: 1,
                minUppercase: 1,
                minSymbols: 1,
                minLowercase: 1,
              }) || !_.isEqual(deleteAction.phrase, "delete my account")
            }
            content={"Delete"}
            width={"w-full"}
            bgColor={"bg-red-600"}
            hoverColor={"hover:bg-red-800"}
          >
            Save Changes
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DeleteAccount;
