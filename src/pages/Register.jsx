import { useEffect, useMemo, useState } from "react";
import { companySizes, industries } from "../constants";
import { Link, useNavigate } from "react-router-dom";
import escro_tech from "../assets/escro_tech.svg";

import {
  Button,
  DropDownMenu,
  PasswordInput,
  SizedBox,
  Spinner,
  TextButton,
  TextInput,
} from "../components/ui";
import PropTypes from "prop-types";
import carbosense_logo from "../assets/carbosense_logo.svg";
import globe from "../assets/globe.svg";
import registrationSubmitted from "../assets/registration_submitted.svg";
import arrowBack from "../assets/icons/arrow_back.svg";
import { FilePicker, Illustration } from "../components/containers";
import { AnimatePresence, motion } from "framer-motion";
import {
  exitLeft,
  exitRight,
  initialLeft,
  initialRight,
  slideLeft,
  slideRight,
} from "../constants/framer";
import { useMutation } from "@tanstack/react-query";
import { registerOrganization, resendOTP, verifyOTP } from "../services";
import validator from "validator";
import PhoneInput from "../components/ui/PhoneInput";
import toast from "react-hot-toast";
import { XCircle } from "lucide-react";
import { isObject, saveUser } from "../utils";
import { useDispatch } from "react-redux";
import { setAccessToken, setUser } from "../features/user/userSlice";

const RegisterOrg = ({
  stepSetter,
  direction,
  setDirection,
  form,
  formSetter,
}) => {
  const navigate = useNavigate();
  

  const setFormValue = (name, value) => {
    formSetter((prev) => ({ ...prev, [name]: value }));
  };

  // generate button state based on form values
  const isButtonDisabled = useMemo(() => {
    if (validator.isEmpty(form.organizationName)) return true;
    if (
      !validator.isEmail(form.companyEmail) ||
      validator.isEmpty(form.companyEmail)
    )
      return true;
    if (!form.industry?.value) return true;
    if (!form.companySize?.value) return true;

    return false;
  }, [
    form.organizationName,
    form.companyEmail,
    form.industry,
    form.companySize,
  ]);

  return (
    <>
      <motion.div
        initial={direction === "forward" ? initialRight : initialLeft}
        animate={direction === "forward" ? slideLeft : slideRight}
        exit={exitLeft}
        className="flex-col pt-14 flex-1 min-[760px]:flex-[0.4] h-full items-stretch justify-center"
      >
        <div className="flex h-full flex-col items-center pt-14 flex-1">
          <h1 className="text-3xl font-semibold text-primary-black w-[70%]">
            Register your org 
          </h1>
          <SizedBox height="h-2" />
          <h1 className="text-primary-black w-[70%]">
            Create a Carbosense account for your organization
          </h1>
          <div className="mt-6 w-full flex-col flex items-center">
            <TextInput
              bgColor="bg-white"
              label="Organization Name"
              name="organizationName"
              value={form.organizationName}
              valueSetter={setFormValue}
              width="w-[70%]"
            />
            <SizedBox height="h-6" />
            <TextInput
              bgColor="bg-white"
              label="Company email"
              name="companyEmail"
              value={form.companyEmail}
              valueSetter={setFormValue}
              width="w-[70%]"
            />
            <SizedBox height="h-6" />
            <DropDownMenu
              label="Select Industry"
              name="industry"
              value={form.industry}
              valueSetter={setFormValue}
              width="w-[70%]"
              options={industries}
            />
            <SizedBox height="h-6" />
            <DropDownMenu
              label="Company Size"
              name="companySize"
              value={form.companySize}
              valueSetter={setFormValue}
              width="w-[70%]"
              options={companySizes}
            />
            <SizedBox height="h-6" />
            <Button
              disabled={isButtonDisabled}
              width="w-[70%]"
              content="Next"
              callback={() => {
                setDirection(() => "forward");
                stepSetter(2);
              }}
            />
            <SizedBox height="h-6" />
            <div className="w-[70%] pb-10 flex justify-start">
              <span className="whitespace-nowrap">
                {"Already have an account?"}
              </span>
              &nbsp;
              <TextButton content={"Sign in"} callback={() => navigate("/")} />
            </div>
          </div>
          <SizedBox height="h-10" />
        </div>
      </motion.div>
    </>
  );
};
const VerifyOrg = ({
  stepSetter,
  direction,
  setDirection,
  form,
  formSetter,
}) => {
  const navigate = useNavigate();

  const isButtonDisabled = useMemo(() => {
    if (form.certOfInc === null) return true;
    return false;
  }, [form.certOfInc]);

  return (
    <motion.div
      initial={direction === "forward" ? initialRight : initialLeft}
      animate={direction === "forward" ? slideLeft : slideRight}
      exit={direction === "forward" ? exitLeft : exitRight}
      className="flex-col pt-20 flex-1 min-[760px]:flex-[0.4] h-full items-stretch justify-center"
    >
      <div className="flex justify-start w-[clamp(280px,70%,600px)] mx-auto items-center flex-1">
        <TextButton
          content="Back"
          prefix={arrowBack}
          callback={() => {
            setDirection(() => "backward");
            stepSetter((prev) => prev - 1);
          }}
          isImage={true}
        />
      </div>
      <div className="flex h-full flex-col items-center pt-14 flex-1">
        <h1 className="text-3xl font-semibold text-primary-black w-[clamp(280px,70%,600px)]">
          Verify your org
        </h1>
        <SizedBox height="h-2" />
        <h1 className="text-primary-black w-[clamp(280px,70%,600px)]">
          We need to verify your organization to helps us maintain highest
          standards.
        </h1>
        <div className="mt-6 w-full flex-col flex items-center">
          <h1 className="text-primary-blue font-medium w-[clamp(280px,70%,600px)] text-lg">
            Upload your certificate of Incorporation
          </h1>
          <SizedBox height="h-4" />
          <FilePicker
            width="w-[clamp(280px,70%,600px)]"
            form={form}
            valueSetter={formSetter}
          />
          <SizedBox height="h-6" />
          <Button
            disabled={isButtonDisabled}
            width="w-[clamp(280px,70%,600px)]"
            content="Next"
            callback={() => {
              setDirection(() => "forward");
              stepSetter(3);
            }}
          />
          <SizedBox height="h-6" />
          <div className="w-[clamp(280px,70%,600px)] pb-10 flex justify-start">
            <span>{"Already have an account?"}</span>
            &nbsp;
            <TextButton content={"Sign in"} callback={() => navigate("/")} />
          </div>
        </div>
      </div>
      <SizedBox height="h-10" />
    </motion.div>
  );
};
const SetupAccount = ({
  stepSetter,
  direction,
  setDirection,
  form,
  formSetter,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const setFormValue = (name, value) => {
    formSetter((prev) => ({ ...prev, [name]: value }));
  };

  // generate button state based on form values
  const isButtonDisabled = useMemo(() => {
    if (validator.isEmpty(form.fullName)) return true;
    if (!validator.isEmail(form.email) || validator.isEmpty(form.email))
      return true;
    if (validator.isEmpty(form.phone)) return true;
    if (validator.isEmpty(form.role)) return true;
    if (
      !validator.isStrongPassword(form.password, {
        minLength: 6,
        minNumbers: 1,
        minUppercase: 1,
        minSymbols: 1,
        minLowercase: 1,
      })
    )
      return true;
    if (form.password !== form.confirmPassword) return true;

    return false;
  }, [
    form.fullName,
    form.email,
    form.phone,
    form.role,
    form.password,
    form.confirmPassword,
  ]);

  const prepareOrganizationForm = (form) => {
    const formData = new FormData();
    // append all required values
    formData.append("organizationName", form.organizationName);
    formData.append("email", form.companyEmail);
    formData.append("industry", form.industry.value);
    formData.append("companySize", form.companySize.value);
    formData.append("fullName", form.fullName);
    formData.append("personalEmail", form.email);
    formData.append("tel", form.phone);
    formData.append("password", form.password);
    formData.append("certOfIncorporation", form.certOfInc);

    return formData;
  };

  // make user registration request
  const submitForm = useMutation({
    mutationKey: ["register_organization"],
    mutationFn: (data) => registerOrganization(data),
    onSuccess: (data) => {
      dispatch(setUser(data.data));
      dispatch(setAccessToken(data.accessToken));
      saveUser(data);
      toast.success(
        "Organization registered successfully and OTP sent to organization email.",
        {
          duration: 10000,
        }
      );
      setDirection(() => "forward");
      navigate("/admin");
    },
    onError: (e) => {
      console.log(e);
      toast.custom(
        (t) => (
          <div
            className={`${
              t.visible ? "animate-enter" : "animate-leave"
            } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
          >
            <div className="flex-1 w-0 p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 pt-0.5">
                  <XCircle color="red" strokeWidth={1.5} />
                </div>
                <div className="ml-3 flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    Error registering your organization.
                  </p>

                  {/* error data is an array */}
                  {Array.isArray(e.response.data) && (
                    <p className="mt-1 text-sm text-gray-700">
                      The following issues were encountered when registering
                      your organization.
                    </p>
                  )}

                  {/* error data is an object */}
                  {isObject(e.response.data) && e.response.data.message && (
                    <p className="mt-1 text-sm text-gray-700">
                      The following issue was encountered when registering your
                      organization.
                    </p>
                  )}

                  <ul className="mt-2 text-sm list-disc pl-4">
                    <li className="text-red-500">{e.response.data.message}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex border-l border-gray-200">
              <button
                onClick={() => toast.dismiss(t.id)}
                className="w-full border border-transparent hover:bg-gray-100 transition-all duration-300
                 rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-primary-blue hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-primary-blue"
              >
                Close
              </button>
            </div>
          </div>
        ),
        {
          duration: Infinity,
          // id: "registration-error",
        }
      );
    },
  });

  return (
    <motion.div
      initial={direction === "forward" ? initialRight : initialLeft}
      animate={direction === "forward" ? slideLeft : slideRight}
      exit={direction === "forward" ? exitLeft : exitRight}
      className="flex-col pt-20 pb-10 flex-1 min-[760px]:flex-[0.4] min-h-full items-stretch justify-center"
    >
      <div className="flex justify-start w-[clamp(280px,70%,600px)] mx-auto items-center flex-1">
        <TextButton
          content="Back"
          prefix={arrowBack}
          callback={() => {
            setDirection(() => "backward");
            stepSetter((prev) => prev - 1);
          }}
          isImage={true}
        />
      </div>
      <div className="flex h-full flex-col items-center pt-14 flex-1">
        <h1 className="text-3xl font-semibold text-primary-black w-[clamp(280px,70%,600px)]">
          Setup your account
        </h1>
        <SizedBox height="h-2" />
        <h1 className="text-primary-black w-[clamp(280px,70%,600px)]">
          Tell us about yourself
        </h1>
        <div className="mt-6 w-full flex-col flex items-center">
          <TextInput
            bgColor="bg-white"
            label="Full Name"
            name="fullName"
            value={form.fullName}
            valueSetter={setFormValue}
            width="w-[clamp(280px,70%,600px)]"
          />
          <SizedBox height="h-6" />
          <TextInput
            bgColor="bg-white"
            label="Email"
            name="email"
            value={form.email}
            valueSetter={setFormValue}
            width="w-[clamp(280px,70%,600px)]"
          />
          <SizedBox height="h-6" />
          <PhoneInput
            bgColor="bg-white"
            label="Phone Number"
            name="phone"
            value={form.phone}
            valueSetter={setFormValue}
            width="w-[clamp(280px,70%,600px)]"
          />
          <SizedBox height="h-6" />
          <TextInput
            bgColor="bg-white"
            label="Your Role"
            name="role"
            value={form.role}
            valueSetter={setFormValue}
            width="w-[clamp(280px,70%,600px)]"
          />
          <SizedBox height="h-6" />
          <PasswordInput
            bgColor="bg-white"
            label="Password"
            name="password"
            value={form.password}
            valueSetter={setFormValue}
            width="w-[clamp(280px,70%,600px)]"
            newPassword={true}
          />
          <SizedBox height="h-6" />
          <PasswordInput
            bgColor="bg-white"
            label="Confirm Password"
            name="confirmPassword"
            value={form.confirmPassword}
            valueSetter={setFormValue}
            width="w-[clamp(280px,70%,600px)]"
          />
          <SizedBox height="h-6" />
          <Button
            disabled={isButtonDisabled}
            width="w-[clamp(280px,70%,600px)]"
            content={submitForm.isPending ? <Spinner /> : <span>Next</span>}
            callback={() => {
              submitForm.mutate(prepareOrganizationForm(form));
            }}
          />
          <SizedBox height="h-6" />
          <div className="w-[clamp(280px,70%,600px)] pb-10 flex justify-start">
            <span>{"Already have an account?"}</span>
            &nbsp;
            <TextButton content={"Sign in"} callback={() => navigate("/")} />
          </div>
        </div>
      </div>
      <SizedBox height="h-10" />
    </motion.div>
  );
};

// Removed from flow
// const VerifyEmail = ({ direction, setDirection, form, formSetter }) => {
//   const navigate = useNavigate();

//   const { accessToken } = useSelector((state) => state.user);
//   const [timer, setTimer] = useState();
//   const [, setTimes] = useState(1);
//   const [countDown, setCountDown] = useState(
//     secureLocalStorage.getItem("RORT") ?? 60
//   );

//   const setFormValue = (name, value) => {
//     formSetter((prev) => ({ ...prev, [name]: value }));
//   };

//   const isButtonDisabled = useMemo(() => {
//     if (form.otp.trim().length < 6) return true;
//     return false;
//   }, [form.otp]);

//   // submit otp
//   const submitOTP = useMutation({
//     mutationKey: ["submit_otp"],
//     mutationFn: (data) => verifyOTP(data, accessToken),
//     onSuccess: () => {
//       setDirection(() => "forward");
//       navigate("/admin");
//     },
//     onError: (e) => {
//       console.log(e);
//     },
//   });

//   // resend otp
//   const resendOtpMutation = useMutation({
//     mutationKey: ["resend_otp"],
//     mutationFn: (token) => {
//       setTimes((prev) => prev++);
//       return toast.promise(resendOTP(token), {
//         loading: "Sending OTP",
//         success: "OTP successfully sent to your mail. Please check your inbox.",
//         error: "Could not send OTP at the moment",
//       });
//     },
//     onSuccess: () => {
//       // otp successfully sent
//       secureLocalStorage.setItem("OSS", true);
//       const cachedTimer = secureLocalStorage.getItem("RORT") ?? 60;
//       setCountDown(cachedTimer <= 0 ? 60 : cachedTimer);
//       let timer = setInterval(() => {
//         // OTP Resend Timer
//         setCountDown((prev) => {
//           secureLocalStorage.setItem("RORT", prev - 1);
//           return prev - 1;
//         });
//       }, 1000);
//       setTimer(timer);
//     },
//     onError: () => {
//       // otp error
//       secureLocalStorage.setItem("OSS", false);
//     },
//     retry: 0,
//   });

//   useEffect(() => {
//     let timer = setInterval(() => {
//       // OTP Resend Timer
//       setCountDown((prev) => {
//         secureLocalStorage.setItem("RORT", prev - 1);
//         return prev - 1;
//       });
//     }, 1000);
//     setTimer(timer);

//     return () => clearInterval(timer);
//   }, []);

//   useEffect(() => {
//     if (countDown < 1) {
//       clearInterval(timer);
//       setTimer(null);
//       secureLocalStorage.removeItem("RORT");
//       setCountDown(0);
//     }
//   }, [countDown, timer]);

//   return (
//     <motion.div
//       initial={direction === "forward" ? initialRight : initialLeft}
//       animate={direction === "forward" ? slideLeft : slideRight}
//       exit={exitRight}
//       className="flex-col pt-20 flex-1 min-[760px]:flex-[0.4] h-full items-stretch justify-center"
//     >
//       {/* <div className="flex justify-start w-[70%] mx-auto items-center flex-1">
//         <TextButton
//           content="Back"
//           prefix={arrowBack}
//           callback={() => {
//             setDirection(() => "backward");
//             stepSetter((prev) => prev - 1);
//           }}
//         />
//       </div> */}
//       <div className="flex h-[clamp(300px,100%,700px)] flex-col justify-center items-center flex-1">
//         <h1 className="text-3xl font-semibold text-primary-black w-[70%]">
//           Verify your email
//         </h1>
//         <SizedBox height="h-2" />
//         <h1 className="text-primary-black w-[70%]">
//           Input the one time passcode sent to your email
//         </h1>
//         <div className="mt-6 pb-10 w-full flex-col flex items-center">
//           <TextInput
//             bgColor="bg-white"
//             label="OTP"
//             name="otp"
//             value={form.otp}
//             valueSetter={setFormValue}
//             width="w-[70%]"
//           />
//           <SizedBox height="h-6" />
//           <Button
//             disabled={isButtonDisabled}
//             width="w-[70%]"
//             content={submitOTP.isPending ? <Spinner /> : <span>Next</span>}
//             callback={() => {
//               submitOTP.mutate({ otp: form.otp });
//             }}
//           />
//           <SizedBox height="h-6" />
//           <div className="text-primary-black w-[70%] flex flex-nowrap gap-1">
//             <TextButton
//               content={"Resend OTP"}
//               disabled={Boolean(timer) || resendOtpMutation.isPending}
//               prefix={<RefreshCw size={16} />}
//               callback={() => resendOtpMutation.mutate(accessToken)}
//             />{" "}
//             {console.log(countDown)}
//             {countDown > 0 && (
//               <span>
//                 {" "}
//                 in <span className="font-semibold">{countDown}s</span>
//               </span>
//             )}
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

const Register = () => {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState("forward");
  const currentYear = new Date().getFullYear();

  // register org form
  const [regForm, setRegForm] = useState({
    organizationName: "",
    companyEmail: "",
    industry: { value: "", label: "" },
    companySize: { value: "", label: "" },
    certOfInc: null,
    fullName: "",
    email: "",
    phone: "",
    role: "",
    password: "",
    confirmPassword: "",
    otp: "",
  });

  return (
    <>
      <main className="relative h-screen bg-white">
        <header className="max-w-[1440px] mx-auto fixed z-10 top-0 left-1/2 -translate-x-1/2 px-2 min-[770px]:pl-[5%] min-[1560px]:pl-[3%] pt-4 pb-2 w-full bg-white flex justify-center items-center min-[770px]:justify-start max-[770px]:after:content('') max-[770px]:after:block max-[770px]:after:w-[200%] max-[770px]:after:h-[200%] max-[770px]:after:absolute max-[770px]:after:-z-10 max-[770px]:after:-translate-y-1/4 max-[770px]:after:bg-primary-blue max-[770px]:after:rounded-b-[100%]">
          <Link to={"/"} className="flex items-center gap-3">
            <img
              src={carbosense_logo}
              alt="logo"
              className="max-w-[150px] min-[770px]:max-w-[200px] brightness-0 invert min-[770px]:invert-0 min-[770px]:brighness-50"
            />

            <h3 className=" font-bold text-3xl">Carbosense</h3>
          </Link>
        </header>
        {/* form and graphic */}
        <div className="flex h-full max-w-[1440px] mx-auto">
          {/* form */}
          <AnimatePresence mode="wait">
            {step === 1 && (
              <RegisterOrg
                key="register_org"
                stepSetter={setStep}
                step={step}
                direction={direction}
                setDirection={setDirection}
                form={regForm}
                formSetter={setRegForm}
              />
            )}
            {step === 2 && (
              <VerifyOrg
                key="verify_org"
                stepSetter={setStep}
                step={step}
                direction={direction}
                setDirection={setDirection}
                form={regForm}
                formSetter={setRegForm}
              />
            )}
            {step === 3 && (
              <SetupAccount
                key="setup_account"
                stepSetter={setStep}
                step={step}
                direction={direction}
                setDirection={setDirection}
                form={regForm}
                formSetter={setRegForm}
              />
            )}

            {/* Removed from flow */}
            {/* {step === 4 && (
            <VerifyEmail
              key="verify_email"
              stepSetter={setStep}
              step={step}
              direction={direction}
              setDirection={setDirection}
              form={regForm}
              formSetter={setRegForm}
            />
          )} */}

            {/* graphic */}
          </AnimatePresence>
          <Illustration
            title="Join Forward-Thinking Organizations That Care About Our Planet's Future."
            subTitle="Track and improve your carbon footprint to contribute to a better future. Actively stay dedicated to making a positive impact on the environment."
            graphic={step !== 4 ? globe : registrationSubmitted}
            stage={step !== 4 ? "register" : "registration_complete"}
            showOnboardingProgress={true}
            step={step}
          />
        </div>
      </main>


      <div className="mt-40 min-[578px]:mt-0 md:mt-0 sm:hidden">
        <p className="bottom-0 left-0 z-30 text-sm right-0 p-3 text-center gap-10 text-primary-black mx-auto">
          <div className="flex items-center justify-center gap-1">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1">
                <span>A product of</span>
                <img src={escro_tech} alt="logo" className=" w-4 h-4" />
                <span>Escrow-Tech</span>
              </div>
              <span> Copyright &copy; {currentYear}. All Rights Reserved.</span>
            </div>
          </div>
        </p>
      </div>
    </>
  );
};

RegisterOrg.propTypes = {
  stepSetter: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
  direction: PropTypes.string.isRequired,
  setDirection: PropTypes.func.isRequired,
  form: PropTypes.object.isRequired,
  formSetter: PropTypes.func.isRequired,
};
VerifyOrg.propTypes = {
  stepSetter: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
  direction: PropTypes.string.isRequired,
  setDirection: PropTypes.func.isRequired,
  form: PropTypes.object.isRequired,
  formSetter: PropTypes.func.isRequired,
};
SetupAccount.propTypes = {
  stepSetter: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
  direction: PropTypes.string.isRequired,
  setDirection: PropTypes.func.isRequired,
  form: PropTypes.object.isRequired,
  formSetter: PropTypes.func.isRequired,
};
// VerifyEmail.propTypes = {
//   stepSetter: PropTypes.func.isRequired,
//   step: PropTypes.number.isRequired,
//   direction: PropTypes.string.isRequired,
//   setDirection: PropTypes.func.isRequired,
//   form: PropTypes.object.isRequired,
//   formSetter: PropTypes.func.isRequired,
// };

export default Register;
