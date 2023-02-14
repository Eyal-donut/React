import Button from "./components/Button";
import Wrapper from "./components/Helpers/Wrapper";
import React, { useState } from "react";


function App() {
  const colors = ["blue","red","yellow"];
  const [selectedColor, setSelectedColor] = useState('');


  const clickHandler = (colorName) => {
    setSelectedColor(colorName)
    
  }
  return (
    <Wrapper>
      <h1>The color selected is: {selectedColor}</h1>
      {colors.map((color) => 
        <Button colorName = {color} parentFunc = {clickHandler}/>
      )}
    </Wrapper>
  );
}
export default App;
