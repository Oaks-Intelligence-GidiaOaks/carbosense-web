import React, { useState } from 'react'
import { Button, TextInput } from '../../../components/ui'
import { initialRight, slideLeft } from "../../../constants/framer";
import { AnimatePresence, motion } from "framer-motion";
import validator from "validator";
import PropTypes from "prop-types";
import { handleAxiosError } from "../../../utils";
import { useDispatch } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import { createDepartment } from '../../../services';
import toast from "react-hot-toast";
import { setDepartmentScreen } from '../../../features/createDepartment/createDepartSlice';

const CreateDepartment = ({ onClose }) => {
    const dispatch = useDispatch();
    const [values, setValues] = useState({
        name: "",
    });

    const handleChange = (name, value) => {
        setValues({
            ...values,
            [name]: value,
        });
    };

    const departmentMutation = useMutation({
        mutationKey: ["invite_staff"],
        mutationFn: (data) => createDepartment(data),
        onSuccess: () => {
        dispatch(setDepartmentScreen({setDepartmentScreen: true}))
            setValues({
                name: "",
             
            });
        },
        onError: (e) => toast.error(handleAxiosError(e)),

    });

    return (
        <>
            <motion.div
                initial={initialRight}
                animate={slideLeft}
                exit={initialRight}
                className="bg-white px-4 py-4 md:px-10 md:py-10 rounded-sm"
            >
                <div className="mb-7">
                    <h3 className="text-base font-medium text-primary-black mb-2">
                        Create Department
                    </h3>
                    <span className="text-sm text-primary-gray">
                        Add a new department to your organization’s Carbosense account
                    </span>
                </div>

                <div className="flex gap-x-6">
                    <TextInput
                        value={values.name}
                        name={"name"}
                        label={"Department name"}
                        valueSetter={handleChange}
                        width={"w-full"}
                    />
                    {/* <TextInput
                        value={values.fullName}
                        name={"fullName"}
                        label={"Full Name"}
                        valueSetter={handleChange}
                        width={"w-[clamp(200px,100%,640px)]"}
                    /> */}
                </div>

                <div className="flex justify-end mt-4 gap-x-4">
                    {/* <Button
                        content="Cancel"
                        bgColor="bg-white"
                        textColor="text-primary-blue"
                        hoverColor="hover:text-red-500 hover:border-red-500"
                        width="w-[clamp(80px,20%,120px)]"
                        height="h-8"
                        borderStyle="border border-primary-blue border-primary-blue"
                        textSize="text-sm"
                        callback={onClose}
                    /> */}
                    <Button
                        content="Create"
                        width="w-[clamp(80px,20%,120px)]"
                        height="h-8"
                        textSize="text-sm"
                        disabled={
                            validator.isEmpty(values.name) ||
                            departmentMutation.isPending
                        }
                        isLoading={departmentMutation.isPending}
                        callback={() => departmentMutation.mutate(values)}
                    />
                </div>


            </motion.div>


        </>
    )
}

createDepartment.propTypes = {
    onClose: PropTypes.func,
};

export default CreateDepartment