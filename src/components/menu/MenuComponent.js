import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

class MenuComponent extends Component {
  state = {
    activeItem: 'home'
  }

  handleItemClick = (e, { name }) => {
    this.setState({
      activeItem: name
    })
  }

  render() {
    const { activeItem } = this.state
    return (
      <Menu inverted>
        <Menu.Item
          as={ Link }
          name='home'
          to='/'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={ Link }
          name='about'
          to='/about/'
          active={activeItem === 'about'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={ Link }
          name='projects'
          to='/projects/'
          active={activeItem === 'projects'}
          onClick={this.handleItemClick}
        />
      </Menu>

    )
  }
}

export default MenuComponent
