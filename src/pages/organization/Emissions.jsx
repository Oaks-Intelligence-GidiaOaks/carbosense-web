import React, { useEffect, useState } from "react";
import EmissionFrame from "../../assets/icons/EmissionFrame.svg";
import alertcircle from "../../assets/icons/alertcircle.svg";
import Select from "react-select";
import { StackedBarChart, DoughnutChart } from "../../components/charts";
import { departments } from "../../constants";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CiCalendar } from "react-icons/ci";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { initialUp, slideDown } from "../../constants/framer";
import { useDispatch, useSelector } from "react-redux";
import AddEmission from "../../components/pageComponents/Account/modals/AddEmission";
import { addEmission } from "../../features/emissions/emissionSlice";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { AccountPageShimmer } from "../../primitives/shimmers";
import { YearDropDown } from "../../components/ui";

const Emissions = () => {
  const dispatch = useDispatch();
  const { showEmissionModal } = useSelector((state) => state.emission);
  const [startDate, setStartDate] = useState(new Date());
  const [year, set_year] = useState(new Date().getFullYear());
  const [emissionYear, setEmissionYear] = useState(new Date().getFullYear());

  const yearlyEmissionData = useQuery({
    queryKey: ["user_emission"],
    queryFn: () =>
      axios.get(`emission/?yearFilter=${emissionYear}`).then((res) => res.data),
  });

  console.log(yearlyEmissionData.data, "YEARLY EMISSION DATA")

  const yearlyData = useQuery({
    queryKey: ["yearly_user_emission_data"],
    queryFn: () =>
      axios.get(`emission/yearly/?yearFilter=${year}`).then((res) => res.data),
  });

  useEffect(() => {
    yearlyEmissionData.refetch();
  }, [emissionYear, yearlyEmissionData]);

  useEffect(() => {
    yearlyData.refetch();
  }, [year, yearlyData]);

  return (
    <AnimatePresence mode="wait">
      {yearlyEmissionData.isPending && <AccountPageShimmer />}
      <motion.div
        initial={initialUp}
        animate={slideDown}
        exit={initialUp}
        className="pb-40 md:pb-10"
      >
        <div className="md:px-8">
          <img src={EmissionFrame} alt="" />
        </div>
        <div className="md:px-8 mt-4">
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

        {yearlyEmissionData.isSuccess && Boolean(yearlyEmissionData?.data?.source?.length) && (
          <div>
            <div className="mt-4 md:px-8 flex flex-wrap  px-2 gap-6">
              {/* <CustomDatePicker /> */}
              <div className="flex min-[429px]:flex-row flex-col  items-center gap-1">
                <div className="border-[2px] border-white">
                  <DatePicker
                    showIcon
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    wrapperClassName="datePicker"
                    icon={<CiCalendar />}
                  />
                </div>
                <div>
                  <IoIosArrowRoundForward className="rotate-90 min-[429px]:rotate-0" />
                </div>
                <div className=" border-[2px] border-white">
                  <DatePicker
                    icon={<CiCalendar />}
                    wrapperClassName="datePicker"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    showIcon
                  />
                </div>
              </div>
              <div className="flex gap-5 md:gap-4 flex-wrap lg:gap-4">
                <Select
                  // defaultValue={selectedOption}
                  // onChange={setSelectedOption}
                  options={departments}
                  theme={(theme) => ({
                    ...theme,
                    borderRadius: 0,
                    border: 0,
                    colors: {
                      ...theme.colors,
                      primary25: "white",
                      primary: "white",
                    },
                  })}
                  styles={{
                    option: (base) => ({
                      ...base,
                      border: 0,
                    }),
                    control: (base) => ({
                      ...base,
                      height: "10px",
                      width: "190px",
                    }),
                  }}
                />

                <Select
                  // defaultValue={selectedOption}
                  // onChange={setSelectedOption}
                  options={departments}
                  // styles={colorStyle}

                  theme={(theme) => ({
                    ...theme,
                    borderRadius: 0,
                    border: 0,
                    colors: {
                      ...theme.colors,
                      primary25: "white",
                      primary: "white",
                    },
                  })}
                  styles={{
                    option: (base) => ({
                      ...base,
                      border: 0,
                    }),
                    control: (base) => ({
                      ...base,
                      height: "10px",
                      width: "190px",
                    }),
                  }}
                />
              </div>

              {yearlyEmissionData?.source?.length > 0 && (
                <button
                  onClick={() => {
                    dispatch(addEmission(true));
                  }}
                  className="text-[12px] py-2 rounded hover:opacity-50 text-primary-blue px-2 border border-primary-blue"
                >
                  Upload Emission
                </button>
              )}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 mt-4 lg:h-[250px] px-2 md:px-8">
              <div className="col-span-1 lg:col-span-3 bg-white w-full h-full p-4 ">
                <div className="flex items-center gap-2">
                  <h3 className="text-primary-black text-base font-medium">
                    Total Emissions by Scope
                  </h3>
                  <img src={alertcircle} alt="" width={16} height={16} />

                  <YearDropDown
                    onChange={(value) => setEmissionYear(value)}
                    startYear={2020}
                    endYear={new Date().getFullYear()}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="md:flex md:flex-col md:gap-2">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-10 lg:h-10 lg:w-2 rounded bg-[#00B8AC]"></div>
                      <span className="text-sm font-medium">Scope 1</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-10 lg:h-10 lg:w-2 rounded bg-[#9553A0]"></div>
                      <span className="text-sm font-medium">Scope 2</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-10 lg:h-10 lg:w-2 rounded bg-[#233E9B]"></div>
                      <span className="text-sm font-medium">Scope 3</span>
                    </div>
                  </div>
                  <div className="">
                    <DoughnutChart emissions={yearlyEmissionData?.data?.scope} />
                  </div>
                </div>
              </div>
              <div className="col-span-1 lg:col-span-4 bg-white h-full p-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <h3 className="text-primary-black text-base font-medium">
                      Total Emissions by Sources
                    </h3>
                    <img src={alertcircle} alt="" width={16} height={16} />
                  </div>

                  <div className="">
                    <button className="text-[12px] rounded hover:opacity-50 text-primary-blue py-1 px-2 border border-primary-blue">
                      View Info
                    </button>
                  </div>
                </div>
                <div>
                  {yearlyEmissionData?.data?.source.length &&
                    yearlyEmissionData?.data?.source.slice(0, 3).map((sourceData, i) => {
                      const totalEmissionValue = sourceData.co2e_total;
                      const percentage =
                        (totalEmissionValue / yearlyEmissionData.data.co2e_total) * 100;

                      return (
                        <div
                          key={i}
                          className="flex items-center justify-between mt-4"
                        >
                          <div>
                            <h3 className="text-sm font-medium text-primary-black capitalize">
                              {sourceData._id}
                            </h3>
                            <span className="text-sm text-primary-black">
                              {percentage.toFixed(2)}% of total emissions |
                              Scope 2
                            </span>
                          </div>
                          <div className="flex items-center">
                            <span className="text-sm text-primary-black font-semibold">
                              {totalEmissionValue.toFixed(2)}
                            </span>
                            <span className="text-sm text-primary-black">
                              tCO2e
                            </span>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>

            <div className="px-2 md:px-8 mt-4">
              <div className=" bg-white p-4">
                <div className="flex items-center gap-2 mb-6">
                  <h3 className=" text-primary-black font-medium">
                    Emission Data Timeline
                  </h3>
                  <img src={alertcircle} alt="" width={18} height={18} />

                  <YearDropDown
                    onChange={(value) => set_year(value)}
                    startYear={2020}
                    endYear={new Date().getFullYear()}
                  />
                </div>

                <div className="w-full h-[300px]">
                  <StackedBarChart
                    labels={yearlyData?.data?.map((entry) => entry.month)}
                    datasets={[
                      {
                        label: "Scope 1",
                        data: yearlyData?.data?.map((entry) => entry.scope1),
                        backgroundColor: "#00B8AC",
                        barPercentage: 0.4,
                      },
                      {
                        label: "Scope 2",
                        data: yearlyData?.data?.map((entry) => entry.scope2),
                        backgroundColor: "#9553A0",
                        barPercentage: 0.4,
                      },
                      {
                        label: "Scope 3",
                        data: yearlyData?.data?.map((entry) => entry.scope3),
                        backgroundColor: "#233E9B",
                        barPercentage: 0.4,
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
        {yearlyEmissionData.isSuccess && !yearlyEmissionData?.data.source.length && (
          <div className="bg-white md:mx-8 mt-4 h-[570px] lg:h-[272px] flex items-center justify-center  px-2 ">
            <div className="flex flex-col gap-3 items-center justify-center">
              <div className="flex items-center justify-center flex-col mb-4">
                <h2 className="text-lg font-medium text-primary-black">
                  Nothing to Show
                </h2>
                <span className=" text-primary-gray text-sm">
                  Tell us more about your Emmission
                </span>
              </div>
              <button
                onClick={() => {
                  dispatch(addEmission(true));
                }}
                className="text-sm text-white bg-primary-blue py-2 px-4 border border-primary-blue"
              >
                Upload your first invoice
              </button>
            </div>
          </div>
        )}
      </motion.div>
      {showEmissionModal && <AddEmission />}
    </AnimatePresence>
  );
};

export default Emissions;
