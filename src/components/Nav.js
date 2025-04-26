import React from 'react';
import {
  Nav,
  Navbar,
  NavDropdown,
  Container,
} from 'react-bootstrap';
import './Nav.css';
import dent from '../assets/dent.png';

const Navs = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand>
          <img src={dent} title="Dentcity" id="dentist1" />
          <h1 id="text">DenTcity</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>

            <NavDropdown title="pages" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Login or register
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">about us</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">FAQs</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">
                make appointment
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Error 404</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Details</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="blog" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Details</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#home">contact us</Nav.Link>
            <Nav.Link href="#home">search</Nav.Link>
            <Nav.Link href="#home">
              <div id= "btn1">
                <button>
                  Appointment<span> > </span>
                </button>
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

};
export default Navs;
