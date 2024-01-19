import { useEffect, useState } from "react";
import { AllStaffCard } from "../../../components";
import InviteStaff from "./InviteStaff";
import { HiArrowLeft } from "react-icons/hi2";
import { AnimatePresence } from "framer-motion";
import Pagination from "../../../components/ui/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { AccountPageShimmer } from "../../../primitives/shimmers";
import {
  getAllDepartment,
  getAllOrganizationStaff,
  getOrganizationPendingStaff,
} from "../../../services";
import { useQuery } from "@tanstack/react-query";
import {
  setOrgData,
  setDeptData,
} from "../../../features/organization/organizationSlice";

const tabs = ["Invited Member", "Pending Invites"];

const AllStaff = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const get_All_Organization_staff = useQuery({
    queryKey: ["department_staff"],
    queryFn: () => getAllOrganizationStaff(),
    onSuccess: (data) => {
      dispatch(setOrgData(data?.data));
    },
    refetchOnMount: false,
    retryOnMount: false,
    retry: false,
  });

  const getAllPendingStaff = useQuery({
    queryKey: ["staff"],
    queryFn: () => getOrganizationPendingStaff(),
  });

  const get_All_Departments = useQuery({
    queryKey: ["department"],
    queryFn: () => getAllDepartment(),
    onSuccess: (data) => {
      dispatch(setDeptData(data?.data));
    },
    refetchOnMount: false,
    retryOnMount: false,
    retry: false,
  });

  useEffect(() => {
    if (get_All_Organization_staff) {
      dispatch(setOrgData(get_All_Organization_staff?.data?.data));
    }
  }, [get_All_Organization_staff, dispatch]);

  useEffect(() => {
    if (get_All_Departments) {
      dispatch(setDeptData(get_All_Departments?.data?.data));
    }
  }, [get_All_Departments, dispatch]);

  const [showInviteForm, setShowInviteForm] = useState(false);
  const [showBackButton, setShowBackButton] = useState(false);
  const [activeTab, setActiveTab] = useState("Invited Org Member");

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
      {get_All_Organization_staff.isPending && <AccountPageShimmer />}
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
            {get_All_Organization_staff?.data?.data
              ? get_All_Organization_staff.data.data?.length
              : 0}{" "}
            Staff in {formatIndustry(user.organizationName)}
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
            {get_All_Organization_staff?.data?.data ? (
              <>
                {!showInviteForm && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {activeTab === "Pending Invites" &&
                      getAllPendingStaff?.data?.data.map((staffMember) => (
                        <AllStaffCard
                          key={staffMember._id}
                          staffMember={staffMember}
                        />
                      ))}
                    {activeTab !== "Pending Invites" &&
                      get_All_Organization_staff.isSuccess &&
                      Boolean(get_All_Organization_staff.data.data?.length) &&
                      get_All_Organization_staff.data.data.map(
                        (staffMember) => (
                          <AllStaffCard
                            key={staffMember._id}
                            staffMember={staffMember}
                          />
                        )
                      )}
                  </div>
                )}
              </>
            ) : (
              <>
                {activeTab === "Pending Invites" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {getAllPendingStaff?.data?.data.map((staffMember) => (
                      <AllStaffCard
                        key={staffMember._id}
                        staffMember={staffMember}
                      />
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AllStaff;
