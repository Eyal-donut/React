
const Button = ({colorName, parentFunc}) => {

  return (
      <button onClick = {() => parentFunc(colorName)} className = {colorName}>{colorName}</button>
      
  );
};
export default Button;
