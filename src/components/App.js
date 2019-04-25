import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MenuComponent from './menu/MenuComponent'
import Home from './home/Home'
import About from './about/About'
import ReactGA from 'react-ga'

class App extends Component {
  render() {
    function initializeReactGA() {
      console.log('Initialize React GA.');
      ReactGA.initialize(process.env.secure.GOOGLE_ANALYTICS_ID)
      ReactGA.pageview('/')
    }

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
