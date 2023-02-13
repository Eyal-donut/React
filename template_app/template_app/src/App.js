import Wrapper from "./components/Helpers/Wrapper";
import Title from "./components/Title";
import Child from "./components/Child";
import ChildrenContainer from "./components/childrenContainer";

function App() {
  const children = [
    {
      childName: "Ori",
      balloonColor: "red"
    },
    {
      childName: "Ron",
      balloonColor: "blue"
    },
    {
      childName: "Sigalit",
      balloonColor: "green"
    },
    {
      childName: "Ruti",
      balloonColor: "yellow"
    },
    {
      childName: "Alon",
      balloonColor: "purple"
    }
  ]
  return (
    <Wrapper>
      <Title/>
      <ChildrenContainer>
      {children.map((childObj)=>
      <Child
      childName={childObj.childName}
      balloonColor={childObj.balloonColor}
      /> 
      )}
      </ChildrenContainer>
      
    </Wrapper>
  )

}
export default App;
