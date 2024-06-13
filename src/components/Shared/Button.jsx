import React from "react";

const Button = ({ text, bgColor, textColor, handler, style = {} }) => {
  return (
    <button
      style={style}
      onClick={handler}
      className={`${bgColor} ${textColor} cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10 font-semibold`}
    >
      {text}
    </button>
  );
};

export default Button;
