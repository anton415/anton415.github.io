import React, { Component } from 'react'
import Avatar from 'utils/images/avatar.jpg'


class Description extends Component {
  render() {
    return (
      <div className="description card section" style={styles.description}>
          <div className='introAvatar' style={styles.introAvatar}>
            <img className='avatar' src={Avatar} alt='Avatar' style={styles.avatar}/>
          </div>

          <div className='introDescription' style={styles.introDescription}>
            <h3 className='helloWords' style={styles.helloWords}>
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
    )
  }
}

const styles = {
  description: {
    display: 'flex',
    padding: 'inherit',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    transition: '0.3s'
  },
  introAvatar: {
    margin: '1%'
  },
  avatar: {
    borderRadius: '50%',
    width: '100px'
  },
  introDescription: {
    margin: 'auto',
    textAlign: '-webkit-center'
  },
  helloWords: {
    textAlign: 'center'
  }
}

export default Description;
