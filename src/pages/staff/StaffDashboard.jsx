import React from "react";
import DashboardFrame from "../../assets/icons/DashboardFrame.svg";
import alertcircle from "../../assets/icons/alertcircle.svg";
import { DashboardStats } from "../../components";
import { EmissionsGrid } from "../../components/grid";
import { AnimatePresence, motion } from "framer-motion";
import { initialUp, slideDown } from "../../constants/framer";
import Pagination from "../../components/ui/Pagination";
import { useSelector } from "react-redux";
import UserGreeting from "../../components/pageComponents/Account/modals/UserGreeting";
import UserWelcomeBack from "../../components/pageComponents/Account/modals/UserWelcomeBack";
import { useQuery } from "@tanstack/react-query";
import { getAllDepartmentEmission, getUserEmission } from "../../services";
import { AccountPageShimmer } from "../../primitives/shimmers";

const StaffDashboard = () => {
  const { setshowGreetingModal, setshowWelcomeBack } = useSelector(
    (state) => state.user
  );

  const get_all_department_emission = useQuery({
    queryKey: ["department_emission"],
    queryFn: () => getAllDepartmentEmission(),
  });
  const get_user_emission = useQuery({
    queryKey: ["user_emission"],
    queryFn: () => getUserEmission(),
  });

  const emissionData = get_all_department_emission.data?.data || [];

  const tableData = emissionData.map((item) => ({
    id: item._id,
    department_name: item.departmentName,
    staff_count: item.staffCount,
    percentage_contribution: item.percentageContribution,
    total_emission: item.totalEmissions,
    emission_sources: item.emissionSources,
  }));
  return (
    <AnimatePresence mode="wait">
      {get_all_department_emission.isPending && <AccountPageShimmer />}
      <motion.div
        initial={initialUp}
        animate={slideDown}
        exit={initialUp}
        className="mb-20 lg:mb-0"
      >
        <div className="md:px-8">
          <div className="bg-[#FFFFFF] border-l-[6px] h-[60px] border-l-[#FF331E] flex items-center justify-between pr-6">
            <div className="flex flex-col  items-start px-8 h-full justify-center">
              <h4 className="text-primary-red font-medium text-sm">Warning</h4>
              <div className="flex items-center gap-1">
                <span className=" text-xs font-medium text-primary-black">
                  Emissions Benchmark
                </span>
                <img src={alertcircle} alt="" width={16} height={16} />
              </div>
            </div>
            <div className="">
              <button className="text-[12px] rounded text-primary-blue py-1 px-2 border border-primary-blue">
                View Info
              </button>
            </div>
          </div>
        </div>
        <div className="md:px-8 mt-3">
          <img src={DashboardFrame} alt="" />
        </div>
        <div className="px-2 md:px-8">
          <DashboardStats emissionData={get_user_emission.data} />
        </div>

        <div className="px-2 md:px-8 mt-4">
          <h3 className="text-primary-black font-medium text-lg mt-2 mb-4">
            Emissions by Department
          </h3>

          <EmissionsGrid tableData={tableData} />
          {/* <div className="flex items-center justify-between my-5">
          <Pagination />
        </div> */}
        </div>
      </motion.div>
      {setshowGreetingModal && <UserGreeting />}
      {setshowWelcomeBack && <UserWelcomeBack />}
    </AnimatePresence>
  );
};

export default StaffDashboard;
