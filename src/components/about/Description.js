import React, { Component } from 'react'
import Avatar from 'utils/images/avatar.jpg'


class Description extends Component {
  render() {
    return (
      <div className="description card section">
          <div className='intro-avatar'>
            <img className='avatar' src={Avatar} alt='Avatar' />
          </div>

          <div className='intro-description'>
            <h3 className='hello-words'>
              Hello, my name Anton Serdyuchenko.
            </h3>
            <p>
              I work as a Full stack developer at the Central Bank. 
              I use the following technologies: JSP, JS, Java, Spring, Hibernate, SQL, Git.
            </p>
            <p>
              I independently study the following technologies: React, Redux, Webpack, PWA.
            </p>
          </div>

      </div>
    );
  }
}

export default Description;
