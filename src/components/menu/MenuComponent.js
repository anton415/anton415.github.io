import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MenuComponent extends Component {

  render() {

    return (
      <div className="menuComponent">
        <Link className="link" to="/">
            Home
        </Link>
        <Link className="link" to="/about/">
            About
        </Link>
      </div>
    )
  }
}

export default MenuComponent
