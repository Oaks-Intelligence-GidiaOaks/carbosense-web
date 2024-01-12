import React from "react";
import OrgFrame from "../../assets/icons/OrgFrame.svg";
import { Tabs, Tab } from "../../components/Tabs";
import allStaff from "../../assets/icons/allStaff.svg";
import department from "../../assets/icons/department.svg";
import { AllStaff, MyDepartment } from "./org_tabs";
import { motion } from "framer-motion";
import { initialUp, slideDown } from "../../constants/framer";
import { useQuery } from "@tanstack/react-query";
import {
  getAllDepartmentStaff,
  getOrganizationPendingStaff,
  getAllDepartment,
} from "../../services";
import { useSelector } from "react-redux";
import EmissionReport from "../../components/pageComponents/Emission/EmissionReport";

const Organization = () => {
  const { user } = useSelector((state) => state.user);
  const departmentData = useSelector(
    (state) => state.createDepartment.departmentData
  );

  const department_id = departmentData?.data?._id ?? null;

  const { isLoading, isError, data, isPending, isSuccess } = useQuery({
    queryKey: ["staff"],
    queryFn: () => getOrganizationPendingStaff(),
  });

  const get_All_Department = useQuery({
    queryKey: ["department_staff"],
    queryFn: () => getAllDepartment(),
  });

  const get_All_Department_staff = useQuery({
    queryKey: ["department_staff"],
    queryFn: () => getAllDepartmentStaff(department_id),
  });

  const staffInfo = isLoading || isError ? undefined : data.data;

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
                staffInfo={staffInfo ?? staffInfo}
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
