import React, { Component } from 'react'
import cbrLogo from 'utils/images/cbr-logo.svg'
import { Card, Item } from 'semantic-ui-react'

class Experience extends Component {

  render() {
    return (
      <Card centered fluid>
        <Card.Content header='Experience' />
        <Card.Content>
          <Item.Group>
            <Item>
              <Item.Image size='tiny' src={cbrLogo} />
              <Item.Content>
                <Item.Header>Full stack developer</Item.Header>
                <Item.Description>
                  <p>
                    Bank of Russia
                    <br />
                    Oct 2017 - Present
                    <br />
                    Moscow, Russia
                  </p>
                  <p>
                    Since October 2017, I work in set of tasks "Accounting for the
                    application of measures of influence to shareholders (participants)
                    of KO and other persons". As part of this complex, I perform the
                    role of junior full stack developer. In the part of the front end
                    of development technologies are used: JSP, JS, CSS. In the back
                    end part: Java. Database: Oracle 10. The application runs on the
                    IBM WebSphere portal. I actively propagated the need to use JUnit
                    test, as a result of which I was entrusted to start covering the
                    application with tests. Coverage tests led to improved quality of
                    written code and increased reliability of the application.
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

export default Experience
