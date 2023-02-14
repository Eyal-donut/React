import Wrapper from "./Helpers/Wrapper";
import React, { useState } from "react";
import Counter from "./Counter";

const Button = ({ text }) => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <Wrapper>
      <button onClick={handleClick}>{text}</button>
      <Counter num={count} />
    </Wrapper>
  );
};
export default Button;
