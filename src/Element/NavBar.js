import React from "react";
import { Navbar,Container,Nav,Dropdown, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

var BrandStyle1={
    color: '#00000',
    fontSize: '140%',
}

export const NavBar = ()=>{
    return(
    <Navbar bg="light" sticky="top"expand="md" variant="light">
        <Container fluid>
            <Navbar.Brand><babel style={BrandStyle1}>Salad Online Home</babel></Navbar.Brand>
            <Navbar.Collapse >
                <Nav className="me-auto" data-spy="affix">
                    <Nav.Link href="/" style={BrandStyle1}>statistic</Nav.Link>
                    <Nav.Link href="/" style={BrandStyle1}>state</Nav.Link>
                    <Nav.Link href="/" style={BrandStyle1}>basket</Nav.Link>
                    
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
}