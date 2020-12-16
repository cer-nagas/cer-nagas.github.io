import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../styles/navbar.scss';

const MainNavbar=() => {
    // Exercise 1.1: Change line 8
    return (
        <Navbar id="navbar-container" expand="lg" variant="dark">
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