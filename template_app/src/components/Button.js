import Wrapper from "./Helpers/Wrapper";
// import React, { useState } from "react";

const Button = ({ text }) => {
  const [color, setColor] = useState();

  const handleClick = () => {
    setColor();
  };

  return (
      <button>{text}</button>
  );
};
export default Button;
