import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as logic from './AppLogic';

class App extends Component {
  state = {
    content: 'sup'
  }
  update = () => {
    this.setState({
      content: logic.update(2, 5)
    })
  }
  render() {
    return (
      <div className="App">
        {this.state.content}
        <button onClick={this.update}>Update</button>
      </div>
    );
  }
}

export default App;
