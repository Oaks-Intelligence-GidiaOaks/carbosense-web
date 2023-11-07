import PropTypes from "prop-types";
import SizedBox from "../ui/SizedBox";
import { AnimatePresence, motion } from "framer-motion";
import { exitUp, initialDown, slideUp } from "../../constants/framer";
import { twMerge } from "tailwind-merge";

const OnboardingProgress = ({ step, steps }) => {
  return (
    <div>
      <SizedBox height="h-4" />
      <div className="flex gap-4">
        {Array(steps)
          .fill(0)
          .map((item, index) => (
            <div
              key={index}
              className={twMerge(`w-6 h-[5px] rounded bg-white`)}
            >
              <motion.div
                initial={
                  index < step && step - 1 === index
                    ? { width: 0, height: "100%" }
                    : index < step && step - 1 !== index
                    ? { width: "100%", height: "100%" }
                    : index >= step
                    ? { width: 0, height: "100%" }
                    : { width: 0, height: "100%" }
                }
                animate={
                  index < step && step - 1 === index
                    ? { width: "100%", height: "100%" }
                    : index < step && step - 1 !== index
                    ? { width: "100%", height: "100%" }
                    : index >= step
                    ? { width: 0, height: "100%" }
                    : { width: 0, height: "100%" }
                }
                key={index}
                className={twMerge(`w-6 h-[5px] rounded bg-step-active`)}
              />
            </div>
          ))}
      </div>
      <SizedBox height="h-2" />
      <p className="text-white text-center">
        Step{" "}
        <AnimatePresence mode="wait">
          {Array(steps)
            .fill(0)
            .map((s, index) => {
              if (index + 1 === step) {
                return (
                  <motion.span
                    initial={initialDown}
                    animate={slideUp}
                    exit={exitUp}
                    key={index}
                  >
                    {index + 1}
                  </motion.span>
                );
              } else return null;
            })}
        </AnimatePresence>{" "}
        of {steps}
      </p>
    </div>
  );
};

OnboardingProgress.propTypes = {
  step: PropTypes.number,
  steps: PropTypes.number,
};

export default OnboardingProgress;
