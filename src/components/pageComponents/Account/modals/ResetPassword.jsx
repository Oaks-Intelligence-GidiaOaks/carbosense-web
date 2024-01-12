import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
    fadeIn,
    fadeOut,
    initialDown,
    invisible,
    slideDown,
    slideUp,
} from "../../../../constants/framer";
import { X } from "lucide-react";
import { Button, PasswordInput, SizedBox, TextInput } from "../../../ui";
import { useDispatch, useSelector } from "react-redux";
import validator from "validator";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { handleAxiosError } from "../../../../utils";
import { setShowResetPasswordDialog } from "../../../../features/resetPassword/resetPasswordSlice";
import { resetPassword } from "../../../../services";

const ResetPassword = () => {
    const dispatch = useDispatch();
    const modalRef = useRef();

    const { user } = useSelector((state) => state.user);
   

    const [values, setValues] = useState({
        email: user || "",
        password: "",
    });

    const handleChange = (name, value) => {
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const resetPasswordMutation = useMutation({
        mutationKey: ["reset_password"],
        mutationFn: (data) => resetPassword(data),
        onSuccess: () => {
            toast.success(`Password change successfully`, {
                duration: 5000,
                id: "profile-updated",
            });
            dispatch(setShowResetPasswordDialog(false))
        },
        onError: (e) => toast.error(handleAxiosError(e)),
    });

    return (
        <motion.div
            initial={invisible}
            animate={fadeIn}
            exit={fadeOut}
            className="fixed z-50 p-4 inset-0 w-screen h-screen bg-modal-black backdrop-blur-lg overflow-y-auto"
            onClick={(e) =>
                modalRef.current &&
                !modalRef.current.contains(e.target) &&
                dispatch(setShowResetPasswordDialog(false))
            }
        >
            <motion.div
                initial={initialDown}
                animate={slideUp}
                exit={slideDown}
                ref={modalRef}
                className={` relative mx-auto mt-28 mb-10 max-w-md w-full h-fit bg-white shadow-lg rounded-lg pointer-events-auto flex flex-col ring-1 ring-black ring-opacity-5`}
            >
                <X
                    onClick={() => dispatch(setShowResetPasswordDialog(false))}
                    className="absolute top-3 right-3 cursor-pointer hover:text-primary-red hover:rotate-90 duration-300 transition-all"
                />
                <div className="pl-3 pt-5">
                    <p className="text-xl font-semibold">Reset Your Password</p>
                    {/* <SizedBox height /> */}
                    <p className="">Reset your password and proceed to login.</p>
                </div>
                <div className="px-3 pt-10">
                    <TextInput
                        label="Email"
                        name="email"
                        value={values.email}
                        valueSetter={handleChange}
                        width={"w-[clamp(240px,100%,480px)]"}
                    />
                    <SizedBox height={"h-6"} />
                    <PasswordInput
                        width={"w-[clamp(240px,100%,480px)]"}
                        value={values.password}
                        valueSetter={handleChange}
                        name="password"
                        label={"Enter your password"}
                        newPassword={true}
                    />
                    <SizedBox height={"h-6"} />
                </div>
                <div className="flex border-l gap-x-5 mt-10 mb-3 mx-3 border-gray-200">
                    <button
                        onClick={() => dispatch(setShowResetPasswordDialog(false))}
                        className="w-full border border-[#ACB7BC] hover:bg-red-500 hover:border-red-500 hover:text-white transition-all duration-300
     rounded-none p-3 flex items-center justify-center text-sm font-medium"
                    >
                        Cancel
                    </button>
                    <Button
                        disabled={
                            !validator.isEmail(values.email) ||
                            !validator.isStrongPassword(values.password, {
                                minLength: 6,
                                minNumbers: 1,
                                minUppercase: 1,
                                minSymbols: 1,
                                minLowercase: 1,
                            }) ||
                            resetPasswordMutation.isPending
                        }
                        content={"Save Changes"}
                        width={"w-full"}
                        callback={() =>
                            resetPasswordMutation.mutate({
                                email: values.email,
                                password: values.password,
                            })
                        }
                        isLoading={resetPasswordMutation.isPending}
                    >
                        Save Changes
                    </Button>

                </div>
            </motion.div>
        </motion.div>
    );
};

export default ResetPassword;
