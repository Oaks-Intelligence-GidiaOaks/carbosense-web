import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  addToDepart,
  updateStaff,
  makeAdmin,
  removeAdmin
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


  return (
    <div className="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center">
      <div>
        <div
        
        className="bg-white p-2 rounded-lg flex flex-col">
          <h2 className=" font-semibold mb-2 text-sm">Staff Actions</h2>

          <button
            onClick={handleAddStaffToDepartment}
            className=" bg-primary-blue hover:bg-opacity-30 text-white p-1 text-xs rounded w-full"
          >
            Add to Department
          </button>

          <button
            onClick={handleAdminAction}
            className=" bg-primary-blue hover:bg-opacity-30 text-white text-xs mt-2 p-1  rounded w-full"
          >
            {staffMember.isHod ? "Unassigned Admin" : "Make Admin"}
          </button>

          <button
            onClick={closeModal}
            className=" text-white bg-red-700 mt-2 p-1 hover:opacity-30 rounded  text-xs cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default StaffModal;
