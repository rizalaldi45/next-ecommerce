import Router from "next/router";
import { Url } from "url";

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
  link?: string;
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
  link,
}: buttonType): JSX.Element => {
  return (
    <button
      className={`${color ? color : "bg-black"} ${
        textColor ? textColor : "text-white"
      } font-bold ${fontSize} ${margin} ${rounded} ${
        padding ? padding : "px-6 py-2"
      } ${maxWidth} truncate ${shadow} ${bordered}`}
      onClick={() => Router.push(link || '')}
    >
      {btnText}
    </button>
  );
};

export default Button;
