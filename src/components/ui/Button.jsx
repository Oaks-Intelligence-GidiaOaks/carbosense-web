import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";
import Spinner from "./Spinner";

const Button = ({
  bgColor,
  content,
  width,
  height,
  textColor,
  isLoading,
  hoverColor,
  callback,
  disabled,
  borderStyle,
  textSize,
  spinnerSize,
}) => {
  return (
    <button
      disabled={isLoading ?? disabled}
      className={twMerge(
        `flex justify-center items-center transition-all cursor-pointer duration-500}`,
        width ?? "w-[240px]",
        height ?? "h-[45px]",
        bgColor ?? "bg-[#4747FF]",
        borderStyle ?? null,
        textSize ?? null,
        hoverColor ?? "hover:bg-[#3030ac]",
        disabled ? "bg-[#a9a9a9] hover:bg-[#a9a9a9] cursor-not-allowed" : null,
        textColor ?? "text-white"
      )}
      onClick={callback}
    >
      {!isLoading ? (
        <span>{content}</span>
      ) : (
        <Spinner width={spinnerSize === "small" ? "w-3" : null} />
      )}
    </button>
  );
};

Button.propTypes = {
  bgColor: PropTypes.string,
  content: PropTypes.any,
  width: PropTypes.string,
  height: PropTypes.string,
  textColor: PropTypes.string,
  textSize: PropTypes.string,
  borderStyle: PropTypes.string,
  isLoading: PropTypes.bool,
  hoverColor: PropTypes.string,
  spinnerSize: PropTypes.string,
  callback: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Button;
