import React from "react";
import DashboardFrame from "../../assets/icons/DashboardFrame.svg";
import alertcircle from "../../assets/icons/alertcircle.svg";
import { DashboardStats } from "../../components";
import { EmissionsGrid } from "../../components/grid";
import { motion } from "framer-motion";
import { initialUp, slideDown } from "../../constants/framer";
import Pagination from "../../components/ui/Pagination";
import { useSelector } from "react-redux";
import UserGreeting from "../../components/pageComponents/Account/modals/UserGreeting";
import UserWelcomeBack from "../../components/pageComponents/Account/modals/UserWelcomeBack";
import { useQuery } from "@tanstack/react-query";
import { getAllDepartmentsEmission } from "../../services";

const Dashboard = () => {
  const { setshowGreetingModal, setshowWelcomeBack } = useSelector(
    (state) => state.user
  );

  const deptEmissiionsData = useQuery({
    queryKey: ["getAllDepartmentsEmission"],
    queryFn: () => getAllDepartmentsEmission(),
  });

  return (
    <>
      <motion.div
        initial={initialUp}
        animate={slideDown}
        exit={initialUp}
        className="pb-36 md:mb-10"
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
          <img src={DashboardFrame} alt="" className="w-full" />
        </div>
        <div className="px-2 md:px-8">
          <DashboardStats />
        </div>

        <div className="px-2 md:px-8 mt-4">
          <h3 className="text-primary-black font-medium text-lg mt-2 mb-4">
            Emissions by Department
          </h3>
          <EmissionsGrid tableData={deptEmissiionsData?.data} />

          <div className="flex items-center justify-between my-5">
            <Pagination />
          </div>
        </div>
      </motion.div>
      {setshowGreetingModal && <UserGreeting />}
      {setshowWelcomeBack && <UserWelcomeBack />}
    </>
  );
};

export default Dashboard;
