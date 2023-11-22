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
}) => {
  return (
    <button
      disabled={isLoading ?? disabled}
      className={twMerge(
        `flex justify-center items-center transition-all cursor-pointer }`,
        width ?? "w-[240px]",
        height ?? "h-[45px]",
        bgColor ?? "bg-[#4747FF]",
        hoverColor ?? "hover:bg-[#3030ac]",
        disabled ? "bg-[#a9a9a9] hover:bg-[#a9a9a9] cursor-not-allowed" : null
      )}
      onClick={callback}
    >
      {!isLoading ? (
        <span className={twMerge(`${textColor ?? "text-white"}`)}>
          {content}
        </span>
      ) : (
        <Spinner />
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
  isLoading: PropTypes.bool,
  hoverColor: PropTypes.string,
  callback: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Button;
