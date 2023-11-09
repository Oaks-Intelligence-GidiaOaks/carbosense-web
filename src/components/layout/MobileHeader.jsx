import React from 'react';
import helpCircleGray from "../../assets/icons/helpCircleGray.svg";
import user from "../../assets/icons/user.svg";
import notify from "../../assets/icons/notify.svg";
import mobileLogo from "../../assets/mobileLogo.svg";

import { Link } from "react-router-dom";


const MobileHeader = () => {
    return (
        <div className=''>
            <section className="topbar">
                <div className="flex justify-between py-4 px-5 items-center">
                    <Link to="/" className='flex gap-3 items-center'>
                        <img src={mobileLogo} alt="logo" width={110.45} height={29.62} />
                    </Link>
                    <div className='flex gap-4 px-5'>
                        <img src={user} alt="" width={20} />
                        <img src={helpCircleGray} alt="" width={20} />
                        <img src={notify} alt="" width={20} />
                    </div>
                </div>
            </section>
        </div>
    )

}

export default MobileHeader