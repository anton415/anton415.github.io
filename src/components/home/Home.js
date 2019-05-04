import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Description from '../about/Description'
import Footer from '../footer/Footer'
import CVShort from 'utils/pdf/SerdyuchenkoAN_CV_short_version.pdf'
import CVLong from 'utils/pdf/SerdyuchenkoAN_CV_long_version.pdf'
import { NavLink } from 'react-router-dom'
import { Container } from 'semantic-ui-react'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <main className='hello-words' role='main'>
          <Description />
          <Container textAlign='center'>
            <p>
              <br />
              You can download
              <NavLink
                to={CVShort}
                target='_blank'
                download='SerdyuchenkoAN'
                title='Download SerdyuchenkoAN.pdf CV short version'
                className='nav-link'
              >  short  </NavLink>
              or
              <NavLink
                to={CVLong}
                target='_blank'
                download='SerdyuchenkoAN'
                title='Download SerdyuchenkoAN.pdf CV long version'
                className='nav-link'
              > long </NavLink>
              version of my CV. And you can see more information in
              <Link to='/about/' title='Go to About page'> about page</Link>
              .
            </p>
          </Container>

        </main>
        <Footer />
      </div>
    )
  }
}

export default Home
