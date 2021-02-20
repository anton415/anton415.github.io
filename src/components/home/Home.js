import React, { Component } from 'react'
import { Container, Segment } from 'semantic-ui-react'
import Description from '../about/Description'
import DownloadPdf from "../about/DownloadPdf";

class Home extends Component {
  render() {
    return (
      <Container className="Home">
        <Segment inverted textAlign='center' color='red'>The page is under construction.</Segment>
        <Description />
        <DownloadPdf />
      </Container>
    )
  }
}

export default Home
