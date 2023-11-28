import image from "../assets/images/image.png";
import trenddown from "../assets/icons/trenddown.svg";
import OrgAdminIcon from "../assets/icons/OrgAdminIcon.svg";
import { AnimatePresence, motion } from "framer-motion";
import { initialDown, slideUp } from "../constants/framer";

const AllStaffCard = () => {
  return (
    <motion.div
      initial={initialDown}
      animate={slideUp}
      exit={initialDown}
      className="bg-white px-3 py-5 max-w-[250px]"
    >
      <div className="flex items-center gap-2">
        <img src={image} alt="" className="h-10 w-10 rounded-full bg-cover" />
        <div>
          <h3 className="text-xs text-primary-black font-medium leading-3">
            David Orobosa
            <span className=" text-primary-gray text-[12px]"> (You)</span>
          </h3>
          <span className=" text-primary-gray text-[12px] leading-3">
            Data Analysis
          </span>
        </div>
      </div>

      <div className="border border-[#D8DDE8] mt-2 p-2">
        <span className="text-[12px] text-primary-black font-medium leading-3">
          Total emissions
        </span>
        <div className="flex items-center gap-3">
          <div className="flex flex-col gap-1">
            <h2 className="text-sm font-medium">
              0<span className=" text-primary-gray text-xs">tCO2e</span>
            </h2>
            <span className="text-[12px] text-primary-gray leading-3">
              +16% from last month
            </span>
          </div>
          <div>
            <img src={trenddown} alt="" width={70} />
          </div>
        </div>
      </div>

      <div className="mt-2">
        <div className="py-1 px-2 max-w-[150px] rounded-3xl flex items-center gap-2 bg-[#E3ECFF] border border-[#E3ECFF]">
          <img src={OrgAdminIcon} alt="" width={12} height={12} />
          <span className="text-[12px] font-medium text-primary-black">
            Organization Admin
          </span>
        </div>
      </div>

      <div className="mt-3 flex items-center gap-6">
        <button className="text-[12px] border border-[#E3ECFF] text-primary-blue py-1 px-2 ">
          View Emission Report
        </button>
        <button className="text-[12px] border border-[#E3ECFF] text-primary-blue py-1 px-2">
          Options
        </button>
      </div>
    </motion.div>
  );
};

export default AllStaffCard;
