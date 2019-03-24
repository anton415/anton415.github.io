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
              I looking for interesting project, where I can implement my front-end skills.
              I looking a project with stack: React, Redux, Git, Webpack, PWA.
            </p>
            <p>
              Right now, I work on position full stack developer in Central Bank.
              Maybe my full stack skills will be helpful for your project.
              Right now I using: JSP, JS, Java, Spring, Hibernate, SQL.
            </p>
          </div>

      </div>
    );
  }
}

export default Description;
