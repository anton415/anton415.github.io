import React, { Component, Fragment } from 'react'
import { Router, Route, browserHistory } from 'react-router-dom'
import MenuComponent from './menu/MenuComponent'
import Home from './home/Home'
import About from './about/About'
import Projects from './projects/Projects'
import ReactGA from 'react-ga'

class App extends Component {

  componentWillMount = () => {
    console.log('url: ', process.env.PUBLIC_URL);
    ReactGA.initialize(process.env.REACT_APP_SECRET)
    ReactGA.pageview('/')
  }

  render() {
    return (
      <Router history={browserHistory}>
        <Fragment>
          <MenuComponent />
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/projects' component={Projects} />
        </Fragment>
      </Router>
    )
  }
}

export default App
