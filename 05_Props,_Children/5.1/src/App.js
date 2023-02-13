import Button from "./components/Helpers/button";
import Wrapper from "./components/Helpers/Wrapper";

function App() {
  const importantBtn = {
    text: "Important",
    bold: true
  }
  const notImportantBtn = {
    text: "Not important",
    bold: false
  }
  return (
    <Wrapper>
      <Button text={importantBtn.text} bold={importantBtn.bold}/>
      <Button text={notImportantBtn.text} bold={notImportantBtn.bold}/>
    </Wrapper>
  )

}
export default App;
