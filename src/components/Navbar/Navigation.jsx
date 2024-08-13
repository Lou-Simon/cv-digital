import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='fixed-top'>
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-brand-custom">
          Lou SIMON
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Accueil
            </Nav.Link>
            <Nav.Link as={Link} to="/skills">
              Compétences
            </Nav.Link>
            <Nav.Link as={Link} to="/experiences">
              Expériences
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="https://www.linkedin.com/in/lou-simon-8511a526a" target="_blank">
              <Button style={{ backgroundColor: '#0e76a8', borderColor: '#0e76a8' }}>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </Button>
            </Nav.Link>
            <Nav.Link href="mailto:lou.simon.2287@gmail.com" target="_blank">
              <Button style={{ backgroundColor: '#C71610', borderColor: '#C71610' }}>
                <FontAwesomeIcon icon={faEnvelope} />
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
