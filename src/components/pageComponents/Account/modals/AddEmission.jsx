import React, { useState, useRef, useEffect } from 'react'
import { motion } from "framer-motion";
import {
    fadeIn,
    fadeOut,
    initialDown,
    invisible,
    slideDown,
    slideUp
} from '../../../../constants/framer';
import { useDispatch } from 'react-redux';
import { X } from 'lucide-react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addUserEmission } from '../../../../services';
import toast from 'react-hot-toast';
import { handleAxiosError } from '../../../../utils';
import { Button, DropDownMenu, SizedBox, TextInput } from '../../../ui';
import { emissionRegion, emissionFactorss, emissionUnit, emissionSource } from '../../../../constants';
import { addEmission } from '../../../../features/emissions/emissionSlice';

const AddEmission = () => {
    const dispatch = useDispatch();
    const addEmissionRef = useRef();
    const queryClient = useQueryClient();
    const [emissionFactors, setEmissionFactors] = useState({});

    const [values, setValues] = useState({
        source: {
            label: "",
            value: "",
        },
        emissionRegion: {
            label: "",
            value: ""
        },
        emissionUnit: {
            label: "",
            value: ""
        },
        emissionFactor: {
            label: "",
            value: ""
        },
        emissionValue: ""
    })
    const handleChange = (name, value) => {
    
        setValues((prevValues) => {
            const updatedValues = { ...prevValues, [name]: value };
            return updatedValues;
        });
    
        if (name === 'source' && value && value.value) {
            const selectedSource = value.value;
 
            const factors = emissionFactorss[selectedSource] || [];
    
            setEmissionFactors((prevFactors) => {
                const updatedFactors = { ...prevFactors, [selectedSource]: factors };
                console.log("Updated Emission Factors:", updatedFactors);
                return updatedFactors;
            });
        }
    };
    
    
    const addUserEmissionMutation = useMutation({
        mutationKey: ["add_user_emission"],
        mutationFn: (data) => addUserEmission(data),
        onSuccess: () => {
            toast.success(`Emission data added successfully`, {
                duration: 4000,
            });
            setValues({
                source: { label: "", value: "" },
                emissionRegion: { label: "", value: "" },
                emissionUnit: { label: "", value: "" },
                emissionFactor: { label: "", value: "" },
                emissionValue: ""
            });
            queryClient.invalidateQueries(["fetch_emission_data"]);
            dispatch(addEmission(false))
        },
        onError: (e) => toast.error(handleAxiosError(e))
    })


    const handleSubmit = () => {
        console.log('Current values:', values);
        const submissionObject = {
            source: values.source.value,
            emissionFactor: values.emissionFactor.value,
            emissionRegion: values.emissionRegion.value,
            emissionUnit: values.emissionUnit.value,
            emissionValue: typeof values.emissionValue === 'number' ? values.emissionValue : parseFloat(values.emissionValue),
        };

        addUserEmissionMutation.mutate(submissionObject);
    };

    const isEmissionValueValid = () => {
        return /^\d+(\.\d+)?$/.test(values.emissionValue);
    };
    return (
        <motion.div
            initial={invisible}
            animate={fadeIn}
            exit={fadeOut}
            className="fixed  p-4 inset-0 w-screen h-screen bg-modal-black backdrop-blur-lg overflow-y-auto"
            onClick={(e) =>
                addEmissionRef.current &&
                !addEmissionRef.current.contains(e.target) &&
                dispatch(addEmission(false))
            }
        >
            <motion.div
                initial={initialDown}
                animate={slideUp}
                exit={slideDown}
                ref={addEmissionRef}
                className={` relative mx-auto mt-28 mb-10 max-w-md w-full h-fit bg-white shadow-lg rounded-lg pointer-events-auto flex flex-col ring-1 ring-black ring-opacity-5`}
            >
                <X
                    onClick={() => dispatch(addEmission(false))}
                    className="absolute top-3 right-3 cursor-pointer hover:text-primary-red hover:rotate-90 duration-300 transition-all"
                />
                <div className="pl-3 pt-5">
                    <p className="text-xl font-semibold text-primary-black">Provide the Below Details</p>
                    {/* <SizedBox height /> */}
                    <p className="text-primary-gray text-sm">Your emission reports would appear here </p>
                </div>
                <div className="px-3 pt-10">
                    <DropDownMenu
                        label="Emission Source"
                        name="source"
                        width={"w-[clamp(200px,100%,640px)]"}
                        value={values.source}
                        valueSetter={handleChange}
                        options={emissionSource}
                    />

                    <SizedBox height={"h-6"} />
                    <DropDownMenu
                        label="Country /Region of Emission"
                        name="emissionRegion"
                        width={"w-[clamp(200px,100%,640px)]"}
                        value={values.emissionRegion}
                        valueSetter={handleChange}
                        options={emissionRegion}
                    />
                    <SizedBox height={"h-6"} />
                    {/* <DropDownMenu
                        label="Emission Factor"
                        name="emissionFactor"
                        width={"w-[clamp(200px,100%,640px)]"}
                        value={values.emissionFactor}
                        valueSetter={handleChange}
                        options={emissionFactorss}
                    /> */}
                    <DropDownMenu
                        label="Emission Factor"
                        name="emissionFactor"
                        width={"w-[clamp(200px,100%,640px)]"}
                        value={values.emissionFactor}
                        valueSetter={handleChange}
                        options={emissionFactors[values.source?.value] || []}
                    />
                    <SizedBox height={"h-6"} />
                    <DropDownMenu
                        label="Emission Unit"
                        name="emissionUnit"
                        width={"w-[clamp(200px,100%,640px)]"}
                        value={values.emissionUnit}
                        valueSetter={handleChange}
                        options={emissionUnit}
                    />
                    <SizedBox height={"h-6"} />
                    <TextInput
                        label="Value of Emission Generated"
                        name="emissionValue"
                        value={values.emissionValue}
                        valueSetter={handleChange}
                        width={"w-[clamp(200px,100%,640px)]"}
                        className={isEmissionValueValid() ? '' : 'text-red-500'}
                    />
                    {!isEmissionValueValid() && (
                        <p className="text-red-500 text-sm">Please enter a valid numeric value for the Emission Value field.</p>
                    )}
                    <SizedBox height={"h-6"} />
                    <Button
                        content="Send"
                        width={"w-[clamp(200px,100%,640px)]"}
                        textSize="text-sm"
                        isLoading={addUserEmissionMutation.isPending}
                        callback={handleSubmit}
                        disabled={
                            !values.source || !values.source.value ||
                            !values.emissionRegion || !values.emissionRegion.value ||
                            !values.emissionFactor || !values.emissionFactor.value ||
                            !values.emissionUnit || !values.emissionUnit.value ||
                            !values.emissionValue ||
                            !isEmissionValueValid() || addUserEmissionMutation.isPending
                        }


                    />

                    <SizedBox height={"h-6"} />
                </div>
            </motion.div>
        </motion.div>
    )
}

export default AddEmission





