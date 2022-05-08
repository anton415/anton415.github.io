import React, { Component } from 'react'
import cbrLogo from 'utils/images/cbr-logo.svg'
import { Card, Image } from 'semantic-ui-react'

class Experience extends Component {

  render() {
    return (
        <Card centered fluid>
          <Card.Content header='Experience'/>
          <Card.Group centered  itemsPerRow={1}>
            <Card>
              <Card.Content>
                <a href='https://www.cbr.ru/eng/'>
                  <Image floated='left' size='tiny' src={cbrLogo}/>
                </a>
                <Card.Header>Java developer</Card.Header>
                <Card.Meta>Bank of Russia <br/> Dec 2019 – Present</Card.Meta>
              </Card.Content>
              <Card.Content>
                <Card.Description>
                  I am working on creating the banking platform as part of the implementation of the IT
                  Strategy of the Bank of Russia. My responsibilities include the implementation of forms according to
                  layouts from Figma, creating new components based on Vaadin and editing component styles.
                </Card.Description>
              </Card.Content>
            </Card>

            <Card>
              <Card.Content>
                <a href='https://www.cbr.ru/eng/'>
                  <Image floated='left' size='tiny' src={cbrLogo}/>
                </a>
                <Card.Header>Junior Java developer </Card.Header>
                <Card.Meta>Bank of Russia <br/> Oct 2017 – Dec 2019</Card.Meta>
              </Card.Content>
              <Card.Content>
                <Card.Description>
                  I work in set of tasks "Accounting for the application of measures of influence on shareholders
                  (participants) of KO and other persons". As part of this complex, I perform the role of a junior java
                  developer. In the part of the front end of development technologies are used: CSS, JavaScript, JSP.
                  I actively propagated the need to use JUnit tests, and I was entrusted to start covering the
                  application with tests, thereby increasing the reliability of the application.
                </Card.Description>
              </Card.Content>
            </Card>
          </Card.Group>
        </Card>
    )
  }
}

export default Experience
