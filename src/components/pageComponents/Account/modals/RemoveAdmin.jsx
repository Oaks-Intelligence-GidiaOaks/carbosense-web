import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  fadeIn,
  fadeOut,
  initialDown,
  invisible,
  slideDown,
  slideUp,
} from "../../../../constants/framer";
import makeAdminFrame from "../../../../assets/makeAdminFrame.svg";
import { Button, SizedBox } from "../../../ui";
import { useDispatch, useSelector } from "react-redux";
import {
  addToDepart,
  removeAdmin,
} from "../../../../features/staff/staffSlice";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { assignAdmin, removeAdminMutation } from "../../../../services";
import { handleAxiosError } from "../../../../utils";

const RemoveAdmin = () => {
  const removeAdminRef = useRef();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const [isSuccessful, setIsSuccessful] = useState(false);

  const { staffMember } = useSelector((state) => state.staff);

  const StaffName = staffMember.fullName;
  const payload = {
    departmentId: staffMember.departmentId,
    staffId: staffMember._id,
  };

  const remove_Amin_mutation = useMutation({
    mutationKey: ["make_admin"],
    mutationFn: async (data) => removeAdminMutation(data),

    onSuccess: (data) => {
      if (
        data.message === `${StaffName} successfully removed as department lead`
      ) {
        setIsSuccessful(true);
      }

      queryClient.invalidateQueries(["department_staff"]);
    },

    onError: (e) => handleAxiosError(e),
  });

  return (
    <motion.div
      initial={invisible}
      animate={fadeIn}
      exit={fadeOut}
      className="fixed p-4 inset-0 w-screen h-screen bg-modal-black backdrop-blur-sm overflow-y-auto"
      onClick={(e) =>
        removeAdminRef.current &&
        !removeAdminRef.current.contains(e.target) &&
        dispatch(removeAdmin(false))
      }
    >
      {" "}
      <motion.div
        ref={removeAdminRef}
        initial={initialDown}
        animate={slideUp}
        exit={slideDown}
        className="relative mx-auto mt-24 mb-10 max-w-2xl w-full rounded-lg pointer-events-auto"
      >
        <div className="px-3 pt-10">
          <div className="bg-white overflow-hidden rounded-3xl flex items-center w-full ">
            <img
              src={makeAdminFrame}
              alt=""
              className="w-full h-72 object-cover "
            />
            <div className="p-6 w-full">
              <h2
                className={`text-lg font-medium ${
                  isSuccessful ? "text-green-500" : "text-primary-purple"
                }`}
              >
                {isSuccessful
                  ? `${StaffName} was successfully removed as department lead`
                  : "Remove Admin"}
              </h2>
              <div className="mt-4">
                <p className="text-sm text-justify text-primary-gray">
                  You wish to remove{" "}
                  <span className="font-medium">{staffMember.fullName}</span>{" "}
                  from being an admin. This action will revoke all privileges
                  and access within your organization's account and activities.
                </p>

                <SizedBox height={"h-2"} />

                <div className="flex items-center gap-4 mt-4">
                  <Button
                    content="Close"
                    bgColor="bg-white"
                    width="w-[clamp(80px,20%,120px)]"
                    height="h-8"
                    borderStyle="border border-primary-blue"
                    textColor=" text-primary-blue"
                    textSize="text-xs"
                    callback={() => dispatch(removeAdmin(false))}
                  />
                  <Button
                    content="Yes, Proceed"
                    width="w-[clamp(80px,20%,120px)]"
                    height="h-8"
                    textSize="text-xs"
                    callback={() => remove_Amin_mutation.mutate(payload)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default RemoveAdmin;
