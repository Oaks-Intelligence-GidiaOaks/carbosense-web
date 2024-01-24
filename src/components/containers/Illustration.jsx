import PropTypes from "prop-types";
import SizedBox from "../ui/SizedBox";
import OnboardingProgress from "./OnboardingProgress";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";
import { exitUp, initialUp, slideDown } from "../../constants/framer";

const Illustration = ({
  title,
  subTitle,
  graphic,
  showOnboardingProgress,
  step,
  stage,
}) => {
  return (
    <div className="hidden min-[770px]:flex flex-[0.6] pt-10 h-full relative z-10 items-center justify-center">
      {/* background */}
      <div className="w-[clamp(1000px,100vmax,1440px)] h-[100vmax] bg-primary-blue left-[40%] rounded-[700000000000000px] top-1/2 -translate-y-1/2 fixed"></div>
      <div className="w-[48%] z-[1] flex flex-col justify-center items-center fixed right-[6%]">
        <h2 className="text-3xl text-white text-center">{title}</h2>
        <SizedBox height="h-4" />
        <p className="w-[80%] text-white text-center">{subTitle}</p>
        <SizedBox height="h-4" />
        <AnimatePresence mode="wait">
          {stage === "login" && (
            <motion.img
              key="login"
              initial={initialUp}
              animate={slideDown}
              exit={exitUp}
              src={graphic}
              alt="illustration"
              className={twMerge(
                `${showOnboardingProgress ? "w-[60%]" : null}`,
                step === 4 ? "w-[40%]" : null
              )}
            />
          )}
          {stage === "register" && (
            <motion.img
              key="register"
              initial={initialUp}
              animate={slideDown}
              exit={exitUp}
              src={graphic}
              alt={stage}
              className={twMerge(
                `${showOnboardingProgress ? "w-[60%]" : null}`,
                step === 4 ? "w-[40%]" : null
              )}
            />
          )}
          {stage === "registration_complete" && (
            <motion.img
              key="registration_complete"
              initial={initialUp}
              animate={slideDown}
              exit={exitUp}
              src={graphic}
              alt={stage}
              className={twMerge(
                `${showOnboardingProgress ? "w-[60%]" : null}`,
                step === 4 ? "w-[40%]" : null
              )}
            />
          )}
        </AnimatePresence>
        <SizedBox height="h-2" />
        {showOnboardingProgress ? (
          <OnboardingProgress steps={4} step={step} />
        ) : null}
      </div>


      
    </div>
  );
};

Illustration.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  graphic: PropTypes.string,
  showOnboardingProgress: PropTypes.bool,
  step: PropTypes.number,
  stage: PropTypes.string,
};

export default Illustration;
