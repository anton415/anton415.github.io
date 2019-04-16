import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Description from '../about/Description'
import Footer from '../footer/Footer'
import CV from 'utils/pdf/Serdyuchenko.pdf'
import { NavLink } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Description />
        <br />
        <div className='hello-words'>
          You can
          <NavLink to={CV} target='_blank' className='nav-link'> download my CV </NavLink>
          or
          <Link to="/about/"> see more information</Link>.
        </div>
        <Footer />
      </div>
    )
  }
}

export default Home
