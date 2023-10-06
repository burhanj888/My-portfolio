// StickyNavbar.js

import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-scroll';
import './StickyNavbar.css';

function StickyNavbar() {
    const scrollTo = (componentId) => {
        document.getElementById(componentId).scrollIntoView({ behavior: "smooth" });
      };
    return (
        <Navbar expand="lg" sticky="top" className="navbar">
            <Container>
            <Navbar.Brand href="#" className="navbar-brand">My Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="navbar-center">
                        <Button onClick={() => scrollTo("about-me")} className="nav-link">About Me</Button>
                        <Button onClick={() => scrollTo("work-ex")} className="nav-link">Work Experience</Button>
                        <Button onClick={() => scrollTo("projects")} className="nav-link">Projects</Button>
                        <Button onClick={() => scrollTo("blogs")} className="nav-link">Blogs</Button>
                        {/* <Link activeClass="active" to="connect" onClick={() => scrollTo("componentOne")} className="nav-link" href="#">Connect with Me</Link> */}
                    </Nav>
                </Navbar.Collapse>
                
                
            </Container>
        </Navbar>
    );
}

export default StickyNavbar;
