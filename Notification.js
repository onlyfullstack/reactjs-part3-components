import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";

export default class Notification extends Component {
  constructor() {
    this.state = {
      component: "Notification"
    };
  }

  render() {
    var message;
    var displayMessage = (this.props.notification > 0) ? "You have " + this.props.notification + " new notifications" : "You dont have new notifications";

      message = (
        <div>
          <h3 className="notification">
            {displayMessage}
          </h3>
          <h4 className="notification-component">
            I am coming from {this.state.component} Component
          </h4>
        </div>
      );
    
    return message;
  }
}