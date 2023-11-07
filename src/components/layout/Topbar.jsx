import React from 'react';
import helpCircle from "../../assets/icons/helpCircle.svg";

const Topbar = () => {
    return (
        <section className=' hidden md:block w-full'>
            <div className='flex items-center justify-between'>
                <div>
                    <h3 className=' text-ca-main font-normal text-lg'>Good Afternoon David</h3>
                </div>
                <div className='flex items-center gap-2 py-4'>
                    <img src={helpCircle} alt="" />
                    <span className='text-ca-blue text-sm font-light'>Help and Feedback</span>
                </div>
            </div>
        </section>
    )
}

export default Topbar