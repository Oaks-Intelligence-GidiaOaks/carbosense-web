import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import PropTypes from "prop-types";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Globe2 } from "lucide-react";

const PhoneNumberInput = ({
  label,
  isError,
  //   bgColor,
  labelBg,
  labelColor,
  borderColor,
  value,
  valueSetter,
  width,
  name,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const borderStyle = `border border-solid rounded-md border-[#ACB7BC] relative font-satoshi h-[56px]`;
  const focusedLabelStyle = `left-2 top-0 text-sm ${labelBg ?? "bg-white"} ${
    labelColor ?? "text-primary-black"
  }`;
  const focusedBorderStyle = `${
    borderColor ?? "border-2 border-primary-blue"
  } ${isError ? "focus:outline-[red]" : "focus:outline-primary-blue"}`;
  const errorLabelStyle = "text-[red_!important]";
  const errorBorderStyle = "border-[red_!important]";
  //   const errorFocusedStyle =
  //     "border-[2px_solid_red_!important] focus:outline-red-600";

  return (
    <div className={`relative ${width ?? "w-[240px]"}`}>
      <label
        className={twMerge(
          `pointer-events-none transition-all absolute top-1/2 px-2 -translate-y-1/2 rounded bg-red-500 ${
            labelColor ?? "text-gray-600"
          } z-[1] left-12 text-gray-600 bg-white`,
          isFocused || value.trim().length > 0 ? focusedLabelStyle : null,
          isError ? errorLabelStyle : null
        )}
      >
        {label ?? "Text Input"}
      </label>
      {!value && (
        <div
          className={twMerge(
            `pointer-events-none transition-all absolute top-1/2 -translate-y-1/2 rounded bg-red-500 ${
              labelColor ?? "text-gray-600"
            } z-[10] left-4 text-gray-600 bg-transparent bg-white w-fit`
          )}
        >
          <Globe2 strokeWidth={1.5} size={18} color="gray" />
        </div>
      )}
      <PhoneInput
        containerClass={twMerge(
          borderStyle,
          isFocused ? focusedBorderStyle : null,
          isError ? errorBorderStyle : null
        )}
        inputStyle={{
          backgroundColor: "transparent",
          border: "none",
          width: "100%",
          height: "100%",
          verticalAlign: "middle",
          fontFamily: "Satoshi",
          transform: "translateX(8px)",
        }}
        buttonStyle={{
          background: "transparent",
          border: "none",
          borderRadius: "8px",
          width: "50px",
          left: "8px",
        }}
        dropdownStyle={{
          borderRadius: "8px",
        }}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        value={value}
        onChange={(val, country, e, formattedValue) =>
          valueSetter(name, formattedValue, e)
        }
      />
    </div>
  );
};

PhoneNumberInput.propTypes = {
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

export default PhoneNumberInput;
