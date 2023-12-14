import { useState } from "react";
import { AllStaffCard } from "../../../components";
import InviteStaff from "./InviteStaff";
import { HiArrowLeft } from "react-icons/hi2";
import { AnimatePresence } from "framer-motion";
import Pagination from "../../../components/ui/Pagination";

const AllStaff = () => {
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
            className="text-[12px] border border-primary-blue text-primary-blue py-1 px-2 mr-2 bg-[#E3ECFF]"
          >
            Invite Staff
          </button>
        )}
      </div>

      <div className="mt-4">
        <AnimatePresence mode="sync">
          {showInviteForm ? (
            <InviteStaff onClose={() => setShowInviteForm(false)} />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <AllStaffCard />
              <AllStaffCard />
              <AllStaffCard />
            </div>
          )}

          {!showInviteForm && (<div className="flex items-center justify-between my-5">
            <Pagination />
            {/* <div>Loading</div> */}
          </div>)}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AllStaff;
