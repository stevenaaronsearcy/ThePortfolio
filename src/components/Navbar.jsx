import React from "react";
import {
  Container,
  Navbar,
  Nav,
} from "react-bootstrap";
import logo from "../assets/SSLogo.png"
import "./Navbar.css";

function NavigationBar() {
  return (
    <Navbar sticky="top" expand="lg" style={{}}>
      <Container>
        <a className="navbar-brand" href="/">
          <img className="myLogo" src={logo} alt="Steven's logo" />
        </a>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "auto" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About</Nav.Link>
            <Nav.Link href="#action3">Skills</Nav.Link>
            <Nav.Link href="#action4">Experience</Nav.Link>
            <Nav.Link href="#action5">Portfolio</Nav.Link>
            <Nav.Link href="#action6">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
