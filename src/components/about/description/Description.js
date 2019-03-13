import React, { Component } from 'react'
import Avatar from 'utils/images/avatar.jpg'


class Description extends Component {
  render() {
    return (
      <div className="description">
        <div className="card">
          <div className='intro-avatar'>
            <img src={Avatar} alt='Avatar' />
          </div>

          <div className='intro-description'>
            <p className='my-name'>
              Hello, my name Anton Serdyuchenko.
            </p>
            <p>
              I looking for interesting project, where I can implement my front-end skills.
              I looking a project with stack: React, Redux, Git, Webpack, PWA.
            </p>
            <p>
              Right now, I work on position full stack developer in Central Bank.
              Maybe my full stack skills will be helpful for your project.
              Right now I use: JSP, JS, Java, Spring, Hibernate, SQL.
            </p>
          </div>

        </div>
      </div>
    );
  }
}

export default Description;
