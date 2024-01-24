import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  addToDepart,
  updateStaff,
  makeAdmin,
  removeAdmin,
  deleteStaff,
} from "../../../../features/staff/staffSlice";

const StaffModal = ({ staffID, staffMember, closeModal }) => {
  const dispatch = useDispatch();

  const handleAddStaffToDepartment = () => {
    dispatch(updateStaff({ staffID, staffMember }));
    dispatch(addToDepart(true));
  };

  const handleAdminAction = () => {
    if (staffMember.isHod) {
      dispatch(updateStaff({ staffID, staffMember }));
      dispatch(removeAdmin(true));
    } else {
      dispatch(updateStaff({ staffID, staffMember }));
      dispatch(makeAdmin(true));
    }
  };

  const handleDeleteStaff = () => {
    dispatch(updateStaff({ staffID, staffMember }));
    dispatch(deleteStaff(true));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center">
      <div>
        <div className="bg-white p-2 rounded-lg flex flex-col">
          <button
            onClick={handleAddStaffToDepartment}
            className=" bg-primary-blue hover:bg-opacity-30 text-white p-1 text-xs rounded w-full"
          >
            Assign admin role
          </button>

          <button
            onClick={handleAdminAction}
            className=" bg-primary-blue hover:bg-opacity-30 text-white text-xs mt-2 p-1  rounded w-full"
          >
            {staffMember.isHod ? "Remove HOD" : "Make HOD"}
          </button>

          <button
            onClick={handleDeleteStaff}
            className=" text-white bg-primary-blue mt-2 p-1 hover:opacity-30 rounded  text-xs cursor-pointer"
          >
            Assign to department
          </button>
        </div>
      </div>
    </div>
  );
};

export default StaffModal;
