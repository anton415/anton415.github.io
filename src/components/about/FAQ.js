import React, { Component } from 'react'
import {Accordion, Card, Icon} from 'semantic-ui-react'

export default class FAQ extends Component {
    state = {}

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }

    render() {
        const { activeIndex } = this.state

        return (
            <Card centered fluid>
                <Card.Content header='FAQ'/>
                <Card.Content>
                    <Accordion styled>
                        <Accordion.Title
                            active={activeIndex === 0}
                            index={0}
                            onClick={this.handleClick}
                        >
                            <Icon name='dropdown' />
                            Are you currently considering job offers?
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 0}>
                            No, I'm not considering job offers.
                        </Accordion.Content>

                        <Accordion.Title
                            active={activeIndex === 1}
                            index={1}
                            onClick={this.handleClick}
                        >
                            <Icon name='dropdown' />
                            When are you ready to consider job offers?
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 1}>
                            June 2022.
                        </Accordion.Content>

                        <Accordion.Title
                            active={activeIndex === 2}
                            index={2}
                            onClick={this.handleClick}
                        >
                            <Icon name='dropdown' />
                            What are your salary expectations?
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 2}>
                            3500$.
                        </Accordion.Content>
                    </Accordion>
                </Card.Content>
        </Card>
        )
    }
}