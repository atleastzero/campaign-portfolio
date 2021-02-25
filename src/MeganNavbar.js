import React from "react"

import { Link } from "react-router-dom"

import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Row from "react-bootstrap/Row"

import miniLogo from "./atleastzero_logo_favicon.png"

import "./MeganNavbar.css"

function MeganNavbar(props) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand as={Link} to="/">
        <Container>
          <Row xs={2} className="text-right">
            <Col>
              <img
                alt="at least logo"
                src={miniLogo}
                width="70"
                height="70"
                className="d-inline-block align-top"
              />{' '}
            </Col>
            <Col>
              <span className="name">Megan O'Bryan</span>
            </Col>
            <Col>
              <small className="for">For Developer</small>
            </Col>
          </Row>
        </Container>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/Interests">Interests</Nav.Link>
          <Nav.Link as={Link} to="/Skills">Skills</Nav.Link>
          <Nav.Link as={Link} to="/Projects">Projects</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default MeganNavbar