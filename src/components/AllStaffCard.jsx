import image from "../assets/images/image.png";
import trenddown from "../assets/icons/trenddown.svg";
import PropTypes from "prop-types";
import OrgAdminIcon from "../assets/icons/OrgAdminIcon.svg";
import { AnimatePresence, motion } from "framer-motion";
import department from "../assets/icons/department.svg"
import { initialDown, slideUp } from "../constants/framer";
import { useSelector } from "react-redux";
import { useNavigate} from "react-router-dom";

const AllStaffCard = ({ staffMember }) => {

console.log(staffMember, "STAFF MEMBER");
const navigate = useNavigate();

const navigateToReport = () => {
  navigate(`/admin/report/${staffMember._id}`)
}
  const {
    fullName,
    email,
    role,
    totalEmissions,
    trendPercentage,
    isAdmin,
    organizationName,
    certOfIncorporation,
  

  } = staffMember;
  return (
    <motion.div
      initial={initialDown}
      animate={slideUp}
      exit={initialDown}
      className="bg-white px-2 py-5"
    >
      <div className="flex items-center gap-2">
        <img src={image} alt="" className="h-10 w-10 rounded-full bg-cover" />
        <div>
          <h3 className="text-xs text-primary-black font-medium leading-3">
            {fullName}
            <span className=" text-primary-gray text-[12px]"></span>
          </h3>
          <span className=" text-primary-gray text-[12px] leading-3">
            {organizationName}
          </span>
        </div>
      </div>

      <div className="border border-[#D8DDE8] mt-2 p-2">
        <span className="text-[12px] text-primary-black font-medium leading-3">
          Total emissions
        </span>
        <div className="flex items-center gap-14">
          <div className="flex flex-col gap-1">
            <h2 className="text-sm font-medium">
              {totalEmissions}<span className=" text-primary-gray text-xs">tCO2e</span>
            </h2>
            <span className="text-[12px] text-primary-gray leading-3">
              +0% from last month
            </span>
          </div>
          <div>
            <img src={trenddown} alt="" width={70} />
          </div>
        </div>
      </div>

      <div className="mt-2">
        <div className="py-1 px-2 max-w-[150px] rounded-3xl flex items-center gap-2 bg-[#E3ECFF] border border-[#E3ECFF]">

          {staffMember.role === "admin" ? (
            <img src={OrgAdminIcon} alt="" width={12} height={12} />
          ) : (
            <img src={department} alt="" width={12} height={12} />
          )}

          <span className="text-[12px] font-medium text-primary-black">
            Member
          </span>
        </div>
      </div>

      <div className="mt-3 flex items-center gap-6">
       
        <button onClick={navigateToReport} className="text-[11px] rounded hover:opacity-50 whitespace-nowrap border border-primary-blue text-primary-blue py-1 px-2 ">
          View Emission Report
        </button>
      
        <button className="text-[11px] rounded hover:opacity-50 border border-primary-blue text-primary-blue py-1 px-2">
          Options
        </button>
      </div>
    </motion.div>
  );
};

AllStaffCard.propTypes = {
  staffMember: PropTypes.shape({
    fullName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    totalEmissions: PropTypes.number.isRequired,
    trendPercentage: PropTypes.number.isRequired,
    isAdmin: PropTypes.bool.isRequired,
    image: PropTypes.string.isRequired,
    OrgAdminIcon: PropTypes.string.isRequired,
  }).isRequired,
};

export default AllStaffCard;
