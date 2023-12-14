import React, { useState } from "react";
import EmissionFrame from "../../assets/icons/EmissionFrame.svg";
import alertcircle from "../../assets/icons/alertcircle.svg";
import { StackedBarChart, DoughnutChart } from "../../components/charts";
import { departments } from "../../constants";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CiCalendar } from "react-icons/ci";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";
import { initialUp, slideDown } from "../../constants/framer";
import { useDispatch, useSelector } from "react-redux";
import { DropDownMenu } from "../../components/ui";
import AddEmission from "../../components/pageComponents/Account/modals/AddEmission";
import { addEmission } from "../../features/emissions/emissionSlice";



const Emissions = () => {
  const dispatch = useDispatch()
  const { showEmissionModal } = useSelector(state => state.emission);
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div>
      <motion.div
        initial={initialUp}
        animate={slideDown}
        exit={initialUp}
        className=" pb-40 md:pb-10"
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
              <button className="text-[12px] text-primary-blue py-1 px-2 border border-primary-blue">
                View Info
              </button>
            </div>
          </div>
        </div>
        <div className="mt-4 md:px-8 flex flex-wrap  px-2 gap-6">
          {/* <CustomDatePicker /> */}
          <div className="flex min-[429px]:flex-row flex-col  items-center gap-1">
            <DatePicker
              showIcon
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              wrapperClassName="datePicker"
              icon={<CiCalendar />}
            />
            <div>
              <IoIosArrowRoundForward className="rotate-90 min-[429px]:rotate-0" />
            </div>
            <DatePicker
              icon={<CiCalendar />}
              wrapperClassName="datePicker"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              showIcon
            />
          </div>
          <div className="flex flex-wrap  gap-2">
            {/* <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            styles={colorStyle}
            className="custom-select"
          />
          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            styles={colorStyle}
          /> */}

            <DropDownMenu
              options={departments}
              padding="py-1"
              border={false}
              height={"h-fit"}
              radius={false}
              label={""}
            />
            <DropDownMenu
              options={departments}
              padding="py-1"
              border={false}
              height={"h-fit"}
              radius={false}
              label={""}
            />
          </div>
        </div>

        <div className="bg-white md:mx-8 mt-4 h-[272px] flex items-center justify-center  px-2 ">
          <div className="flex flex-col gap-3 items-center justify-center">

            <div className="flex items-center justify-center flex-col mb-4">
              <h2 className="text-lg font-medium text-primary-black">Nothing to Show</h2>
              <span className=" text-primary-gray text-sm">Tell us more about your Emmission</span>
            </div>
            <button onClick={() => {

              dispatch(addEmission(true));
            }} className="text-sm text-white bg-primary-blue py-2 px-4 border border-primary-blue">
              Upload your first invoice
            </button>
          </div>
        </div>
        {/* <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 mt-4 lg:h-[250px] px-2 md:px-8">
        <div className="col-span-1 md:col-span-3 bg-white h-full p-4">
          <div className="flex items-center gap-2">
            <h3 className="text-primary-black text-sm ">
              Total Emissions by Scope
            </h3>
            <img src={alertcircle} alt="" width={16} height={16} />
          </div>

          <div className="flex flex-wrap items-center justify-between">
            <div className="md:flex md:flex-col md:gap-2">
              <div className="flex items-center gap-2">
                <div className="h-2 w-10 lg:h-10 lg:w-2 bg-[#00B8AC]"></div>
                <span className="text-sm">Scope 1</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-10 lg:h-10 lg:w-2 bg-[#9553A0]"></div>
                <span className="text-sm">Scope 2</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-10 lg:h-10 lg:w-2 bg-[#233E9B]"></div>
                <span className="text-sm">Scope 3</span>
              </div>
            </div>
            <div className="">
              <DoughnutChart />
            </div>
          </div>
        </div>
        <div className="col-span-1 md:col-span-4 bg-white h-full p-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <h3 className="text-primary-black text-sm ">
                Total Emissions by Sources
              </h3>
              <img src={alertcircle} alt="" width={16} height={16} />
            </div>

            <div className="">
              <button className="text-[12px] text-primary-blue py-1 px-2 border border-primary-blue">
                View Info
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between mt-4">
            <div>
              <h3 className="text-sm font-medium text-primary-black">
                Electricity
              </h3>
              <span className="text-sm text-primary-black">
                0% of total emissions | Scope 2
              </span>
            </div>

            <div className="flex items-center">
              <span className="text-sm text-primary-black font-medium">0</span>
              <span className="text-sm text-primary-black">tCO2e</span>
            </div>
          </div>
          <div className="flex items-center justify-between mt-4">
            <div>
              <h3 className="text-sm font-medium text-primary-black">Waste</h3>
              <span className="text-sm text-primary-black">
                0% of total emissions | Scope 1
              </span>
            </div>

            <div className="flex items-center">
              <span className="text-sm text-primary-black font-medium">0</span>
              <span className="text-sm text-primary-black">tCO2e</span>
            </div>
          </div>
          <div className="flex items-center justify-between mt-4">
            <div>
              <h3 className="text-sm font-medium text-primary-black">
                Transporatation
              </h3>
              <span className="text-sm text-primary-black">
                0% of total emissions | Scope 2
              </span>
            </div>

            <div className="flex items-center">
              <span className="text-sm text-primary-black font-medium">0</span>
              <span className="text-sm text-primary-black">tCO2e</span>
            </div>
          </div>
        </div>
      </div> */}

        {/* <div className="px-2 md:px-8 mt-4">
        <div className=" bg-white p-4">
          <div className="flex items-center gap-2">
            <h3 className=" text-primary-black">Emissions Timeline</h3>
            <img src={alertcircle} alt="" width={18} height={18} />
          </div>

          <div className="">
            <StackedBarChart
              labels={[
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ]}
              datasets={[
                {
                  label: "Scope 1",
                  data: [2, 4, 5, 8, 4, 5, 3, 4, 5, 6, 7, 4],
                  backgroundColor: "#00B8AC",
                  barPercentage: 0.5,
                },
                {
                  label: "Scope 2",
                  data: [1, 2, 3, 4, 3, 4, 5, 6, 7, 8, 3, 4],
                  backgroundColor: "#9553A0",
                  barPercentage: 0.5,
                },
                {
                  label: "Scope 3",
                  data: [1, 2, 3, 5, 3, 5, 6, 1, 4, 7, 8, 9],
                  backgroundColor: "#233E9B",
                  barPercentage: 0.5,
                },
              ]}
            />
          </div>
        </div>
      </div> */}


      </motion.div>
      {showEmissionModal && <AddEmission />}
    </div>
  );
};

export default Emissions;
