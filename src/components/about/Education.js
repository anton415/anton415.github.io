import React, { Component } from 'react'
import maiLogo from 'utils/images/mai-logo.svg'
import {Card, Image} from 'semantic-ui-react'

class Education extends Component {
  render() {
    return (
      <Card centered fluid>
        <Card.Content header='Education' />
        <Card.Group centered  itemsPerRow={1}>
          <Card>
            <Card.Content>
              <a href='https://en.mai.ru/'>
                <Image floated='left' size='tiny' src={maiLogo}/>
              </a>
              <Card.Header>Master, Economic Security Management</Card.Header>
              <Card.Meta>Moscow Aviation Institute <br/> 2020 - 2022</Card.Meta>
            </Card.Content>
            <Card.Content>
              <Card.Description>
                The main goal of this program is to study the theoretical foundations of economic security
                management in an organization and to master practical tools and methods of work in this area of
                management.
              </Card.Description>
            </Card.Content>
          </Card>

          <Card>
            <Card.Content>
              <a href='https://en.mai.ru/'>
                <Image floated='left' size='tiny' src={maiLogo}/>
              </a>
              <Card.Header>Bachelor, Applied Informatics</Card.Header>
              <Card.Meta>Moscow Aviation Institute <br/> 2011 - 2017</Card.Meta>
            </Card.Content>
            <Card.Content>
              <Card.Description>
                          <ul>
                            <li>
                              Participation in the 15th international conference "Aviation
                              and Cosmonautics".
                            </li>
                            <li>
                              Publication: "Application of neural network technologies for
                              the evaluation of the performance of an aviation industry
                              enterprise".
                            </li>
                            <li>
                              The theme of the final qualifying work: "Automation of
                              information processing for assessing the effectiveness of
                              business processes in an aviation enterprise".
                            </li>
                          </ul>
              </Card.Description>
            </Card.Content>
          </Card>
        </Card.Group>
      </Card>
    )
  }
}

export default Education
