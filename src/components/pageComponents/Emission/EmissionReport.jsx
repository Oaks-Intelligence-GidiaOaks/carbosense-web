import image from "../../../assets/images/image.png";
import OrgFrame from "../../../assets/icons/OrgFrame.svg";
import { Tabs, Tab } from "../../../components/Tabs";
import allStaff from "../../../assets/icons/allStaff.svg";
import department from "../../../assets/icons/department.svg";
import { AllStaff, MyDepartment } from "../../../pages/organization/org_tabs";
import { motion } from "framer-motion";
import { initialUp, slideDown } from "../../../constants/framer";
import { useQuery } from "@tanstack/react-query";
import {
  getAllDepartmentStaff,
  getOneOrganizationStaff,
  getOrganizationPendingStaff,
} from "../../../services";
import { useSelector } from "react-redux";
import { RxDividerVertical } from "react-icons/rx";
import png from "../../../assets/icons/png_file.svg";
import jpg from "../../../assets/icons/jpg_file.svg";
import jpeg from "../../../assets/icons/jpeg_file.svg";
import pdf from "../../../assets/icons/pdf_file.svg";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useParams } from "react-router-dom";

const EmissionReport = () => {
  const { id } = useParams();

  const {
    isLoading,
    isError,
    data: organizationStaffData,
    error,
  } = useQuery({
    queryKey: ["reports", id],
    queryFn: () => getOneOrganizationStaff(id),
  });

  console.log(organizationStaffData, "DATA");

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
              <div className="bg-white pb-4">
                <div className="py-3">
                  <div className="flex justify-between items-center px-6">
                    <div className="flex items-center gap-2">
                      <img
                        src={image}
                        alt=""
                        className="h-10 w-10 rounded-full bg-cover"
                      />
                      <div>
                        <h2 className=" text-primary-black text-sm">
                        {organizationStaffData?.data?.fullName}
                        </h2>
                        <span className=" text-primary-gray text-xs">
                         {organizationStaffData?.data?.organizationName}
                        </span>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-sm font-medium text-primary-black ">
                        0
                        <span className=" text-primary-gray text-xs">
                          tCO2e
                        </span>
                      </h2>

                      <span className=" text-primary-gray text-xs">
                        +0% from last month
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-5">
                    <div>
                      <div className="flex items-center gap-4 pl-10">
                        <span className=" text-primary-gray text-xs">
                          Scope 1 Emission
                        </span>

                        <RxDividerVertical />
                        <span className=" text-primary-gray text-xs">
                          Generated:{" "}
                          <span className=" text-primary-blue">0</span>
                        </span>

                        <RxDividerVertical />
                        <span className=" text-primary-gray text-xs">
                          Emission Factor:{" "}
                          <span className=" text-primary-blue">0</span>
                        </span>
                        <RxDividerVertical />
                        <span className=" text-primary-gray text-xs">
                          United Kingdom
                        </span>
                      </div>
                      <div className="flex items-center gap-4 pl-10 mt-3">
                        <span className=" text-primary-gray text-xs">
                          Emission value:
                          <span className=" text-primary-blue">
                            {" "}
                            XXXXX tCO2e
                          </span>
                        </span>

                        <RxDividerVertical />
                        <span className=" text-primary-gray text-xs">
                          Carbon footprint:{" "}
                          <span className=" text-primary-blue"> XX tCO2e</span>
                        </span>

                        <RxDividerVertical />
                        <span className=" text-primary-gray text-xs">
                          Emission Factor:{" "}
                          <span className=" text-primary-blue">0</span>
                        </span>
                        <RxDividerVertical />
                        <span className=" text-primary-gray text-xs">
                          Emission Contribution:{" "}
                          <span className=" text-primary-blue">0%</span>
                        </span>
                      </div>
                    </div>

                    <div className="pr-6">
                      <button className="text-[12px] flex items-center gap-2 bg-primary-blue rounded text-white py-1 px-2 border border-primary-blue">
                        <span> View more</span>
                        <RiArrowDropDownLine />
                      </button>
                    </div>
                  </div>
                  <div className="w-full border-[0.5px] border-gray-400 mt-3"></div>

                  {/* scope two */}
                  <div className="flex items-center justify-between mt-8">
                    <div>
                      <div className="flex items-center gap-4 pl-10">
                        <span className=" text-primary-gray text-xs">
                          Scope 2 Emission
                        </span>

                        <RxDividerVertical />
                        <span className=" text-primary-gray text-xs">
                          Generated:{" "}
                          <span className=" text-primary-blue">0</span>
                        </span>

                        <RxDividerVertical />
                        <span className=" text-primary-gray text-xs">
                          Emission Factor:{" "}
                          <span className=" text-primary-blue">0</span>
                        </span>
                        <RxDividerVertical />
                        <span className=" text-primary-gray text-xs">
                          United Kingdom
                        </span>
                      </div>
                      <div className="flex items-center gap-4 pl-10 mt-3">
                        <span className=" text-primary-gray text-xs">
                          Emission value:
                          <span className=" text-primary-blue">
                            {" "}
                            XXXXX tCO2e
                          </span>
                        </span>

                        <RxDividerVertical />
                        <span className=" text-primary-gray text-xs">
                          Carbon footprint:{" "}
                          <span className=" text-primary-blue"> XX tCO2e</span>
                        </span>

                        <RxDividerVertical />
                        <span className=" text-primary-gray text-xs">
                          Emission Factor:{" "}
                          <span className=" text-primary-blue">0</span>
                        </span>
                        <RxDividerVertical />
                        <span className=" text-primary-gray text-xs">
                          Emission Contribution:{" "}
                          <span className=" text-primary-blue">0%</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="w-full border-[0.5px] border-gray-400 mt-8"></div>

                  <div className="flex items-center justify-between mt-8">
                    <div>
                      <div className="flex items-center gap-4 pl-10">
                        <span className=" text-primary-gray text-xs">
                          Scope 2 Emission
                        </span>

                        <RxDividerVertical />
                        <span className=" text-primary-gray text-xs">
                          Generated:{" "}
                          <span className=" text-primary-blue">0</span>
                        </span>

                        <RxDividerVertical />
                        <span className=" text-primary-gray text-xs">
                          Emission Factor:{" "}
                          <span className=" text-primary-blue">0</span>
                        </span>
                        <RxDividerVertical />
                        <span className=" text-primary-gray text-xs">
                          United Kingdom
                        </span>
                      </div>
                      <div className="flex items-center gap-4 pl-10 mt-3">
                        <span className=" text-primary-gray text-xs">
                          Emission value:
                          <span className=" text-primary-blue">
                            {" "}
                            XXXXX tCO2e
                          </span>
                        </span>

                        <RxDividerVertical />
                        <span className=" text-primary-gray text-xs">
                          Carbon footprint:{" "}
                          <span className=" text-primary-blue"> XX tCO2e</span>
                        </span>

                        <RxDividerVertical />
                        <span className=" text-primary-gray text-xs">
                          Emission Factor:{" "}
                          <span className=" text-primary-blue">0</span>
                        </span>
                        <RxDividerVertical />
                        <span className=" text-primary-gray text-xs">
                          Emission Contribution:{" "}
                          <span className=" text-primary-blue">0%</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="w-full border-[0.5px] border-gray-400 mt-8"></div>
                </div>

                <div className="w-[500px] m-6 h-[400px] lg:h-fit border-[1px] border-dashed border-primary-blue flex items-center justify-center bg-white p-4">
                  <div className="px-6 py-4 border-solid border-gray-200 bg-gray-100 flex justify-start items-center  gap-x-2">
                    <img src={png} alt="" className="h-10 bg-cover" />
                  </div>
                </div>
              </div>
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

export default EmissionReport;
