import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class MenuComponent extends Component {

  render() {

    return (
      <nav className="menuComponent" style={styles.menuComponent}>
        <Link className="link" to="/" style={styles.link}>
            Home
        </Link>
        <Link className="link" to="/about/" style={styles.link}>
            About
        </Link>
      </nav>
    )
  }
}

const styles = {
  menuComponent: {
    backgroundColor: '#333',
    display: 'flex',
    listStyleType: 'none',
    margin: 0,
    overflow: 'hidden',
    padding: 0
  },
  link: {
    color: 'white',
    display: 'block',
    padding: '14px 16px',
    textAlign: 'center',
    textDecoration: 'none'
  }
}

export default MenuComponent
