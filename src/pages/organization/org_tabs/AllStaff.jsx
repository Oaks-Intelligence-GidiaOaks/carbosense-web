import React from 'react';
import { AllStaffCard } from '../../../components';

const AllStaff = () => {
    return (
        <div>
            <div className='flex item justify-between'>
                <span className='text-sm text-primary-black'>0 Staff Total in Escrow Tech</span>
                <button className='text-[12px] border border-primary-blue text-primary-blue py-1 px-2 bg-[#E3ECFF]' >Invite Staff</button>
            </div>

            <div className='mt-4'>
                <AllStaffCard />
            </div>
        </div>
    )
}

export default AllStaff