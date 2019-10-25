import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";

export default class Notification extends Component {
  
  render() {
    
    return (
        <div>
          <h3 className="notification">
            You have 5 new notifications
          </h3>
          <h4 className="notification-component">
            I am coming from Notification Component
          </h4>
        </div>
      );
  }
}