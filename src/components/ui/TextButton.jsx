import PropTypes from "prop-types";

const TextButton = ({ color, content, callback, prefix, suffix }) => {
  return (
    <button
      className={`flex items-center gap-x-2 w-fit p-0 whitespace-nowrap ${
        color ?? "text-primary-blue"
      }`}
      onClick={callback}
    >
      {prefix && (
        <img
          alt="icon"
          src={prefix}
          className="text-primary-blue fill-primary-blue"
        />
      )}
      {content}
      {suffix && (
        <img
          alt="icon"
          src={prefix}
          className="text-primary-blue fill-primary-blue"
        />
      )}
    </button>
  );
};

TextButton.propTypes = {
  color: PropTypes.string,
  content: PropTypes.string,
  callback: PropTypes.func,
  prefix: PropTypes.string,
  suffix: PropTypes.string,
};

export default TextButton;
