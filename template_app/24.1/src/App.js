import useCounter from "./hooks/useCounter";

const App = () => {
  const { counter, addOne, removeOne, double, divide } = useCounter(5);

  const clickHandler = (e) => {
    switch (e.target.id) {
      case "double":
        double();
        break;
      case "addOne":
        addOne();
        break;
      case "removeOne":
        removeOne();
        break;
      default:
        divide();
    }
  };

  return (
    <>
      <h2>{counter}</h2>
      <button id="double" onClick={clickHandler}>
        Double
      </button>
      <button id="divide" onClick={clickHandler}>
        Divide
      </button>
      <button id="addOne" onClick={clickHandler}>
        Add one
      </button>
      <button id="removeOne" onClick={clickHandler}>
        Remove one
      </button>
    </>
  );
};
export default App;
