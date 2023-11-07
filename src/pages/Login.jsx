import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  PasswordInput,
  SizedBox,
  TextButton,
  TextInput,
} from "../components/ui";
import carbosenseLogo from "../assets/carbosense_logo.svg";
import rocketLaunch from "../assets/rocket_launch.svg";
import { Illustration } from "../components/containers";
import { AnimatePresence, motion } from "framer-motion";
import { exitLeft, initialLeft, slideRight } from "../constants/framer";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main className="relative h-screen bg-white overflow-hidden">
      <header className="max-w-[1440px] mx-auto fixed z-10 top-0 left-1/2 -translate-x-1/2 pl-[5%] min-[1560px]:pl-[3%] py-4 w-full bg-white">
        <Link to={"/"}>
          <img src={carbosenseLogo} alt="logo" className="max-w-[200px]" />
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
              <h1 className="text-3xl font-semibold text-primary-black">
                Sign In
              </h1>
              <div className="mt-10 w-full flex-col flex items-center">
                <TextInput
                  bgColor="bg-white"
                  label="Email address"
                  value={email}
                  valueSetter={setEmail}
                  width="w-[60%]"
                />
                <SizedBox height="h-6" />
                <PasswordInput
                  bgColor="bg-white"
                  label="Password"
                  value={password}
                  valueSetter={setPassword}
                  width="w-[60%]"
                />
                <SizedBox height="h-2" />
                <div className="w-[60%] flex justify-end">
                  <TextButton content={"Forgot Password?"} />
                </div>
                <SizedBox height="h-6" />
                <Button width="w-[60%]" content="Sign in" />
                <SizedBox height="h-8" />
                <div className="w-[60%] flex justify-center">
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
  );
};

export default Login;
