import React, { Component } from 'react';
import cbrLogo from 'utils/images/cbr-logo.svg'

class Experience extends Component {

  render() {
    // TODO: Add period of work experience.
    return (
      <div className="experience">
        <h3>Experience</h3>
        <div className="job card">
          <div className='company-logo'>
            <img src={cbrLogo} alt='Bank of Russia' />
          </div>
          <div className='company-description'>
            <h4>Full stack developer</h4>
            <p>
              Bank of Russia
              <br />
              Oct 2017 - Present
              <br />
              Moscow, Russia
            </p>
            <p>
              Since ctober 2017, I work in set of tasks "Accounting for the
              application of measures of influence to shareholders (participants)
              of KO and other persons". As part of this complex, I perform the
              role of junior full stack developer. In the part of the front end
              of development technologies are used: JSP, JS, CSS. In the back
              end part: Java. Database: Oracle 10. The application runs on the
              IBM WebSphere portal. I actively propagated the need to use JUnit
              test, as a result of which I was entrusted to start covering the
              application with tests. Coverage tests led to improved quality of
              written code and increased reliability of the application.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Experience;
