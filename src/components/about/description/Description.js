import React, { Component } from 'react'
import Avatar from 'utils/images/avatar.jpg'


class Description extends Component {
  render() {
    return (
      <div className="description">
        <div className="card">
          <img src={Avatar} alt="Avatar" />

          Hello, my name Anton Serdyuchenko.
          I looking for interesting project, where I can implement my front end skills.
          I looking a project with stack: React, Redux, Git, Webpack, PWA.
          <br />
          Right now, I work on position full stack developer in Central Bank.
          Maybe my full stack skills will be helpful for your project.
          Right now I use: JSP, JS, Java, Spring, Hibernate, SQL.
        </div>
      </div>
    );
  }
}

export default Description;
