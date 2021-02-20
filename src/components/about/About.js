import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import Experience from './Experience'
import Description from './Description'
import Skills from './Skills'
import Education from './Education'

class About extends Component {
  render() {
    return (
      <Container text className="about">
        <Description />
        <Experience />
        <Skills />
        <Education />
      </Container>
    )
  }
}

export default About;
