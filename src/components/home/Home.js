import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import Description from '../about/Description'
import Experience from "../about/Experience";
import Skills from "../about/Skills";
import Education from "../about/Education";
import FAQ from "../about/FAQ";

class Home extends Component {
  render() {
    return (
      <Container className="home" text >
          <Description />
          <Skills />
          <Experience />
          <Education />
          <FAQ />
      </Container>
    )
  }
}

export default Home
