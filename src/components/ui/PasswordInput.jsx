import { useState } from "react";
import PropTypes from "prop-types";
import eyeClosed from "../../assets/icons/eye_closed.svg";
import eyeOpened from "../../assets/icons/eye_open.svg";
import { twMerge } from "tailwind-merge";

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
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [revealPassword, setRevealPassword] = useState(false);

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
          `pointer-events-none transition-all absolute top-1/2 px-2 -translate-y-1/2 ${
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
};

export default PasswordInput;
