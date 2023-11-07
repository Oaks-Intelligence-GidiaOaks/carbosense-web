import { useState } from "react";
import { companySizes, industries } from "../constants";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  DropDownMenu,
  PasswordInput,
  SizedBox,
  TextButton,
  TextInput,
} from "../components/ui";
import PropTypes from "prop-types";
import carbosenseLogo from "../assets/carbosense_logo.svg";
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
import { useDispatch, useSelector } from "react-redux";
import { updateField } from "../features/user/registrationSlice";

const RegisterOrg = ({ stepSetter, direction, setDirection }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { org_name, org_email, org_industry, org_size } = useSelector(
    (state) => state.registration.registration
  );

  const [organizationName, setOrganizationName] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [industry, setIndustry] = useState({ value: "", label: "" });
  const [companySize, setCompanySize] = useState({ value: "", label: "" });
  return (
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
            value={org_name}
            valueSetter={(value) =>
              dispatch(updateField({ path: "org_name", value: value }))
            }
            width="w-[70%]"
          />
          <SizedBox height="h-6" />
          <TextInput
            bgColor="bg-white"
            label="Company email"
            value={companyEmail}
            valueSetter={setCompanyEmail}
            width="w-[70%]"
          />
          <SizedBox height="h-6" />
          <DropDownMenu
            label="Select Industry"
            value={industry}
            valueSetter={setIndustry}
            width="w-[70%]"
            options={industries}
          />
          <SizedBox height="h-6" />
          <DropDownMenu
            label="Company Size"
            value={companySize}
            valueSetter={setCompanySize}
            width="w-[70%]"
            options={companySizes}
          />
          <SizedBox height="h-6" />
          <Button
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
  );
};
const VerifyOrg = ({ stepSetter, direction, setDirection }) => {
  const navigate = useNavigate();

  // const [organizationName, setOrganizationName] = useState("");
  // const [companyEmail, setCompanyEmail] = useState("");
  // const [industry, setIndustry] = useState({ value: "", label: "" });
  // const [companySize, setCompanySize] = useState({ value: "", label: "" });
  return (
    <motion.div
      initial={direction === "forward" ? initialRight : initialLeft}
      animate={direction === "forward" ? slideLeft : slideRight}
      exit={direction === "forward" ? exitLeft : exitRight}
      className="flex-col pt-20 flex-1 min-[760px]:flex-[0.4] h-full items-stretch justify-center"
    >
      <div className="flex justify-start w-[70%] mx-auto items-center flex-1">
        <TextButton
          content="Back"
          prefix={arrowBack}
          callback={() => {
            setDirection(() => "backward");
            stepSetter((prev) => prev - 1);
          }}
        />
      </div>
      <div className="flex h-full flex-col items-center pt-14 flex-1">
        <h1 className="text-3xl font-semibold text-primary-black w-[70%]">
          Verify your org
        </h1>
        <SizedBox height="h-2" />
        <h1 className="text-primary-black w-[70%]">
          We need to verify your organization to helps us maintain highest
          standards.
        </h1>
        <div className="mt-6 w-full flex-col flex items-center">
          <h1 className="text-primary-blue font-medium w-[70%] text-lg">
            Upload your certificate of Incorporation
          </h1>
          <SizedBox height="h-4" />
          <FilePicker width="w-[70%]" />
          <SizedBox height="h-6" />
          <Button
            width="w-[70%]"
            content="Next"
            callback={() => {
              setDirection(() => "forward");
              stepSetter(3);
            }}
          />
          <SizedBox height="h-6" />
          <div className="w-[70%] pb-10 flex justify-start">
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
const SetupAccount = ({ stepSetter, direction, setDirection }) => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <motion.div
      initial={direction === "forward" ? initialRight : initialLeft}
      animate={direction === "forward" ? slideLeft : slideRight}
      exit={direction === "forward" ? exitLeft : exitRight}
      className="flex-col pt-20 pb-10 flex-1 min-[760px]:flex-[0.4] min-h-full items-stretch justify-center"
    >
      <div className="flex justify-start w-[70%] mx-auto items-center flex-1">
        <TextButton
          content="Back"
          prefix={arrowBack}
          callback={() => {
            setDirection(() => "backward");
            stepSetter((prev) => prev - 1);
          }}
        />
      </div>
      <div className="flex h-full flex-col items-center pt-14 flex-1">
        <h1 className="text-3xl font-semibold text-primary-black w-[70%]">
          Setup your account
        </h1>
        <SizedBox height="h-2" />
        <h1 className="text-primary-black w-[70%]">Tell us about yourself</h1>
        <div className="mt-6 w-full flex-col flex items-center">
          <TextInput
            bgColor="bg-white"
            label="Full Name"
            value={fullName}
            valueSetter={setFullName}
            width="w-[70%]"
          />
          <SizedBox height="h-6" />
          <TextInput
            bgColor="bg-white"
            label="Email"
            value={email}
            valueSetter={setEmail}
            width="w-[70%]"
          />
          <SizedBox height="h-6" />
          <TextInput
            bgColor="bg-white"
            label="Your Role"
            value={role}
            valueSetter={setRole}
            width="w-[70%]"
          />
          <SizedBox height="h-6" />
          <PasswordInput
            bgColor="bg-white"
            label="Password"
            value={password}
            valueSetter={setPassword}
            width="w-[70%]"
          />
          <SizedBox height="h-6" />
          <PasswordInput
            bgColor="bg-white"
            label="Confirm Password"
            value={confirmPassword}
            valueSetter={setConfirmPassword}
            width="w-[70%]"
          />
          <SizedBox height="h-6" />
          <Button
            width="w-[70%]"
            content="Next"
            callback={() => {
              setDirection(() => "forward");
              stepSetter(4);
            }}
          />
          <SizedBox height="h-6" />
          <div className="w-[70%] pb-10 flex justify-start">
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
const VerifyEmail = ({ stepSetter, direction, setDirection }) => {
  const [otp, setOtp] = useState("");

  return (
    <motion.div
      initial={direction === "forward" ? initialRight : initialLeft}
      animate={direction === "forward" ? slideLeft : slideRight}
      exit={exitRight}
      className="flex-col pt-20 flex-1 min-[760px]:flex-[0.4] h-full items-stretch justify-center"
    >
      <div className="flex justify-start w-[70%] mx-auto items-center flex-1">
        <TextButton
          content="Back"
          prefix={arrowBack}
          callback={() => {
            setDirection(() => "backward");
            stepSetter((prev) => prev - 1);
          }}
        />
      </div>
      <div className="flex h-[clamp(300px,100%,700px)] flex-col justify-center items-center flex-1">
        <h1 className="text-3xl font-semibold text-primary-black w-[70%]">
          Verify your email
        </h1>
        <SizedBox height="h-2" />
        <h1 className="text-primary-black w-[70%]">
          Input the one time passcode sent to your email
        </h1>
        <div className="mt-6 pb-10 w-full flex-col flex items-center">
          <TextInput
            bgColor="bg-white"
            label="OTP"
            value={otp}
            valueSetter={setOtp}
            width="w-[70%]"
          />
          <SizedBox height="h-6" />
          <Button
            width="w-[70%]"
            content="Next"
            callback={() => {
              setDirection("forward");
              stepSetter(4);
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

const Register = () => {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState("forward");

  return (
    <main className="relative h-screen bg-white">
      <header className="max-w-[1440px] mx-auto fixed z-10 top-0 left-1/2 -translate-x-1/2 pl-[5%] min-[1560px]:pl-[3%] py-4 w-full bg-white">
        <Link to={"/"}>
          <img src={carbosenseLogo} alt="logo" className="max-w-[200px]" />
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
            />
          )}
          {step === 2 && (
            <VerifyOrg
              key="verify_org"
              stepSetter={setStep}
              step={step}
              direction={direction}
              setDirection={setDirection}
            />
          )}
          {step === 3 && (
            <SetupAccount
              key="setup_account"
              stepSetter={setStep}
              step={step}
              direction={direction}
              setDirection={setDirection}
            />
          )}
          {step === 4 && (
            <VerifyEmail
              key="verify_email"
              stepSetter={setStep}
              step={step}
              direction={direction}
              setDirection={setDirection}
            />
          )}
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
  );
};

RegisterOrg.propTypes = {
  stepSetter: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
  direction: PropTypes.string.isRequired,
  setDirection: PropTypes.func.isRequired,
};
VerifyOrg.propTypes = {
  stepSetter: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
  direction: PropTypes.string.isRequired,
  setDirection: PropTypes.func.isRequired,
};
SetupAccount.propTypes = {
  stepSetter: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
  direction: PropTypes.string.isRequired,
  setDirection: PropTypes.func.isRequired,
};
VerifyEmail.propTypes = {
  stepSetter: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
  direction: PropTypes.string.isRequired,
  setDirection: PropTypes.func.isRequired,
};

export default Register;
