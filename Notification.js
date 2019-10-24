import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";

export default class Notification extends Component {
  render() {
    var message;
    if (this.props.notification) {
      message = <h3>you have {this.props.notification} new notifications</h3>;
    } else {
      message = <h3>You have {this.props.notification} new notifications</h3>;
    }

    return message;
  }
}
