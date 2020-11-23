import React from 'react';
import '../styles/navbar.scss';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

const MainNavbar=() => {
    return (
        <Navbar bg="dark" expand="lg" sticky="top" variant="dark">
            <Navbar.Brand href="#home">Nguyen Hiep</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Paintings</Nav.Link>
                <Nav.Link href="#link">Wood</Nav.Link>
                <Nav.Link href="#link">Stone</Nav.Link>
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
};
export default MainNavbar;