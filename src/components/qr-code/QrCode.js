import React, { Component } from 'react';
import {Card, Container} from 'semantic-ui-react'
import QRCode from 'react-qr-code';

class QrCode extends Component {
    render() {
        return (
            <Container className="qr-code">
                <Card centered>
                    <Card.Content>
                        <QRCode value="https://serdyuchenko.com" />
                    </Card.Content>
                </Card>
            </Container>
        )
    }
}

export default QrCode;
