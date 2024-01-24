import React from "react";
import OrgFrame from "../../assets/icons/OrgFrame.svg";
import { Tabs, Tab } from "../../components/Tabs";
import allStaff from "../../assets/icons/allStaff.svg";
import department from "../../assets/icons/department.svg";
import { AllStaff, MyDepartment } from "./org_tabs";
import { motion } from "framer-motion";
import { initialUp, slideDown } from "../../constants/framer";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { getOrganizationPendingStaff } from "../../services";

const Organization = () => {
  const { user } = useSelector((state) => state.user);

  const { isLoading, isError, data, isPending, isSuccess } = useQuery({
    queryKey: ["staff"],
    queryFn: () => getOrganizationPendingStaff(),
  });

  return (
    <motion.div
      initial={initialUp}
      animate={slideDown}
      exit={initialUp}
      className="pb-28 md:pb-10"
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
              <AllStaff
                isLoading={isLoading}
                isPending={isPending}
                isSuccess={isSuccess}
              />
            </div>
          </Tab>
          <Tab
            label={{
              text: "Department",
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
