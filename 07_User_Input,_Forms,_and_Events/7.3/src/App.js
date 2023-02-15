import Form from "./components/Form";

function App() {

  const detailsHandler = (filledDetails) => {
    const filledDetails2 = {
      ...filledDetails
    }
    console.log("here I can do sth with the saved details", filledDetails2)
  }
  
  return (
    <Form onSavedDetails = {detailsHandler}/>
  );
}
export default App;
