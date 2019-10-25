import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";
import Notification from "./Notification";

class App extends Component {

  render() {
    return (
      <div>
        <Hello />
        <Notification />
        <p>Start editing to see some magic happen :)</p>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
