import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      seconds: 0,
      minutes: 0,
      hours: 0,
      
    };
  }
  handleInputChange(e) {
    // console.log(e.target.parentElement.className);
    switch (e.target.parentElement.className) {
      case "seconds":
        this.setState({
          seconds: e.target.value,
          minutes: (e.target.value)/60,
          hours: ((e.target.value)/60)/60,
        })
        break;
      case "minutes":
        this.setState({
          seconds: (e.target.value)*60,
          minutes: e.target.value,
          hours: (e.target.value)/60,
        })
        break;
      default:
        this.setState({
          seconds: ((e.target.value)*60)*60,
          minutes: (e.target.value)*60,
          hours: e.target.value,
        })
    }
  }
  render() {
    return (
      <>
        <ul>
          <li className="hours">
            <p>Hours</p>
            <input
              onChange={this.handleInputChange.bind(this)}
              placeholder= {this.state.hours}
            ></input>
          </li>
          <li className="minutes">
            <p>Minutes</p>
            <input
              onChange={this.handleInputChange.bind(this)}
              placeholder= {this.state.minutes}
            ></input>
          </li>
          <li className="seconds">
            <p>Seconds</p>
            <input
              onChange={this.handleInputChange.bind(this)}
              placeholder= {this.state.seconds}
            ></input>
          </li>
        </ul>
      </>
    );
  }
}
export default App;
