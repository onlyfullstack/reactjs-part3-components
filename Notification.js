import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

export default class Notification extends Component {
render() {
  return(
    <h3>you have {this.props.notification} new notifications</h3>
  );
}

}
