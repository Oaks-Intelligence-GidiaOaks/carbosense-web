import { useState } from "react";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

const TextInput = ({
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
  isDisabled,
}) => {
  const [isFocused, setIsFocused] = useState(false);

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
        isError ? errorBorderStyle : null,
        isDisabled ? borderStyle : null
      )}
    >
      <label
        className={twMerge(
          `pointer-events-none transition-all absolute top-1/2 px-2 -translate-y-1/2 rounded ${
            labelColor ?? "text-gray-600"
          } z-[1] left-2 text-gray-600 bg-[${labelBg ?? "white"}]`,
          isFocused || value.trim().length > 0 ? focusedLabelStyle : null,
          isError ? errorLabelStyle : null
        )}
      >
        {label ?? "Text Input"}
      </label>

      <input
        type="text"
        name={name}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={(e) => valueSetter(e.target.name, e.target.value, e)}
        className={twMerge(
          ` z-[1] font-satoshi pr-8 py-4 pl-5 rounded-md w-full ${
            bgColor ?? "bg-white"
          }`,
          isFocused ? focusedBorderStyle : null,
          isError ? errorBorderStyle : null,
          isError && isFocused ? errorFocusedStyle : null,
          isDisabled ? "bg-gray-100" : null
        )}
        value={value}
        disabled={isDisabled}
      />
    </div>
  );
};

TextInput.propTypes = {
  label: PropTypes.string,
  isError: PropTypes.bool,
  isDisabled: PropTypes.bool,
  bgColor: PropTypes.string,
  labelBg: PropTypes.string,
  labelColor: PropTypes.string,
  borderColor: PropTypes.string,
  value: PropTypes.string,
  valueSetter: PropTypes.func,
  width: PropTypes.string,
  name: PropTypes.string,
};

export default TextInput;
