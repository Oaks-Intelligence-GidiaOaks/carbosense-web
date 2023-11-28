import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Illustration } from "../components/containers";
import carbosenseLogo from "../assets/carbosense_logo.svg";
import registrationSubmitted from "../assets/registration_submitted.svg";
import { VerifyEmail } from "../components/registration";

const ProtectedRoute = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  const [form, setForm] = useState({
    otp: "",
  });
  const [direction, setDirection] = useState("forward");

  // If there's a user
  if (user) {
    // If user is not verified
    if (!user.isVerified) {
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
              <VerifyEmail
                key="verify_email"
                direction={direction}
                setDirection={setDirection}
                form={form}
                formSetter={setForm}
                step={4}
              />
              {/* graphic */}
            </AnimatePresence>
            <Illustration
              title="Join Forward-Thinking Organizations That Care About Our Planet's Future."
              subTitle="Track and improve your carbon footprint to contribute to a better future. Actively stay dedicated to making a positive impact on the environment."
              graphic={registrationSubmitted}
              stage={"registration_complete"}
              showOnboardingProgress={true}
              step={4}
            />
          </div>
        </main>
      );
    }
    return <>{children}</>;
  }

  // If there's no user
  return <Navigate to={"/"} />;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node,
};

export default ProtectedRoute;
