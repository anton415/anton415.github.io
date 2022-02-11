import React, { Component } from 'react'
import AvatarJpg from 'utils/images/avatar.jpg'
import AvatarWebp from 'utils/images/avatar.webp'
import { Card, Item, Label, Icon } from 'semantic-ui-react'

class Description extends Component {
  render() {
    return (
      <Card centered fluid>
        <Card.Content>
          <Item.Group unstackable>
            <Item>
              <Item.Image size='tiny' src={AvatarWebp} srcSet={AvatarJpg}/>
              <Item.Content verticalAlign='middle'>
                <Item.Header>Anton Serdyuchenko</Item.Header>
                <Item.Meta>Java developer</Item.Meta>
                <Label color='red'>Not open to work</Label>
              </Item.Content>
            </Item>
          </Item.Group>
        </Card.Content>

        <Card.Content extra>
        <Item.Group>
          <Item>
            <Item.Content>
              <Item.Description>
                <Label size='mini'>
                  <a href='https://www.linkedin.com/in/antonserdyuchenko/'>
                    <Icon.Group size='big'>
                      <Icon name='linkedin' />
                    </Icon.Group>
                  </a>
                </Label>
                <Label size='mini'>
                  <a href='https://github.com/anton415'>
                    <Icon.Group size='big'>
                      <Icon name='github' />
                    </Icon.Group>
                  </a>
                </Label>
                <Label size='mini'>
                  <a href='https://stackoverflow.com/users/7037530/anton-serdyuchenko?tab=profile'>
                    <Icon.Group size='big'>
                      <Icon name='stack overflow' />
                    </Icon.Group>
                  </a>
                </Label>
                <Label size='mini'>
                  <a href='https://www.behance.net/anton415984f'>
                    <Icon.Group size='big'>
                      <Icon name='behance' />
                    </Icon.Group>
                  </a>
                </Label>
                <Label size='mini'>
                  <a href='https://www.instagram.com/antonserdyuchenko/'>
                    <Icon.Group size='big'>
                      <Icon name='instagram' />
                    </Icon.Group>
                  </a>
                </Label>
                <Label size='mini'>
                  <a href='https://www.facebook.com/anton4152'>
                    <Icon.Group size='big'>
                      <Icon name='facebook' />
                    </Icon.Group>
                  </a>
                </Label>
                <Label size='mini'>
                  <a href='https://t.me/antonserdyuchenko'>
                    <Icon.Group size='big'>
                      <Icon name='telegram' />
                    </Icon.Group>
                  </a>
                </Label>
                <Label size='mini'>
                  <a href='mailto:anton415@gmail.com'>
                    <Icon.Group size='big'>
                      <Icon name='mail' />
                    </Icon.Group>
                  </a>
                </Label>
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
