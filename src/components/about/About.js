import React, { Component } from 'react';
import Experience from './Experience'
import Description from './Description'

class About extends Component {
  render() {
    return (
      <div className="about">
        <Description />
        <Experience />
      </div>
    );
  }
}

export default About;
