import React from 'react'
import alertcircle from "../assets/icons/alertcircle.svg"

const DashboardStats = () => {
    return (
        <div className='gap-4 mt-4 w-full grid grid-cols-2 md:grid-cols-4'>
            <div className='bg-white p-4 h-[132px]  border border-[#D8DDE8] flex flex-col gap-1 items-center justify-center'>
                <div className='flex items-center gap-2'>
                    <h3 className='font-medium text-primary-black text-2xl'>0</h3>
                    <span className='text-2xl text-primary-gray'>tCO2e</span>
                    <img src={alertcircle} alt="" />
                </div>
                <span className=' text-primary-black text-sm'>Total scope 1 emissions</span>
            </div>
            <div className='bg-white p-4 h-[132px]  border border-[#D8DDE8] flex flex-col gap-1 items-center justify-center'>
                <div className='flex items-center gap-2'>
                    <h3 className='font-medium text-primary-black text-2xl'>0</h3>
                    <span className='text-2xl text-primary-gray'>tCO2e</span>
                    <img src={alertcircle} alt="" />
                </div>
                <span className=' text-primary-black text-sm'>Total scope 2 emissions</span>
            </div>
            <div className='bg-white p-4 h-[132px]  border border-[#D8DDE8] flex flex-col gap-1 items-center justify-center'>
                <div className='flex items-center gap-2'>
                    <h3 className='font-medium text-primary-black text-2xl'>0</h3>
                    <span className='text-2xl text-primary-gray'>tCO2e</span>
                    <img src={alertcircle} alt="" />
                </div>
                <span className=' text-primary-black text-sm'>Total scope 3 emissions</span>
            </div>
            <div className='bg-white p-4 h-[132px]  border border-[#D8DDE8] flex flex-col gap-1 items-center justify-center'>
                <div className='flex items-center gap-2'>
                    <h3 className='font-medium text-primary-black text-2xl'>0</h3>
                    <span className='text-2xl text-primary-gray'>tCO2e</span>
                    <img src={alertcircle} alt="" />
                </div>
                <span className=' text-primary-black text-sm'>Total emissions</span>
            </div>
        </div>
    )
}

export default DashboardStats