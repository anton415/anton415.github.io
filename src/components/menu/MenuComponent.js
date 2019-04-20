import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MenuComponent extends Component {

  render() {

    return (
      <nav className="menuComponent">
        <Link className="link" to="/">
            Home
        </Link>
        <Link className="link" to="/about/">
            About
        </Link>
      </nav>
    )
  }
}

export default MenuComponent
