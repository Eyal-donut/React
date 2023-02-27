import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      css: true,
      javascript: true,
      learnReact: false,
      learnMongoDB: false,
      learnNodeJS: false,
    };
  }
  handleClick(e) {
    console.log(e.target.parentElement.className)
    switch (e.target.parentElement.className) {
      case "css":
        this.setState((prevState) => {
          return {css: !prevState.css };
        });
        break
      case "javaScript":
        this.setState((prevState) => {
          return {javascript: !prevState.javascript };
        });
        break
      case "learn-react":
        this.setState((prevState) => {
          return {learnReact: !prevState.learnReact };
        });
        break
      case "learn-mongo-db":
        this.setState((prevState) => {
          return {learnMongoDB: !prevState.learnMongoDB };
        });
        break
      default:
        this.setState((prevState) => {
          return {learnNodeJS: !prevState.learnNodeJS };
        });
    }
  }
  render() {
    return (
      <>
        <ul>
          <li className="css">
            <p>CSS</p>
            <button
              onClick={this.handleClick.bind(this)}
              className={this.state.css ? "true" : "false"}
            ></button>
          </li>
          <li className="javaScript">
            <p>JavaScript</p>
            <button
              onClick={this.handleClick.bind(this)}
              className={this.state.javascript ? "true" : "false"}
            ></button>
          </li>
          <li className="learn-react">
            <p>Learn React</p>
            <button
              onClick={this.handleClick.bind(this)}
              className={this.state.learnReact ? "true" : "false"}
            ></button>
          </li>
          <li className="learn-mongo-db">
            <p>Learn mongo DB</p>
            <button
              onClick={this.handleClick.bind(this)}
              className={this.state.learnMongoDB ? "true" : "false"}
            ></button>
          </li>
          <li className="learn-node-js">
            <p>Learn Node JS</p>
            <button
              onClick={this.handleClick.bind(this)}
              className={this.state.learnNodeJS ? "true" : "false"}
            ></button>
          </li>
        </ul>
      </>
    );
  }
}
export default App;
