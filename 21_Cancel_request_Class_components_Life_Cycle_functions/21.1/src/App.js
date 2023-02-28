import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isDisplayed: false,
    };
  }
  componentDidMount() {
    const timerID1 = setTimeout(() => {
      this.setState({ isDisplayed: true });
    }, 1000);
    const timerID2 = setTimeout(() => {
      this.setState({ isDisplayed: false });
    }, 4000);

    return () => {
      clearTimeout(timerID1);
      clearTimeout(timerID2);
    };
  }

  render() {
    return (
      <>
        <div className={this.state.isDisplayed ? "box1" : ""} />
        <div className={this.state.isDisplayed ? "box2" : ""} />
        <div className={this.state.isDisplayed ? "box3" : ""} />
      </>
    );
  }
}
export default App;
