import React, { Component } from 'react';
import Menu from './menu/Menu'
import Home from './home/Home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Home />
      </div>
    );
  }
}

export default App;
