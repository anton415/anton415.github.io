import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Menu from './menu/Menu';
import Home from './home/Home';
import About from './about/About'

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Menu />
          <Route exact path="/" component={Home} />
          <Route path="/about/" component={About} />
        </Fragment>
      </Router>

    );
  }
}

export default App;
