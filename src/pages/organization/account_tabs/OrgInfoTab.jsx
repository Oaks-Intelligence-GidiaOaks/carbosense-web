import React from 'react'
import { HiOutlinePencil } from "react-icons/hi";

const OrgInfoTab = () => {
  return (
    <div>


      <div className='bg-white p-4 md:p-6 '>
        <div className='flex items-center justify-between'>
          <div className='flex flex-col gap-2'>
            <h3 className='text-sm text-primary-black font-medium'>Org Information</h3>
            <span className='text-xs'>Your profile photo will be visible to all your org members.</span>
          </div>
          <button className='text-[12px] flex items-center gap-2 text-primary-blue py-[6px] px-3 rounded-sm bg-[#E3ECFF]' >
            <HiOutlinePencil />
          <span>Edit</span>
          </button>
        </div>

        <div>
          <div className='grid md:grid-cols-2 gap-6 md:gap-4 mt-4'>
            <div className='flex items-center justify-between border p-3'>
              <span className='text-sm text-primary-gray'>Org name</span>
              <span className='text-sm text-primary-black'>Escrow-Tech</span>
            </div>
            <div className='flex items-center justify-between border p-3'>
              <span className='text-sm text-primary-gray'>Org email</span>
              <span className='text-sm text-primary-black'>admin@escrow-tech.com</span>
            </div>
            <div className='flex items-center justify-between border p-3'>
              <span className='text-sm text-primary-gray'>Org phone</span>
              <span className='text-sm text-primary-black'>+44 20 7123 3242</span>
            </div>
            <div className='flex items-center justify-between border p-3'>
              <span className='text-sm text-primary-gray'>Created by</span>
              <span className='text-sm text-primary-black'>Dwayne Carter</span>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-white mt-4 p-4 md:p-6 '>
        <div className='flex items-center justify-between'>
          <div className='flex flex-col gap-2'>
            <h3 className='text-sm text-primary-black font-medium'>About Org</h3>
            <span className='text-xs'>Your profile photo will be visible to all your org members.</span>
          </div>
          <button className='text-[12px] flex items-center gap-2 text-primary-blue py-[6px] px-3 rounded-sm bg-[#E3ECFF]' >
            <HiOutlinePencil />
          <span>Edit</span>
          </button>
        </div>

        <div>
          <div className='grid md:grid-cols-2 gap-6 md:gap-4 mt-4'>
            <div className='flex items-center justify-between border p-3'>
              <span className='text-sm text-primary-gray'>Total Org Emissions</span>
              <span className='text-sm text-primary-black'>0</span>
            </div>
            <div className='flex items-center justify-between border p-3'>
              <span className='text-sm text-primary-gray'>Total Org members</span>
              <span className='text-sm text-primary-black'>0</span>
            </div>
            <div className='flex items-center justify-between border p-3'>
              <span className='text-sm text-primary-gray'>Created on</span>
              <span className='text-sm text-primary-black'>21 March 2020</span>
            </div>
            <div className='flex items-center justify-between border p-3'>
              <span className='text-sm text-primary-gray'>Created by</span>
              <span className='text-sm text-primary-black'>Dwayne Carter</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrgInfoTab