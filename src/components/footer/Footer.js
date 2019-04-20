import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'

class Footer extends Component {
  render() {
    return (
      <footer className='footer'>
        <a href='https://www.linkedin.com/in/antonserdyuchenko/'>
          <Icon.Group size='big'>
            <Icon name='linkedin' />
          </Icon.Group>
        </a>

        <a href='https://github.com/anton415'>
          <Icon.Group size='big'>
            <Icon name='github' />
          </Icon.Group>
        </a>
      </footer>
    )
  }
}

export default Footer
