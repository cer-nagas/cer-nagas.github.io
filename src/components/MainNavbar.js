import React from 'react';
import '../styles/navbar.scss';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';

const MainNavbar=() => {
    return (
        <Navbar className="navbar" bg="dark" expand="lg" sticky="top" variant="dark">
        <Col>
            <Navbar.Brand href="#home">Nguyen Hiep</Navbar.Brand>
        </Col>
        <Col xs={10}>
            <Navbar.Collapse id="collapse-navbar-nav">
                <Nav className="navbar-nav justify-content-center">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Paintings</Nav.Link>
                    <Nav.Link href="#link">Wood</Nav.Link>
                    <Nav.Link href="#link">Stone</Nav.Link>
                    <Nav.Link href="#link">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Col>
        <Col>
            <Navbar.Toggle aria-controls="collapse-navbar-nav" />
        </Col>
        </Navbar>
    );
};
export default MainNavbar;