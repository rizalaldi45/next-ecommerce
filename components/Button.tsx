type buttonType = {
  btnText: string;
  margin?: string;
  rounded?: string;
  fontSize?: string;
  padding?: string;
  color?: string;
  textColor?: string;
  maxWidth?: string;
  shadow?: string;
  bordered?: string;
};

const Button = ({
  btnText,
  margin,
  rounded,
  fontSize,
  padding,
  color,
  textColor,
  maxWidth,
  shadow,
  bordered,
}: buttonType): JSX.Element => {
  return (
    <button
      className={`${color ? color : "bg-black"} ${
        textColor ? textColor : "text-white"
      } font-bold ${fontSize} ${margin} ${rounded} ${
        padding ? padding : "px-6 py-2"
      } ${maxWidth} truncate ${shadow} ${bordered}`}
    >
      {btnText}
    </button>
  );
};

export default Button;
