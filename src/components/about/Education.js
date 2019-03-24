import React, { Component } from 'react'
import maiLogo from 'utils/images/mai-logo.svg'
import udacityLogo from 'utils/images/udacity-logo.svg'

class Education extends Component {
  render() {
    return (
      <div className="education section">
        <h3>Education</h3>
        <div className="card">
          <div className='education-logo'>
            <img className='logo' src={maiLogo} alt='Moscow Aviation Institute' />
          </div>
          <div className='companyDescription'>
            <h4>Bachelor, Applied Informatics</h4>
            <p>
              Moscow Aviation Institute
              <br />
              2011 - 2017
              <br />
              Moscow, Russia
            </p>
            <ul>
              <li>
                Participation in the 15th international conference "Aviation
                and Cosmonautics"
              </li>
              <li>
                Publication: "Application of neural network technologies for
                the evaluation of the performance of an aviation industry
                enterprise"
              </li>
              <li>
                Victory in the nomination "The Best Diploma Project INZHEKIN
                MAI-2017".
              </li>
              <li>
                The theme of the final qualifying work: "Automation of
                information processing for assessing the effectiveness of
                business processes in an aviation enterprise."
              </li>
            </ul>
          </div>
        </div>
        <div className="card">
          <div className='education-logo'>
            <img className='logo' src={udacityLogo} alt='Udacity' />
          </div>
          <div className='companyDescription'>
            <h4>Nanodegree, Front-End Web Developer</h4>
            <p>
              Udacity
              <br />
              2018
            </p>
            <ul>
              <li>
                Part 1. Web Foundations.
                I learned HTML, the foundational structure of all websites.
                Style with CSS and build my own personal portfolio website.
              </li>
              <li>
                Part 2. Web programming with JavaScript.
                I learned the JavaScript programming language. Start working
                with common developer tools, including the Git version control
                system.
              </li>
              <li>
                Part 3. Exploring JS - Objects, Tools and Testing.
                I learned about Accessibility, Object-Oriented JavaScript
                techniques, closures, the "this" keyword, and the new ES6
                specification.
              </li>
              <li>
                Part 4. Front-End Applications.
                I use APIs to fetch data for my applications. Begin building
                with Front End frameworks and build offline capable websites.
              </li>
              <li>
                Part 5. Building with React.
                I leveraged the power of the React UI library. Convert an
                existing application to use React and build my own single page
                React app that uses the Google Maps API.
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Education
