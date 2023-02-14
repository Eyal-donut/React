import Wrapper from "./components/Helpers/Wrapper";
import React, { useState } from "react";

function App() {
  const [num, setNum] = useState(0);

  const handleClick = (e) => {
    if (e.target.className === "increment" && num < 10) {
      setNum((prevCount) => prevCount + 1);
    }
    if (e.target.className === "decrement" && num > -10) {
      setNum((prevCount) => prevCount - 1);
    }
  };

  return (
    <Wrapper>
      <button className="increment" onClick={handleClick}>
        increment +
      </button>
      <label className={num > 0 ? "green" : num < 0 ? "red" : "black" }>{num}</label>
      <button className="decrement" onClick={handleClick}>
        decrement -
      </button>
    </Wrapper>
  );
}
export default App;
