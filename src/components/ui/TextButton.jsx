import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

const TextButton = ({
  color,
  content,
  callback,
  prefix,
  suffix,
  disabled,
  isImage,
}) => {
  return (
    <button
      disabled={disabled}
      className={twMerge(
        `flex items-center gap-x-2 w-fit p-0 whitespace-nowrap ${
          color ?? "text-primary-blue"
        }`,
        disabled ? "grayscale cursor-not-allowed" : 0
      )}
      onClick={() => callback()}
    >
      {prefix && isImage ? (
        <img
          alt="icon"
          src={prefix}
          className="text-primary-blue fill-primary-blue"
        />
      ) : (
        prefix
      )}
      {content}
      {suffix && isImage ? (
        <img
          alt="icon"
          src={prefix}
          className="text-primary-blue fill-primary-blue"
        />
      ) : (
        suffix
      )}
    </button>
  );
};

TextButton.propTypes = {
  color: PropTypes.string,
  content: PropTypes.string,
  callback: PropTypes.func,
  prefix: PropTypes.any,
  suffix: PropTypes.any,
  disabled: PropTypes.bool,
  isImage: PropTypes.bool,
};

export default TextButton;
