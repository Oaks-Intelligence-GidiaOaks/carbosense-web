import EmissionFrame from "../../assets/icons/EmissionFrame.svg"
import alertcircle from "../../assets/icons/alertcircle.svg";
import arrowright from "../../assets/icons/arrowright.svg";
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { StackedBarChart, DoughnutChart } from "../../components/charts";

const Emissions = () => {
  return (
    <div className=" pb-40 md:pb-10">
      <div className='md:px-8'>
        <img src={EmissionFrame} alt="" />
      </div>

      <div className='md:px-8 mt-4'>
        <div className='bg-[#FFFFFF] border-l-[6px] h-[60px] border-l-[#FF331E] flex items-center justify-between pr-6'>
          <div className='flex flex-col  items-start px-8 h-full justify-center'>
            <h4 className='text-primary-red font-medium text-sm'>Warning</h4>
            <div className='flex items-center gap-1'>

              <span className=' text-xs font-medium text-primary-black'>Emissions Benchmark</span>
              <img src={alertcircle} alt="" width={16} height={16} />
            </div>

          </div>
          <div className=''>
            <button className='text-[12px] text-primary-blue py-1 px-2 border border-primary-blue' >View Info</button>
          </div>
        </div>

      </div>

      {/* <div className="px-8 mt-4 flex items-center gap-4">
        <div className="flex items-center bg-white w-64 px-2 border rounded-sm">
          <div className="md:w-32">
            <DatePickerComponent
              cssClass="custom-datepicker"
              id="datepicker"
            />
          </div>
          <div className=" mx-4 w-6 my-auto">
            <img src={arrowright} alt="" />
          </div>
          <div className="md:w-32">

            <DatePickerComponent
              id="datepicker"
            />
          </div>
        </div>

        <div className=" md:w-40 bg-white px-2 flex items-center rounded-sm">
          <DropDownListComponent id="ddlelement" allowFiltering={true} dataSource={""} placeholder="Department" />
        </div>
        <div className=" md:w-40 hidden  bg-white px-2 md:flex items-center rounded-sm">
          <DropDownListComponent id="ddlelement" allowFiltering={true} dataSource={""} placeholder="Sources" />
        </div>
      </div> */}


      <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 mt-4 lg:h-[250px] px-2 md:px-8">
        <div className="col-span-1 md:col-span-3 bg-white h-full p-4">
          <div className="flex items-center gap-2">
            <h3 className="text-primary-black text-sm ">Total Emissions by Scope</h3>
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
              <h3 className="text-primary-black text-sm ">Total Emissions by Sources</h3>
              <img src={alertcircle} alt="" width={16} height={16} />
            </div>

            <div className=''>
              <button className='text-[12px] text-primary-blue py-1 px-2 border border-primary-blue' >View Info</button>
            </div>
          </div>

          <div className="flex items-center justify-between mt-4">
            <div>
              <h3 className="text-sm font-medium text-primary-black">Electricity</h3>
              <span className="text-sm text-primary-black" >0% of total emissions | Scope 2</span>
            </div>

            <div className="flex items-center">
              <span className="text-sm text-primary-black font-medium">0</span>
              <span className="text-sm text-primary-black">tCO2e</span>
            </div>
          </div>
          <div className="flex items-center justify-between mt-4">
            <div>
              <h3 className="text-sm font-medium text-primary-black">Waste</h3>
              <span className="text-sm text-primary-black" >0% of total emissions | Scope 1</span>
            </div>

            <div className="flex items-center">
              <span className="text-sm text-primary-black font-medium">0</span>
              <span className="text-sm text-primary-black">tCO2e</span>
            </div>
          </div>
          <div className="flex items-center justify-between mt-4">
            <div>
              <h3 className="text-sm font-medium text-primary-black">Transporatation</h3>
              <span className="text-sm text-primary-black" >0% of total emissions | Scope 2</span>
            </div>

            <div className="flex items-center">
              <span className="text-sm text-primary-black font-medium">0</span>
              <span className="text-sm text-primary-black">tCO2e</span>
            </div>
          </div>

        </div>
      </div>

      <div className="px-2 md:px-8 mt-4">
        <div className=" bg-white p-4">
          <div className="flex items-center gap-2">
            <h3 className=" text-primary-black">Emissions Timeline</h3>
            <img src={alertcircle} alt="" width={18} height={18} />
          </div>

          <div className="">
            <StackedBarChart
             labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
             datasets={[
                 {
                     label: 'Scope 1',
                     data: [2, 4, 5, 8, 4, 5, 3, 4, 5, 6, 7, 4],
                     backgroundColor: "#00B8AC",
                     barPercentage: 0.5,   
                 },
                 {
                     label: 'Scope 2',
                     data: [1, 2, 3, 4, 3, 4, 5, 6, 7, 8, 3, 4],
                     backgroundColor: "#9553A0",
                     barPercentage: 0.5,  
                 },
                 {
                     label: 'Scope 3',
                     data: [1, 2, 3, 5, 3, 5, 6, 1, 4, 7, 8, 9],
                     backgroundColor: "#233E9B",
                     barPercentage: 0.5,  
                 },

                 
             ]}

            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Emissions