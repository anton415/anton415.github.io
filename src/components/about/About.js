import React, { Component } from 'react';
import './About.css'
import Experience from './experience/Experience'
import Description from './description/Description'

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
