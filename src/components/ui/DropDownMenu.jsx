import { useRef, useState } from "react";
import PropTypes from "prop-types";
import { useOutsideCloser } from "../../hooks";
import chevronDown from "../../assets/icons/chevron_down.svg";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";
import { initialUp, slideDown } from "../../constants/framer";

const DropDownMenu = ({
  label,
  isError,
  bgColor,
  labelBg,
  labelColor,
  borderColor,
  value,
  valueSetter,
  options,
  allowFiltering,
  width,
  optionsBgColor,
  name,
  height,
  radius,
  textSize,
  padding,
  border,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [controlValue, setControlValue] = useState(value?.label ?? "");
  const controlRef = useRef();

  useOutsideCloser(controlRef, isFocused, setIsFocused);

  const focusedLabelStyle = `left-2 top-0 text-sm ${labelBg ?? "bg-white"} ${labelColor ?? "text-primary-black"
    }`;
  const focusedBorderStyle = `placeholder:opacity-1 ${borderColor ?? "border-primary-blue"
    } ${isError ? "focus:outline-[red]" : "focus:outline-primary-blue"}`;
  const focusedDropDownStyle = `${borderColor ?? "border-primary-blue"} ${isError ? "focus:outline-[red]" : "focus:outline-primary-blue"
    } outline outline-primary-blue border-[1px] outline-[1.5px] transition-all`;
  const errorLabelStyle = "text-[red_!important]";
  const errorBorderStyle = "border-[red_!important]";
  const errorFocusedStyle =
    "border-[2px_solid_red_!important] focus:outline-red-600";

  return (
    <div
      className={twMerge(
        `border-solid border-[#ACB7BC] relative font-satoshi ${!radius ? "rounded-md" : "rounded-none"
        }`,
        `${!border ? "border" : "border-0"}`,
        `${width ?? "w-[240px]"}`,
        `${height ?? null}`,
        `${isFocused ? focusedDropDownStyle : null}`,
        `${isError ? errorBorderStyle : null}`
      )}
      ref={controlRef}
      onClick={() => {
        setIsFocused(!isFocused);
      }}
    >
      <label
        className={twMerge(
          `pointer-events-none transition-all absolute top-1/2 px-2 -translate-y-1/2 text-[${labelColor}] left-2 text-gray-600`,
          isFocused || value?.value?.trim().length > 0
            ? focusedLabelStyle
            : null,
          isError ? errorLabelStyle : null
        )}
      >
        {label ?? "Text Input"}
      </label>
      <div className="flex">
        <input
          placeholder="Select option"
          type="text"
          name={name}
          // onFocus={() => setIsFocused(true)}
          // onBlur={() => {
          //   if (options.every((option) => option.label !== controlValue)) {
          //     valueSetter(name, null);
          //     setControlValue("");
          //   }
          // }}

          onBlur={() => {
            if (Array.isArray(options) && options.every((option) => option.label !== controlValue)) {
              valueSetter(name, null);
              setControlValue("");
            }
          }}

          readOnly={!allowFiltering}
          // onChange={(e) => setControlValue(e.target.value)}
          onChange={(e) => {
            console.log("Input Value:", e.target.value);
            setControlValue(e.target.value);
          }}

          className={twMerge(
            `${textSize ?? null} outline-0 flex-1 font-satoshi ${padding ?? "py-4"
            } pl-5 pr-12 text-ellipsis overflow-hidden ${!radius ? "rounded-md" : "rounded-none"
            } w-[240px] cursor-pointer ${bgColor ?? "bg-white"} `,
            `${isFocused
              ? focusedBorderStyle
              : "outline-none placeholder:text-transparent"
            }`,
            `${isError ? errorBorderStyle : null}`,
            `${isError && isFocused ? errorFocusedStyle : null}`
          )}
          value={controlValue}
        />{" "}
        <button
          className={twMerge(
            `flex justify-center items-center w-12 ${!radius ? "rounded-md" : "rounded-none"
            } ${bgColor ?? "bg-white"}`
          )}
        >
          <img
            src={chevronDown}
            className={`cursor-pointer p-[2px] rotate-180 w-6 hover:bg-gray-300 rounded-full transition-all ${isFocused ? "rotate-0" : null
              }`}
          />
        </button>
      </div>
      <AnimatePresence>
        {isFocused && options.length && (
          <motion.ul
            initial={initialUp}
            animate={slideDown}
            exit={initialUp}
            className={twMerge(
              `${optionsBgColor ?? "bg-white"}`,
              `overflow-y-scroll absolute z-50 top-[110%] rounded-md w-full shadow-md h-[150px] dropdown-menu`
            )}
          >
            {allowFiltering
              ? options
                .filter((option) =>
                  option?.label
                    .toLowerCase()
                    .includes(controlValue.toLowerCase())
                )
                .map((option, index) => (
                  <li
                    className="p-2 cursor-pointer hover:bg-gray-200 transition-all"
                    key={index}
                    onClick={() => {
                      setControlValue(option?.label);
                      valueSetter(name, {
                        label: option?.label,
                        value: option?.value,
                      });
                    }}
                  >
                    {option?.label}
                  </li>
                ))
              : options.map((option, index) => (
                <li
                  className="p-2 cursor-pointer hover:bg-gray-200 transition-all"
                  key={index}
                  onClick={() => {
                    setControlValue(option?.label);
                    valueSetter(name, {
                      label: option?.label,
                      value: option?.value,
                    });
                  }}
                >
                  {option?.label}
                </li>
              ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

DropDownMenu.propTypes = {
  label: PropTypes.string,
  isError: PropTypes.bool,
  bgColor: PropTypes.string,
  labelBg: PropTypes.string,
  labelColor: PropTypes.string,
  borderColor: PropTypes.string,
  value: PropTypes.object,
  valueSetter: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.object),
  allowFiltering: PropTypes.bool,
  width: PropTypes.string,
  optionsBgColor: PropTypes.string,
  name: PropTypes.string,
  textSize: PropTypes.string,
  padding: PropTypes.string,
  radius: PropTypes.bool,
  height: PropTypes.string,
  border: PropTypes.bool,
};

export default DropDownMenu;
