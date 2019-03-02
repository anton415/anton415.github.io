import React, { Component } from 'react';
import './Menu.css'

class Menu extends Component {
  render() {
    return (
      <div className="Menu">
        <ul>
          <li><a class="active" href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
      </div>
    );
  }
}

export default Menu;
