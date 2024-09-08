<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
=======
<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
=======
import React from 'react';
import { Link } from 'react-router-dom';
>>>>>>> origin/master
>>>>>>> 4cdb3a9bb91c8646e60afdc595969589b4b944a9
import { Navbar, Nav, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Navigation() {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4cdb3a9bb91c8646e60afdc595969589b4b944a9
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setExpanded(false);
  }, [location]);

  return (
    <Navbar expanded={expanded} expand="lg" bg="light" variant="light" className='fixed-top'>
<<<<<<< HEAD
=======
=======
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='fixed-top'>
>>>>>>> origin/master
>>>>>>> 4cdb3a9bb91c8646e60afdc595969589b4b944a9
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-brand-custom">
          Lou SIMON
        </Navbar.Brand>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4cdb3a9bb91c8646e60afdc595969589b4b944a9
        <Navbar.Toggle 
          aria-controls="responsive-navbar-nav" 
          onClick={() => setExpanded(expanded ? false : true)}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>
              Accueil
            </Nav.Link>
            <Nav.Link as={Link} to="/skills" onClick={() => setExpanded(false)}>
              Compétences
            </Nav.Link>
            <Nav.Link as={Link} to="/experiences" onClick={() => setExpanded(false)}>
              Expériences
            </Nav.Link>
            <Nav.Link as={Link} to="/courses" onClick={() => setExpanded(false)}>
              Formations
            </Nav.Link>
            <Nav.Link as={Link} to="/passions" onClick={() => setExpanded(false)}>
              Passions
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" onClick={() => setExpanded(false)}>
<<<<<<< HEAD
=======
=======
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
>>>>>>> origin/master
>>>>>>> 4cdb3a9bb91c8646e60afdc595969589b4b944a9
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