import { useState } from "react";
import PropTypes from "prop-types";
import { handleValue } from "../../utils";
import { twMerge } from "tailwind-merge";

const NumberInput = ({
  label,
  isError,
  bgColor,
  labelBg,
  labelColor,
  borderColor,
  value,
  valueSetter,
  width,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const focusedLabelStyle = `left-2 top-0 text-sm ${
    labelBg ? `bg-[${labelBg}]` : "bg-white"
  } text-[${labelColor ?? "white"}]`;
  const focusedBorderStyle = `border-[${
    borderColor ?? "#62686b"
  }] border-[2px_solid_#62686b_!important] focus:outline-[${
    isError ? "red" : "#62686b"
  }]`;
  const errorLabelStyle = "text-[red_!important]";
  const errorBorderStyle = "border-[red_!important]";
  const errorFocusedStyle =
    "border-[2px_solid_red_!important] focus:outline-red-600";

  return (
    <div
      className={`w-[${
        width ?? "240px"
      }] border border-solid border-[#ACB7BC] relative font-satoshi ${
        isFocused ? focusedBorderStyle : null
      } rounded-md ${isError ? errorBorderStyle : null}`}
    >
      <label
        className={twMerge(
          `pointer-events-none transition-all absolute top-1/2 px-2 -translate-y-1/2 text-[${labelColor}] left-2 text-gray-600 bg-[${
            labelBg ?? "white"
          }]`,
          isFocused || value.trim().length > 0 ? focusedLabelStyle : null,
          isError ? errorLabelStyle : null
        )}
      >
        {label ?? "Number Input"}
      </label>
      <input
        type="text"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={(e) => valueSetter(handleValue(e.target.value))}
        className={twMerge(
          `font-satoshi py-4 pl-5 rounded-md w-full bg-[${bgColor ?? "white"}]`,

          isFocused ? focusedBorderStyle : null,
          isError ? errorBorderStyle : null,
          isError && isFocused ? errorFocusedStyle : null
        )}
        value={handleValue(value)}
      />
    </div>
  );
};

NumberInput.propTypes = {
  label: PropTypes.string,
  isError: PropTypes.bool,
  bgColor: PropTypes.string,
  labelBg: PropTypes.string,
  labelColor: PropTypes.string,
  borderColor: PropTypes.string,
  value: PropTypes.string,
  valueSetter: PropTypes.func,
  width: PropTypes.string,
};

export default NumberInput;
