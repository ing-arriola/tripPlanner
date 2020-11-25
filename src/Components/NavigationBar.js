import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar variant="dark" expand="lg" fixed="top">
      <Container>
        <Nav.Link className="navbar-brand cursor nav-link" href="home-section">
          TravelWiser
        </Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto ">
            <Nav.Link href="/">Search</Nav.Link>

            <Nav.Link href="/about">Find destination</Nav.Link>
            <Nav.Link href="/Services">Blog</Nav.Link>
            <Nav.Link href="/blog">Community</Nav.Link>
            <Nav.Link href="/contact">John Doe</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
//className="nav-link"
