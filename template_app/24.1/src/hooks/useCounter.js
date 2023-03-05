import { useState } from "react";

const useCounter = (num) => {
  const [counter, setCounter] = useState(num);

  const addOne = () => {
    setCounter((prevNum)=> prevNum+1)
    return counter
  }
  const removeOne = () => {
    setCounter((prevNum)=> prevNum-1)
    return counter
  }
  const double = () => {
    setCounter((prevNum)=> prevNum*2)
    return counter
  }
  const divide = () => {
    setCounter((prevNum)=> prevNum/2)
    return counter
  }

  return {
    counter,
    addOne,
    removeOne,
    double,
    divide
  }
};

export default useCounter;
