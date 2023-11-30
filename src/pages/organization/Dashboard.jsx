import React from "react";
import DashboardFrame from "../../assets/icons/DashboardFrame.svg";
import alertcircle from "../../assets/icons/alertcircle.svg";
import { DashboardStats } from "../../components";
import { EmissionsGrid } from "../../components/grid";
import { motion } from "framer-motion";
import { initialUp, slideDown } from "../../constants/framer";

const Dashboard = () => {
  return (
    <motion.div
      initial={initialUp}
      animate={slideDown}
      exit={initialUp}
      className="mb-10"
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
            <button className="text-[12px] text-primary-blue py-1 px-2 border border-primary-blue">
              View Info
            </button>
          </div>
        </div>
      </div>
      <div className="md:px-8 mt-3">
        <img src={DashboardFrame} alt="" />
      </div>
      <div className="px-2 md:px-8">
        <DashboardStats />

        {/* <div className='border mt-4 bg-white border-[#D8DDE8] h-[270px] w-full '>
          <div className='flex h-full flex-col items-center justify-center'>
            <h3 className='text-ca-main'>Nothing to Show</h3>
            <span className=' text-ca-dark-gray mt-2 text-sm'>Upload a new invoice to get started </span>
            <button className='text-sm mt-4 shadow-md py-2 px-6 rounded-sm transition duration-300 font-light bg-primary-blue border border-ca-blue-dark text-[#FFFFFF]'>Upload your first invoice</button>
          </div>
        </div> */}
      </div>

      <div className="px-2 md:px-8 mt-4">
        <h3 className="text-primary-black font-medium text-lg mt-2 mb-4">
          Emissions by Department
        </h3>
        <EmissionsGrid />
      </div>
    </motion.div>
  );
};

export default Dashboard;
