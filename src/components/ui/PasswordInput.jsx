import { useState } from "react";
import PropTypes from "prop-types";
import eyeClosed from "../../assets/icons/eye_closed.svg";
import eyeOpened from "../../assets/icons/eye_open.svg";
import { twMerge } from "tailwind-merge";
import SizedBox from "./SizedBox";
import { LockKeyhole, XCircle } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const PasswordInput = ({
  label,
  isError,
  bgColor,
  labelBg,
  labelColor,
  borderColor,
  value,
  valueSetter,
  width,
  name,
  newPassword,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [revealPassword, setRevealPassword] = useState(false);
  const specialCharacters = "~`! @#$%^&*()_-+={[}]|\\:;\"'<,>.?/";

  const passwordRequirementsborderStyle = `border border-solid rounded-md z-50 border-[#ACB7BC] shadow-lg p-2 bg-white w-full absolute -top-4 -translate-y-full font-satoshi`;
  const borderStyle = `border border-solid rounded-md border-[#ACB7BC] relative font-satoshi
  ${width ?? "w-[240px]"}`;
  const focusedLabelStyle = `left-2 top-0 text-sm ${labelBg ?? "bg-white"} ${
    labelColor ?? "text-primary-black"
  }`;
  const focusedBorderStyle = `${
    borderColor ?? "border-primary-blue"
  } border-[2px_solid_#62686b_!important] ${
    isError ? "focus:outline-[red]" : "focus:outline-primary-blue"
  }`;
  const errorLabelStyle = "text-[red_!important]";
  const errorBorderStyle = "border-[red_!important]";
  const errorFocusedStyle =
    "border-[2px_solid_red_!important] focus:outline-red-600";

  return (
    <div
      className={twMerge(
        borderStyle,
        isFocused ? focusedBorderStyle : null,
        isError ? errorBorderStyle : null
      )}
    >
      <label
        className={twMerge(
          `pointer-events-none transition-all absolute top-1/2 px-2 -translate-y-1/2 rounded ${
            labelColor ?? "text-gray-600"
          } z-[1] left-2 ${labelBg ?? "bg-white"}`,
          isFocused || value.trim().length > 0 ? focusedLabelStyle : null,
          isError ? errorLabelStyle : null
        )}
      >
        {label ?? "Text Input"}
      </label>
      <div className="relative">
        <input
          type={revealPassword ? "text" : "password"}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={(e) => valueSetter(name, e.target.value)}
          className={twMerge(
            `z-[1] font-satoshi pr-12 py-4 pl-5 rounded-md w-full ${
              bgColor ?? "bg-white"
            }`,
            isFocused ? focusedBorderStyle : null,
            isError ? errorBorderStyle : null,
            isError && isFocused ? errorFocusedStyle : null
          )}
          value={value}
        />
        <div className="w-12 h-full flex justify-center items-center rounded-md absolute top-0 right-0">
          <button onClick={() => setRevealPassword(!revealPassword)}>
            <img
              src={revealPassword ? eyeClosed : eyeOpened}
              className="hover:bg-gray-300 p-[2px] rounded-full transition-all w-6"
            />
          </button>
        </div>
      </div>
      {/* password requirements */}
      <AnimatePresence mode="wait">
        {newPassword && isFocused && (
          <motion.div
            initial={{ opacity: 0, top: 0 }}
            animate={{ opacity: 1, top: "-16px" }}
            exit={{ opacity: 0, top: 0 }}
            className={twMerge(
              passwordRequirementsborderStyle,
              "after:content-[''] after:block after:w-4 after:h-4 after:absolute after:left-9 after:rotate-45 after:bg-white after:rounded after:border after:border-transparent after:border-b-[#ACB7BC] after:border-r-[#ACB7BC]"
            )}
          >
            <p className="flex gap-x-2 items-center leading-[0]">
              <LockKeyhole strokeWidth={1.5} size={18} />{" "}
              <span>Password Requirements</span>
            </p>
            <SizedBox height="h-4" />
            <div
              className={`flex gap-x-2 items-start transition-all duration-300 ${
                value.length >= 6 ? "text-green-500" : "text-red-500"
              }`}
            >
              <div className="w-[14px]">
                <XCircle
                  strokeWidth={1.5}
                  size={14}
                  className="translate-y-[2px]"
                />{" "}
              </div>
              <span className="text-sm">
                Password length must be at least six(6) characters long.
              </span>
            </div>
            <div
              className={`flex gap-x-2 items-start transition-all duration-300 ${
                /[A-Z]/.test(value) ? "text-green-500" : "text-red-500"
              }`}
            >
              <div className="w-[14px]">
                <XCircle
                  strokeWidth={1.5}
                  size={14}
                  className="translate-y-[2px]"
                />{" "}
              </div>
              <span className="text-sm">
                Password must contain one uppercase alphabet e.g A-Z.
              </span>
            </div>
            <div
              className={`flex gap-x-2 items-start transition-all duration-300 ${
                /\d/.test(value) ? "text-green-500" : "text-red-500"
              }`}
            >
              <div className="w-[14px]">
                <XCircle
                  strokeWidth={1.5}
                  size={14}
                  className="translate-y-[2px]"
                />{" "}
              </div>
              <span className="text-sm">
                Password must contain one number e.g 0-9.
              </span>
            </div>
            <div
              className={`flex gap-x-2 items-start transition-all duration-300 ${
                new RegExp(/[~`!@#$%^&*()_+\-={[}\]|\\:;"'<,>.?/]/).test(value)
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              <div className="w-[14px]">
                <XCircle
                  strokeWidth={1.5}
                  size={14}
                  className="translate-y-[2px]"
                />{" "}
              </div>
              <span className="text-sm">
                Password must contain at least one special character e.g{" "}
                {specialCharacters}
              </span>
            </div>
            <SizedBox height="h-2" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

PasswordInput.propTypes = {
  label: PropTypes.string,
  isError: PropTypes.bool,
  bgColor: PropTypes.string,
  labelBg: PropTypes.string,
  labelColor: PropTypes.string,
  borderColor: PropTypes.string,
  value: PropTypes.string,
  valueSetter: PropTypes.func,
  width: PropTypes.string,
  name: PropTypes.string,
  newPassword: PropTypes.bool,
};

export default PasswordInput;
