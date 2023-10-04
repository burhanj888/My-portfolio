// ConnectWithMe.js

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './Connect.css';

const ConnectWithMe = () => {
    return (
        <Container fluid className="connect-with-me-section">
            <Row className="justify-content-center text-center">
                <Col xs={12} md={8}>
                    <h1 className="connect-header">Let's Create Something Together</h1>
                    <p className="connect-subheader">Feel free to connect with me on social media.</p>
                </Col>
            </Row>
            <Row className="justify-content-center text-center social-links">
            <Col xs={12} sm={4} md={2}>
                    <a href="mailto: burhanj888@gmail.com" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-envelope"></i>
                        <p className="social-text">Email</p>
                    </a>
                </Col>
                <Col xs={12} sm={4} md={2}>
                    <a href="https://github.com/burhanj888" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-github"></i>
                        <p className="social-text">GitHub</p>
                    </a>
                </Col>
                <Col xs={12} sm={4} md={2}>
                    <a href="https://www.linkedin.com/in/burhanuddin-jinwala/" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-linkedin"></i>
                        <p className="social-text">LinkedIn</p>
                    </a>
                </Col>
                <Col xs={12} sm={4} md={2}>
                    <a href="https://twitter.com/burhanj888" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-twitter"></i>
                        <p className="social-text">Twitter</p>
                    </a>
                </Col>
            </Row>
        </Container>
    );
}

export default ConnectWithMe;
