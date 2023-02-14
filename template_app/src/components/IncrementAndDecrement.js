import React, {useState} from 'react'
import './IncrementAndDecrement.css';

const IncrementAndDecrement = (props) => {
  const [counter, setCounter] = useState(0);

  const decrementHandler = () => {
    if (counter > -10) {
      setCounter((prev) => prev - 1);
    }
    
  }
  const incrementHandler = () => {
    if (counter < 10) {
      setCounter((prev) => prev + 1); 
    }
  }

  const checkValue = () => {
    if (counter > 0) {
      return props.positive
    }else if (counter < 0) {
      return props.negative;
    }else{
      return props.zero;
    }
  }

  return (

    <>
      <button onClick={decrementHandler}>-</button>
      <label className={checkValue()}>{counter}</label>
      <button onClick={incrementHandler}>+</button>
    </>
  )
}

export default IncrementAndDecrement