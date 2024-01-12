import { useState } from "react";
import { AllStaffCard } from "../../../components";
import InviteStaff from "./InviteStaff";
import { HiArrowLeft } from "react-icons/hi2";
import { AnimatePresence } from "framer-motion";
import Pagination from "../../../components/ui/Pagination";
import { useSelector } from "react-redux";
import { AccountPageShimmer } from "../../../primitives/shimmers";
import { getOrganizationPendingStaff } from "../../../services";
import { useQuery } from "@tanstack/react-query";

const tabs = ["Pending Invites", "Invited Org Member"];

const AllStaff = ({ staffInfo, isPending, isSuccess }) => {

  const { user } = useSelector((state) => state.user);

  const getAllPendingStaff = useQuery({
    queryKey: ["staff"],
    queryFn: () => getOrganizationPendingStaff(),
  });


  const [showInviteForm, setShowInviteForm] = useState(false);
  const [showBackButton, setShowBackButton] = useState(false);
  const [activeTab, setActiveTab] = useState("Pending Invites");

  const handleInviteClick = () => {
    setShowInviteForm(true);
    setShowBackButton(true);
  };

  const handleBackClick = () => {
    setShowInviteForm(false);
    setShowBackButton(false);
  };

  const formatIndustry = (industry) =>
    industry
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  return (
    <div>
      {isPending && <AccountPageShimmer />}
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
            {staffInfo ? staffInfo?.length : 0} Staff in{" "}
            {formatIndustry(user.organizationName)}
          </span>
        )}
        {!showInviteForm && (
          <button
            onClick={handleInviteClick}
            className="text-[12px] rounded border hover:opacity-50 border-primary-blue text-primary-blue py-1 px-2 mr-2 bg-[#E3ECFF]"
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
         
            <div className="overflow-x-scroll scrollbar-hidden">
            <div className="flex w-full">
              {tabs.map((tab, i) => (
                <p
                  onClick={() => setActiveTab(tab)}
                  key={i}
                  className={`${
                    activeTab === tab
                      ? " bg-primary-blue hover:opacity-50 text-white"
                      : "bg-[#E3ECFF] text-primary-black border-primary-blue border "
                  } flex justify-center items-center border border-solid  text-main poppins-4 px-5 py-2 mr-4 rounded cursor-pointer transit min-w-[200px] whitespace-nowrap`}
                >
                  <span className=" text-sm">{tab}</span>
                </p>
              ))}
            </div>
            </div>
          )}
            <div className="mt-4">
            {activeTab === "Pending Invites" && (
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
               {isSuccess &&
                 Boolean(staffInfo?.length) &&
                 staffInfo.map((staffMember) => (
                   <AllStaffCard
                     key={staffMember._id}
                     staffMember={staffMember}
                   />
                 ))}
             </div>
            )}

            {activeTab === "Invited Org Member" && (
              <>
                <div> Invited Org Member tab</div>
              </>
            )}
          </div>

          {/* <div className="mt-4">
            {activeTab === "Pending Invites" && (
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
               {isSuccess &&
                 Boolean(staffInfo?.length) &&
                 staffInfo.map((staffMember) => (
                   <AllStaffCard
                     key={staffMember._id}
                     staffMember={staffMember}
                   />
                 ))}
             </div>
            )}

            {activeTab === "Invited Org Member" && (
              <>
                <div> Invited Org Member tab</div>
              </>
            )}
          </div> */}
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

export default AllStaff;
