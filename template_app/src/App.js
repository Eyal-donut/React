import Button from "./components/Button";
import Wrapper from "./components/Helpers/Wrapper";

function App() {
  const colors = ["blue","red","yellow"];
  
  return (
    <Wrapper>
      {colors.map((color) => {
        return <Button text= {color}/>
      })}
    </Wrapper>
  );
}
export default App;
