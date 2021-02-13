import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { Card, Image } from 'semantic-ui-react'
import russianKingPng from 'utils/images/project-images/russian-king.png'
import russianKingWebp from 'utils/images/project-images/russian-king.webp'

class Design extends Component {
  render() {
    return (
        <Container>
          <Card.Group>
            <Card>
              <Image
                  src={russianKingWebp}
                  srcSet={russianKingPng}
                  ui={false}
                  href='https://www.behance.net/gallery/91222359/Russian-King/'
              />
              <Card.Content>
                <Card.Header>Russian King</Card.Header>
                <Card.Description>
                  Final work of the UI / UX Design specialization by California Institute of the Arts on Coursera.
                  This project is a website for "Russian King" restaurant.
                </Card.Description>
              </Card.Content>
            </Card>
          </Card.Group>
        </Container>
    )
  }
}

export default Design;
