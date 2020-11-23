import React from 'react';
import '../styles/navbar.scss';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';

const MainNavbar=() => {
    return (
        <Navbar className="navbar" bg="dark" expand="lg" sticky="top" variant="dark">
            <Navbar.Brand href="#home">Nguyen Hiep</Navbar.Brand>
            <Navbar.Collapse id="collapse-navbar-nav">
                <Nav className="navbar-nav justify-content-center">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Paintings</Nav.Link>
                    <Nav.Link href="#link">Sculptures</Nav.Link>
                    <Nav.Link href="#link">Books</Nav.Link>
                    <Nav.Link href="#link">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Navbar.Toggle aria-controls="collapse-navbar-nav" />
        </Navbar>
    );
};
export default MainNavbar;