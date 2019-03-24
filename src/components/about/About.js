import React, { Component } from 'react';
import Experience from './Experience'
import Description from './Description'
import Skills from './Skills'
import Education from './Education'

class About extends Component {
  render() {
    return (
      <div className="about">
        <Description />
        <Experience />
        <Skills />
        <Education />
      </div>
    )
  }
}

export default About;
