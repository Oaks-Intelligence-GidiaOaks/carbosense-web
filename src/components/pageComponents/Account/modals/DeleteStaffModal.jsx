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
import { deleteStaff } from "../../../../features/staff/staffSlice";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { assignAdmin, removeDepartmentStaff } from "../../../../services";
import { handleAxiosError } from "../../../../utils";

const DeleteStaffModal = () => {
  const deleteStaffRef = useRef();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const { staffMember } = useSelector((state) => state.staff);
  const [isSuccessful, setIsSuccessful] = useState(false);

  const StaffName = staffMember.fullName;
  const payload = {
    departmentId: staffMember.departmentId,
    staffId: staffMember._id,
  };

  const remove_department_staff = useMutation({
    mutationKey: ["delete_staff"],
    mutationFn: async (data) => removeDepartmentStaff(data),
    onSuccess: (data) => {
      if (data.message === "Staff removed from department successfully") {
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
        deleteStaffRef.current &&
        !deleteStaffRef.current.contains(e.target) &&
        dispatch(deleteStaff(false))
      }
    >
      {" "}
      <motion.div
        ref={deleteStaffRef}
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
                  ? `${StaffName} was removed from department successfully`
                  : "Remove Department Staff"}
              </h2>

              <div className="mt-4">
                <p className="text-sm text-justify text-primary-gray">
                  You wish to remove{" "}
                  <span className="font-medium">{staffMember.fullName}</span>.
                  as a Staff of {staffMember.organizationName}. This action
                  cannot be undone!
                </p>
                <SizedBox height={"h-2"} />

                <div className="flex items-center gap-4 mt-4">
                  <button
                    onClick={() => dispatch(deleteStaff(false))}
                    className=" text-primary-blue border border-primary-blue hover:bg-red-500 hover:border-red-500 hover:text-white transition-all duration-300
       rounded-none h-8 px-3 flex items-center justify-center text-xs font-medium"
                  >
                    Cancel
                  </button>
                  <Button
                    content="Proceed"
                    width="w-[clamp(80px,20%,120px)]"
                    height="h-8"
                    textSize="text-xs"
                    callback={() => remove_department_staff.mutate(payload)}
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

export default DeleteStaffModal;
