import React from "react";
import OrgFrame from "../../assets/icons/OrgFrame.svg";
import { Tabs, Tab } from "../../components/Tabs";
import allStaff from "../../assets/icons/allStaff.svg";
import department from "../../assets/icons/department.svg";
import { AllStaff, MyDepartment } from "./org_tabs";
import { motion } from "framer-motion";
import { initialUp, slideDown } from "../../constants/framer";

const Organization = () => {
  return (
    <motion.div
      initial={initialUp}
      animate={slideDown}
      exit={initialUp}
      className="pb-40 md:pb-10"
    >
      <div className="md:px-8">
        <img src={OrgFrame} alt="" />
      </div>

      <div className="px-2">
        <Tabs>
          <Tab
            label={{
              text: "All staff",
              icon: <img src={allStaff} alt="" width={12} height={12} />,
            }}
          >
            <div className="py-4">
              <AllStaff />
            </div>
          </Tab>
          <Tab
            label={{
              text: "My department",
              icon: <img src={department} alt="" width={12} height={12} />,
            }}
          >
            <div className="py-4">
              <MyDepartment />
            </div>
          </Tab>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Organization;
