import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { bottombarLink } from '../../data/Navigation';


const Bottombar = () => {
    const { pathname } = useLocation();
    return (
        <section className='z-50 flex items-center justify-between bg-bg-ca-light-gray w-full sticky bottom-0  px-5 py-4 md:hidden'>
            {bottombarLink.map((link) => {
                const isActive = pathname === link.route;
                return (

                    <Link
                        key={link.label}
                        to={link.route}
                        className={`rounded-[10px] flex items-center justify-center flex-col transition p-2 text-xs hover:bg-bg-ca-light-gray ${isActive && "bg-bg-ca-light-gray"
                            }`}>
                        <img
                            src={link.imgPath}
                            alt={link.label}
                            width={16}
                            height={16}
                            className={` ${isActive && "bg-ca-light-purple"
                                }`}
                        />
                      <p className=''> {link.label}</p>
                    </Link>

                );
            })}

        </section>
    )
}

export default Bottombar