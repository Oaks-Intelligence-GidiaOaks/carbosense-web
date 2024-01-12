import React, { useState } from "react";
import { HiArrowLeft } from "react-icons/hi2";
import Pagination from "../../../components/ui/Pagination";
import { AnimatePresence } from "framer-motion";
import InviteStaff from "./InviteStaff";
import CreateDepartment from "./CreateDepartment";
import { useSelector } from "react-redux";
import { getAllDepartmentStaff } from "../../../services";
import { useQuery } from "@tanstack/react-query";

const MyDepartment = () => {

  const [showInviteForm, setShowInviteForm] = useState(false);
  const [showBackButton, setShowBackButton] = useState(false);

  const handleInviteClick = () => {
    setShowInviteForm(true);
    setShowBackButton(true);
  };

  const handleBackClick = () => {
    setShowInviteForm(false);
    setShowBackButton(false);
  };

  return (
    <div>
      <div className="flex item justify-between">
        {showBackButton ? (
          <div
            className="flex items-center gap-4 hover:cursor-pointer"
            onClick={handleBackClick}
          >
            <HiArrowLeft />
            <span className="text-sm">Back</span>
          </div>
        ) : (
          <span className="text-sm text-primary-black">
            0 Staff Total in Escrow Tech
          </span>
        )}
        {!showInviteForm && (
          <button
            onClick={handleInviteClick}
            className="text-[12px] border rounded border-primary-blue text-primary-blue py-[6px] px-2  bg-[#E3ECFF]"
          >
            Create Department
          </button>
        )}
      </div>
      <div className="mt-4">
        <AnimatePresence mode="sync">
          {showInviteForm ? (
            <CreateDepartment onClose={() => setShowInviteForm(false)} />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* <AllStaffCard />
              <AllStaffCard />
              <AllStaffCard /> */}
            </div>
          )}

          {!showInviteForm && (
            <div className="flex items-center justify-between my-5">
              <Pagination />
              {/* <div>Loading</div> */}
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MyDepartment;

