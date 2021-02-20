import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import {Link, NavLink} from "react-router-dom";
import CVShort from "../../utils/pdf/SerdyuchenkoAN_CV_short_version.pdf";
import CVLong from "../../utils/pdf/SerdyuchenkoAN_CV_long_version.pdf";

class DownloadPdf extends Component {

    render() {
        return (
            <Container text>
                You can download
                <NavLink
                    to={CVShort}
                    target='_blank'
                    download='SerdyuchenkoAN'
                    title='Download SerdyuchenkoAN.pdf CV short version'
                    className='nav-link'
                >  short  </NavLink>
                or
                <NavLink
                    to={CVLong}
                    target='_blank'
                    download='SerdyuchenkoAN'
                    title='Download SerdyuchenkoAN.pdf CV long version'
                    className='nav-link'
                > long </NavLink>
                version of my CV. And you can see more information in
                <Link to='/about/' title='Go to About page'> about page</Link>
                .
            </Container>
        )
    }
}

export default DownloadPdf
