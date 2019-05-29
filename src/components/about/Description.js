import React, { Component } from 'react'
import Avatar from 'utils/images/avatar.jpg'
import { Card, Item } from 'semantic-ui-react'

class Description extends Component {
  render() {
    return (
      <Card centered fluid>
        <Card.Content header='Experience' />
        <Card.Content>
          <Item.Group>
            <Item>
              <Item.Image size='tiny' src={Avatar} />
              <Item.Content>
                <Item.Header>Hello, my name Anton Serdyuchenko.</Item.Header>
                <Item.Description>
                  <p>
                    I work as a Full stack developer at the Central Bank.
                    I use the following technologies: JSP, JS, Java, Spring, Hibernate, SQL, Git.
                  </p>
                  <p>
                    I independently study the following technologies: React, Redux, Webpack, PWA.
                  </p>
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Card.Content>
      </Card>
    )
  }
}

export default Description;
