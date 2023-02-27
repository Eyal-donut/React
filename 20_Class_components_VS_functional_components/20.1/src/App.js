import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    // const [num, setNum] = useState(0);
    this.state = {
      num: 0,
    };
  }
  handleClick(e) {
    if (e.target.className === "increment" && this.state.num < 10) {
      // setNum((prevCount) => prevCount + 1);
      this.setState((prevNum) => {
        return { num: prevNum.num + 1 };
      });
    }
    if (e.target.className === "decrement" && this.state.num > -10) {
      // setNum((prevCount) => prevCount - 1 );
      this.setState((prevNum) => {
        return { num: prevNum.num - 1 };
      });
    }
  }
  render() {
    return (
      <>
        <button className="increment" onClick={this.handleClick.bind(this)}>
          increment +
        </button>
        <label
          className={
            this.state.num > 0 ? "green" : this.state.num < 0 ? "red" : "black"
          }
        >
          {this.state.num}
        </label>
        <button className="decrement" onClick={this.handleClick.bind(this)}>
          decrement -
        </button>
      </>
    );
  }
}
export default App;
