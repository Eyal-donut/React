import Wrapper from "./components/Helpers/Wrapper";
import Checkbox from "./components/checkbox";


function App() {
  const checkboxesArray = [
    {id: 1,
    text: 
    "Sure you can sell my data",
    state: true
    },

    {id: 2,
    text: 
    "You can also spy on me",
    state: false
    },

    {id: 3,
    text: 
    "I don't really read that stuff",
    state: true
    },

    {id: 3,
    text: 
    "I declare I love dogs",
    state: false
    },
  ]

  return (
    <Wrapper>
    {checkboxesArray.map((item) => <Checkbox {...item}/>)}
      </Wrapper>
  );
}
export default App;
