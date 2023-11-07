import React from 'react';
import DashboardFrame from "../../assets/icons/DashboardFrame.svg";

const Dashboard = () => {
  return (
    <>
      <div>
        <img src={DashboardFrame} alt="" />
      </div>

      <div className='mt-4 bg-white'>
        <div className='border border-[#D8DDE8] h-[270px] w-full '>
          <div className='flex h-full flex-col items-center justify-center'>
            <h3 className='text-ca-main'>Nothing to Show</h3>
            <span className=' text-ca-dark-gray mt-2 text-sm'>Upload a new invoice to get started </span>
            <button className='text-sm mt-4 shadow-md py-2 px-6 rounded-sm transition duration-300 font-light bg-ca-purple border border-ca-blue-dark text-[#FFFFFF]'>Upload your first invoice</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard

