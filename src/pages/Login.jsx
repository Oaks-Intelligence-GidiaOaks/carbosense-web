import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  PasswordInput,
  SizedBox,
  Spinner,
  TextButton,
  TextInput,
} from "../components/ui";
import carbosense_logo from "../assets/carbosense_logo.svg";
import escro_tech from "../assets/escro_tech.svg";
import rocketLaunch from "../assets/rocket_launch.svg";
import { Illustration } from "../components/containers";
import { AnimatePresence, motion } from "framer-motion";
import { exitLeft, initialLeft, slideRight } from "../constants/framer";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../services";
import validator from "validator";
import errorIcon from "../assets/icons/error_icon.svg";
import toast from "react-hot-toast";
import { XCircle } from "lucide-react";
import { handleAxiosError, saveUser } from "../utils";
import { useDispatch, useSelector } from "react-redux";
import {
  setAccessToken,
  setUser,
  showGreetingModal,
  showWelcomeModal,
} from "../features/user/userSlice";
import secureLocalStorage from "react-secure-storage";
import { setShowResetPasswordDialog } from "../features/resetPassword/resetPasswordSlice";
import ResetPassword from "../components/pageComponents/Account/modals/ResetPassword";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { showResetPasswordDialog } = useSelector(
    (state) => state.resetPassword
  );

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  // custom setter function for auth input fields
  const setFormValue = (name, value) => {
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  // make user login request
  const submitForm = useMutation({
    mutationKey: ["register_organization"],
    mutationFn: (data) => loginUser(data),
    onSuccess: (data) => {
      let notVerified =
        data.message === "Not verified" ||
        data.message === "Reset your Password";

      if (notVerified) {
        navigate("/admin");
      }

      const isFirstUser = data.data.firstUse;
      console.log(isFirstUser, "First User");
      toast.dismiss();
      saveUser(data);

      if (
        data.message === "Reset your Password" &&
        validator.isEmail(data.data)
      ) {
        dispatch(setShowResetPasswordDialog(true));
      } else {
        saveUser(data);
        dispatch(setUser(data.data));
        dispatch(setAccessToken(data.accessToken));

        if (data.data.role === "admin") {
          navigate("/admin", { replace: true });
        } else if (data.data.role === "staff") {
          navigate("/staff", { replace: true });
        }
      }
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
              <div className="flex items-center">
                <div className="flex-shrink-0 pt-0.5">
                  <XCircle color="red" strokeWidth={1.5} />
                </div>
                <div className="ml-3 flex-1">
                  <p className="font-medium text-gray-900 first-letter:capitalize">
                    {handleAxiosError(e)}
                  </p>
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

          style: { transform: "translateY(16px)" },
        }
      );
    },
  });

  // generate button state based on form values
  const isButtonDisabled = useMemo(() => {
    if (submitForm.isPending) return true;
    if (
      !validator.isEmail(credentials.email) ||
      validator.isEmpty(credentials.email)
    )
      return true;
    if (
      !validator.isStrongPassword(credentials.password, {
        minLength: 6,
        minNumbers: 1,
        minUppercase: 1,
        minSymbols: 1,
        minLowercase: 1,
      })
    )
      return true;

    return false;
  }, [submitForm.isPending, credentials.email, credentials.password]);

  return (
    <>
      <main className="relative h-screen bg-white min-[770px]:overflow-hidden">
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
            <motion.div
              key="login-form"
              initial={initialLeft}
              animate={slideRight}
              exit={exitLeft}
              className="flex pt-20 flex-1 min-[760px]:flex-[0.4] min-h-full items-center justify-center"
              // className="flex pt-14 flex-[0.4] h-full items-center justify-center"
            >
              <div className="flex flex-col items-center justify-center flex-1">
                <h1 className="text-2xl min-[770px]:text-3xl font-semibold text-primary-black">
                  Sign In
                </h1>
                <div className="mt-10 w-full flex-col flex items-center">
                  <TextInput
                    bgColor="bg-white"
                    label="Email address"
                    name="email"
                    value={credentials.email}
                    valueSetter={setFormValue}
                    width="w-[clamp(240px,60%,600px)]"
                  />
                  <SizedBox height="h-6" />
                  <PasswordInput
                    bgColor="bg-white"
                    label="Password"
                    name="password"
                    value={credentials.password}
                    valueSetter={setFormValue}
                    width="w-[clamp(240px,60%,600px)]"
                  />
                  <SizedBox height="h-2" />
                  <div className="w-[clamp(240px,60%,600px)] flex justify-end">
                    <TextButton content={"Forgot Password?"} />
                  </div>
                  <SizedBox height="h-6" />

                  {/* TODO: Return to this when server side validation is complete */}
                  {/* error message */}
                  <div
                    className={`w-[clamp(240px,60%,600px)] opacity-0 pointer-events-none flex items-center justify-start gap-2 text-red-500 mb-2`}
                  >
                    <img
                      alt="error icon"
                      src={errorIcon}
                      className="fill-red-500 text-red-500"
                    />
                    <p>User does not exist.</p>
                  </div>

                  <Button
                    disabled={isButtonDisabled}
                    width="w-[clamp(240px,60%,600px)]"
                    content={
                      submitForm.isPending ? <Spinner /> : <span>Sign in</span>
                    }
                    callback={() =>
                      submitForm.mutate({
                        email: credentials.email,
                        password: credentials.password,
                      })
                    }
                  />
                  <SizedBox height="h-8" />
                  <div className="w-[clamp(240px,60%,600px)] flex justify-center">
                    <span>{"Don't have an account?"}</span>
                    &nbsp;
                    <TextButton
                      content={"Register"}
                      callback={() => navigate("/register")}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          {/* graphic */}
          <Illustration
            title="Take control of your environmental impact by tracking your carbon footprint"
            subTitle="Use Carbosense to unlock your potential to make a lasting difference in the world by adopting a more eco-conscious lifestyle."
            graphic={rocketLaunch}
            stage={"login"}
          />
        </div>
      </main>

      <div className="mt-20 md:mt-0">
        <p className=" absolute bottom-0 left-0 z-30 text-sm w-full p-3 text-center gap-10 text-primary-black">
          <div className="flex items-center justify-center gap-1">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1">
                <span>A product of</span>
                <img src={escro_tech} alt="logo" className=" w-4 h-4" />
                <span>Escrow-Tech Limited</span>
              </div>
              <span> Copyright &copy; 2023. All Rights Reserved.</span>
            </div>
          </div>
        </p>
      </div>
      {showResetPasswordDialog && <ResetPassword />}
    </>
  );
};

export default Login;
