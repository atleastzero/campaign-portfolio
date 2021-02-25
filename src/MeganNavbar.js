import React from "react"

import { Link } from "react-router-dom"

import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

import miniLogo from "./atleastzero_logo_favicon.png"

import "./MeganNavbar.css"

function MeganNavbar(props) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand as={Link} to="/">
        <img
          alt="at least logo"
          src={miniLogo}
          width="70"
          height="70"
          className="d-inline-block align-top"
        />{' '}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            <div className="row">
              <span className="name col-12">Megan O'Bryan</span>
              <small className="for">For WebDev</small>
            </div>
          </Nav.Link>
        </Nav>
        <Nav>
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