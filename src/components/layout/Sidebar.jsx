import React from 'react';
import mobileLogo from "../../assets/mobileLogo.svg";
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { sidebarLinks } from '../../data/Navigation';

const Sidebar = () => {

    const { pathname } = useLocation();

    return (
        <nav className='leftsidebar'>
            <div className='flex flex-col gap-11'>
                <Link to="/" className='flex gap-3 items-center'>
                    <img src={mobileLogo} alt="logo" width={178.06} height={37.39} />
                </Link>

                <ul className="flex flex-col gap-1">
                    {sidebarLinks.map((link) => {
                        const isActive = pathname === link.route;
                        return (
                            <li
                                key={link.label}
                                className={`rounded-sm hover:bg-bg-ca-gray text-sm text-primary-black transition group ${isActive && "bg-bg-ca-gray"
                                    }`}>
                                <NavLink
                                    to={link.route}
                                    className="flex gap-4 items-center p-3">
                                    <img
                                        src={link.imgPath}
                                        alt={link.label}
                                        className={`group-hover:invert-white ${isActive && "invert-white"
                                            }`}
                                    />
                                    {link.label}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>


            </div>
            <div className='flex items-center gap-2'>
                <div className='w-[40px] h-[40px] rounded-full border border-bg-ca-purple flex items-center justify-center bg-bg-ca-light-gray'>
                    <h3 className='text-lg font-semibold text-primary-purple'>DO</h3>
                </div>

                <div>
                    <h3 className='text-base font-semibold text-primary-black'>David Orobosa</h3>
                    <span className=' text-primary-gray font-light text-sm'>Escrow-Tech LTD</span>
                </div>
            </div>

        </nav>
    )
}

export default Sidebar