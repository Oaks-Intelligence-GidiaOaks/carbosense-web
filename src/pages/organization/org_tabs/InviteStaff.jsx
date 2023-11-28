import { useState } from "react";
import PropTypes from "prop-types";
import { Button, TextInput } from "../../../components/ui";
import validator from "validator";
import { useMutation } from "@tanstack/react-query";
import { inviteStaff } from "../../../services";
import toast from "react-hot-toast";
import { handleAxiosError } from "../../../utils";
import { AnimatePresence, motion } from "framer-motion";
import { initialRight, slideLeft } from "../../../constants/framer";

const InviteStaff = ({ onClose }) => {
  const [values, setValues] = useState({
    email: "",
    fullName: "",
  });
  const handleChange = (name, value) => {
    setValues({
      ...values,
      [name]: value,
    });
  };

  const inviteStaffMutation = useMutation({
    mutationKey: ["invite_staff"],
    mutationFn: (data) => inviteStaff(data),
    onSuccess: () => {
      toast.success(`Invite successfully sent to ${values.fullName}`, {
        duration: 5000,
      });
      setValues({
        email: "",
        fullName: "",
      });
    },
    onError: (e) => toast.error(handleAxiosError(e)),
  });
  return (
    <motion.div
      initial={initialRight}
      animate={slideLeft}
      exit={initialRight}
      className="bg-white px-4 py-4 md:px-10 md:py-10 rounded-sm"
    >
      <div className="mb-7">
        <h3 className="text-base font-medium text-primary-black mb-2">
          Send an invite
        </h3>
        <span className="text-sm text-primary-gray">
          Add a new member to your organization’s Carbosense account
        </span>
      </div>

      <div className="flex gap-x-6">
        <TextInput
          value={values.email}
          name={"email"}
          label={"Email address"}
          valueSetter={handleChange}
          width={"w-[clamp(200px,100%,640px)]"}
        />
        <TextInput
          value={values.fullName}
          name={"fullName"}
          label={"Full Name"}
          valueSetter={handleChange}
          width={"w-[clamp(200px,100%,640px)]"}
        />
      </div>

      <div className="flex justify-end mt-4 gap-x-4">
        <Button
          content="Cancel"
          bgColor="bg-white"
          textColor="text-primary-blue"
          hoverColor="hover:text-red-500 hover:border-red-500"
          width="w-[clamp(80px,20%,120px)]"
          height="h-8"
          borderStyle="border border-primary-blue border-primary-blue"
          textSize="text-sm"
          callback={onClose}
        />
        <Button
          content="Send Invite"
          width="w-[clamp(80px,20%,120px)]"
          height="h-8"
          textSize="text-sm"
          disabled={
            !validator.isEmail(values.email) ||
            validator.isEmpty(values.fullName) ||
            inviteStaffMutation.isPending
          }
          isLoading={inviteStaffMutation.isPending}
          callback={() => inviteStaffMutation.mutate(values)}
        />
      </div>
    </motion.div>
  );
};

InviteStaff.propTypes = {
  onClose: PropTypes.func,
};

export default InviteStaff;