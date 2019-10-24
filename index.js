import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Notification from './Notification';

class App extends Component {

  constructor() {
    this.state = {
      notification : 5
      };
  }

  render() {
    return (
      <div>
        <Hello/>
        <Notification notification={this.state.notification}/>
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
