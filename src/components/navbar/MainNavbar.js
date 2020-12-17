import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import '../../styles/main.scss';

const MainNavbar = () => {
    const location = useLocation();
    return (
        <Navbar id="navbar-container" expand="lg" variant="dark" sticky="top">
            <Navbar.Brand href="#home">NGUYEN HIEP</Navbar.Brand>
            <Navbar.Collapse id="navbar-collapse">
                <Nav activeKey={location.pathname} className="navbar-nav justify-content-end">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/paintings">Paintings</Nav.Link>
                    <Nav.Link href="/sculptures">Sculptures</Nav.Link>
                    <Nav.Link href="/books">Books</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Navbar.Toggle aria-controls="collapse-navbar-nav" />
        </Navbar>
    );
};
export default MainNavbar;