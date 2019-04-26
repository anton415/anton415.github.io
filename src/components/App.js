import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MenuComponent from './menu/MenuComponent'
import Home from './home/Home'
import About from './about/About'
import ReactGA from 'react-ga'

class App extends Component {

  componentWillMount = () => {
    console.log('Initialize React GA.');
    console.log('GOOGLE_ANALYTICS_ID: ', process.env.REACT_APP_SECRET);
    ReactGA.initialize(process.env.REACT_APP_SECRET)
    ReactGA.pageview('/')
  }

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
