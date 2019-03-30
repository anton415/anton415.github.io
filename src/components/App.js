import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MenuComponent from './menu/MenuComponent'
import Home from './home/Home'
import About from './about/About'

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <MenuComponent />
          <Route exact path="/" component={Home} />
          <Route path="/about/" component={About} />
        </Fragment>
      </Router>
    )
  }
}

export default App
