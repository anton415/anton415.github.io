import React, { Component } from 'react'
import { Card, Label } from 'semantic-ui-react'

class Skills extends Component {
  render() {
    const skills = ['Java', 'CSS', 'JavaScript', 'React', 'Git', 'SQL', 'Figma']

    return (
      <Card fluid centered>
        <Card.Content header='Skills' />
        <Card.Content>
          {skills.map(skill => (
            <Label key={skill} size='tiny'>
              {skill}
            </Label>
          ))}
        </Card.Content>
      </Card>
    )
  }
}

export default Skills
