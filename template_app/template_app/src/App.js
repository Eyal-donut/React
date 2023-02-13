import Wrapper from "./components/Helpers/Wrapper";
import Title from "./components/Title";
import Child from "./components/Child";
import ChildrenContainer from "./components/childrenContainer";

function App() {
  const ori = {
    childName: "Ori",
    balloonColor: "red"
  }
  const ron = {
    childName: "Ron",
    balloonColor: "blue"
  }
  const sigalit = {
    childName: "Sigalit",
    balloonColor: "green"
  }
  const ruti = {
    childName: "Ruti",
    balloonColor: "yellow"
  }
  const alon = {
    childName: "Alon",
    balloonColor: "purple"
  }

  return (
    <Wrapper>
      <Title/>
      <ChildrenContainer>
        <Child 
        childName={ori.childName}
        balloonColor={ori.balloonColor} 
        />
        <Child 
        childName={ron.childName}
        balloonColor={ron.balloonColor} 
        />
        <Child 
        childName={sigalit.childName}
        balloonColor={sigalit.balloonColor} 
        />
        <Child 
        childName={ruti.childName}
        balloonColor={ruti.balloonColor} 
        />
        <Child 
        childName={alon.childName}
        balloonColor={alon.balloonColor} 
        />
      </ChildrenContainer>
      
    </Wrapper>
  )

}
export default App;
