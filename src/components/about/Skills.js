import React, { Component } from 'react'
import { Card, Label } from 'semantic-ui-react'

class Skills extends Component {
  render() {
    const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'React Native', 'Git', 'PWA', 'Java', 'SQL']

    return (
      <Card fluid centered>
        <Card.Content header='Skills' />
        <Card.Content>
          {skills.map(skill => (
            <Label key={skill} size='medium'>
              {skill}
            </Label>
          ))}
        </Card.Content>
      </Card>
    )
  }
}

export default Skills
