import React, { useState } from "react";
import activityFrame from "../../assets/icons/activityFrame.svg";
import { ActivityLogGrid } from "../../components/grid";
import { CiCalendar } from "react-icons/ci";
import DatePicker from "react-datepicker";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";
import "react-datepicker/dist/react-datepicker.css";
import { initialUp, slideDown } from "../../constants/framer";
import Pagination from "../../components/ui/Pagination";

const StaffActivityLog = () => {

  const [startDate, setStartDate] = useState(new Date());
  return (
    <motion.div initial={initialUp} animate={slideDown} exit={initialUp}>
    <div className="md:px-8">
      <img src={activityFrame} alt="" />
    </div>
    <div className="mt-4 px-2 md:px-8">
      <div className="flex items-center gap-1">
        <DatePicker
          showIcon
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          wrapperClassName="datePicker"
          icon={<CiCalendar />}
        />
        <div>
          <IoIosArrowRoundForward />
        </div>
        <DatePicker
          icon={<CiCalendar />}
          wrapperClassName="datePicker"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          showIcon
        />
      </div>
    </div>
    <div className="px-2 md:px-8 mt-4">
      <ActivityLogGrid />
    </div>

    <div className="flex items-center justify-between my-5 px-2 md:px-8">
      <Pagination />
      {/* <div>Loading</div> */}
    </div>
  </motion.div>
  )
}

export default StaffActivityLog