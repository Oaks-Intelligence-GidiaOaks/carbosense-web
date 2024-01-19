import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, fadeOut, initialDown, invisible, slideDown, slideUp } from '../../../../constants/framer';
import createDepartmentFrame from "../../../../assets/createDepartmentFrame.svg"
import { Button, SizedBox } from '../../../ui';
import { useDispatch } from 'react-redux';
import { setDepartmentScreen } from '../../../../features/createDepartment/createDepartSlice';

const SuccessCreateDepartmentModal = () => {

    const addCreateDepartmentRef = useRef()
    const dispatch = useDispatch();

    return (
        <motion.div
            initial={invisible}
            animate={fadeIn}
            exit={fadeOut}
            className="fixed p-4 inset-0 w-screen h-screen bg-modal-black backdrop-blur-sm overflow-y-auto"
            onClick={(e) =>
                addCreateDepartmentRef.current &&
                !addCreateDepartmentRef.current.contains(e.target) &&
                dispatch(setDepartmentScreen(false))
            }
        >   <motion.div
            ref={addCreateDepartmentRef}
            initial={initialDown}
            animate={slideUp}
            exit={slideDown}
            className="relative mx-auto mt-28 mb-10 max-w-2xl w-full rounded-lg pointer-events-auto"
        >
                <div className="px-3 pt-10">
                    <div className="bg-white overflow-hidden rounded-3xl flex flex-col md:flex-row items-center w-full ">
                        <img src={createDepartmentFrame} alt="" className=" h-72 w-full md:w-[250px] object-cover " />
                        <div className="p-6 w-full">
                            <h2 className=' text-[#19CDA7] whitespace-nowrap font-medium text-[15px] md:text-xl'>Department created Successfully</h2>
                            <div className='mt-4'>
                                <p className='text-sm text-justify text-primary-gray'>You have successfully added a new department to your organization account. </p>
                                <SizedBox height={"h-4"} />
                                <Button
                                    content="Okay"
                                    width="w-[clamp(80px,20%,120px)]"
                                    height="h-8"
                                    textSize="text-sm md:text-xs"
                                    callback={() => dispatch(setDepartmentScreen(false))}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default SuccessCreateDepartmentModal