import React from "react";
import buttonImg from "../assets/button-icon.png";
const Button = ({ text }) => {
  return (
    <div>
      <button className="flex text-sm items-center gap-1">
        <p className="text-orange-400">{text}</p>
        <img src={buttonImg} alt="button-img" />
      </button>
    </div>
  );
};

export default Button;
