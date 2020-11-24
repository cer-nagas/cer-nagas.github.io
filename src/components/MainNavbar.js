import React from 'react';
import '../styles/navbar.scss';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';

const MainNavbar=() => {
    return (
        <Navbar className="navbar" bg="dark" expand="lg" sticky="top" variant="dark">
            <Navbar.Brand href="#home">NGUYEN HIEP</Navbar.Brand>
            <Navbar.Collapse id="navbar-collapse">
                <Nav className="navbar-nav justify-content-end">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#paintings">Paintings</Nav.Link>
                    <Nav.Link href="#sculptures">Sculptures</Nav.Link>
                    <Nav.Link href="#books">Books</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Navbar.Toggle aria-controls="collapse-navbar-nav" />
        </Navbar>
    );
};
export default MainNavbar;