import React, { Component } from 'react';
import { Container, Divider } from 'semantic-ui-react';
import { Card, Image } from 'semantic-ui-react'
import rqgLogo from 'utils/images/project-images/random-quote-generator.png'
import lpafLogo from 'utils/images/project-images/list-pagination-and-filtering.png'

class Projects extends Component {
  render() {
    return (
      <Container>
        <Container>
          <p>
            You can see all my projects and there code on &nbsp;
            <a href='https://github.com/anton415'>
              my GitHub profile.
            </a>
          </p>
          <p>For some of my projects, I have live version.</p>
        </Container>
        <Divider />
        <Card.Group>
          <Card>
            <Image
              src={rqgLogo}
              ui={false}
              href='http://serdyuchenko.com/random-quote-generator/'
            />
            <Card.Content>
              <Card.Header>Random quote generetor</Card.Header>
              <Card.Meta>
                <span className='date'>Since 24 May 2019</span>
              </Card.Meta>
              <Card.Description>
                A random quote generetor. First project from TreeHouse.
              </Card.Description>
            </Card.Content>
            <Card.Content extra textAlign='center'>
              <a href='https://github.com/anton415/random-quote-generator'>
                Source code
              </a>
            </Card.Content>
          </Card>
          <Card>
            <Image
              src={lpafLogo}
              ui={false}
              href='http://serdyuchenko.com/list-pagination-and-filtering/'
            />
            <Card.Content>
              <Card.Header>List pagination and filtering</Card.Header>
              <Card.Meta>
                <span className='date'>Since 5 June 2019</span>
              </Card.Meta>
              <Card.Description>
                List pagination and filtering. Second project from TreeHouse.
              </Card.Description>
            </Card.Content>
            <Card.Content extra textAlign='center'>
              <a href='https://github.com/anton415/list-pagination-and-filtering'>
                Source code
              </a>
            </Card.Content>
          </Card>
        </Card.Group>
      </Container>
    )
  }
}

export default Projects;
