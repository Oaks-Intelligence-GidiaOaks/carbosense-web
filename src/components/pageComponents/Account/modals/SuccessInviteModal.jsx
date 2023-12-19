import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, fadeOut, initialDown, invisible, slideDown, slideUp } from '../../../../constants/framer';
import success_frame from "../../../../assets/success_frame.svg"
import { Button, SizedBox } from '../../../ui';
import { useDispatch, useSelector } from 'react-redux';
import { addIviteUser } from '../../../../features/inviteUser/inviteUserSlice';

const SuccessInviteModal = () => {
    const {invitedStaffEmail} = useSelector((state) => state.inviteUser)
    const addInviteUserRef = useRef()
    const dispatch = useDispatch();
    return (
        <motion.div
            initial={invisible}
            animate={fadeIn}
            exit={fadeOut}
            className="fixed p-4 inset-0 w-screen h-screen bg-modal-black backdrop-blur-sm overflow-y-auto"
            onClick={(e) =>
                addInviteUserRef.current &&
                !addInviteUserRef.current.contains(e.target) &&
                dispatch(addIviteUser(false))
            }
        >   <motion.div
                ref={addInviteUserRef}
                initial={initialDown}
                animate={slideUp}
                exit={slideDown}
                className="relative mx-auto mt-28 mb-10 max-w-2xl w-full rounded-lg pointer-events-auto"
            >
                <div className="px-3 pt-10">
                    <div className="bg-white overflow-hidden rounded-3xl flex items-center w-full ">
                        <img src={success_frame} alt="" className="w-full h-72 object-cover " />
                        <div className="p-6 w-full">
                            <h2 className=' text-primary-blue font-medium text-xl'>Success! Invitation Sent</h2>
                            <div className='mt-4'>
                                <p className='text-sm text-justify text-primary-gray'>Your invitation to join Carbosense has been sent to <span className=' font-medium text-primary-black'>{invitedStaffEmail}</span> They will receive an email shortly with instructions on how to accept the invitation and get started on their sustainability journey.</p>
                                <SizedBox height={"h-2"} />
                                <Button
                                    content="Close"
                                    width="w-[clamp(80px,20%,120px)]"
                                    height="h-8"
                                    textSize="text-sm"
                                    callback={() => dispatch(addIviteUser(false))}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default SuccessInviteModal;

