import React from "react";
import { Navbar,Container,Nav,NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

var BrandStyle1={
    color: '#61dafb',
    fontSize: '100%',
}
export const NavBar = ()=>{
    return(
    <Navbar bg="dark" sticky="top"expand="md">
        <Container fluid>
            <Navbar.Brand><babel style={BrandStyle1}>Salad Online</babel></Navbar.Brand>
            <Navbar.Collapse >
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
}