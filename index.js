import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";
import Notification from "./Notification";

class App extends Component {
  constructor() {
    this.state = {
      notification: 5,
      name: "Only Fullstack"
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <Notification notification={this.state.notification} />
        <p>Start editing to see some magic happen :)</p>
        <a
          href="https://onlyfullstack.blogspot.com/2019/11/react-tutorial.html"
          target="_blank">
          ReactJS Tutorial on Only Fullstack
        </a>
        <a
          href="https://onlyfullstack.blogspot.com/2019/11/react-tutorial.html"
          target="_blank">
          <img
            src="https://1.bp.blogspot.com/-I276A9NSgjY/Xck5TadIjpI/AAAAAAAAAi0/gFb-9achXtk4XkELxVyRNR3UXuMJGsUfQCLcBGAsYHQ/s640/React%2BTutorial.jpg" height="30%" width="90%"/>
        </a>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
