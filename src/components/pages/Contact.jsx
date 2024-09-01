import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Lottie from "lottie-react";
import animation from "../../animations/contact-animation.json";

export default function Contact() {
  return (
    <div id="banner">
    <main>
      
      <h1 className="text-center my-4">Contactez-moi</h1>
      <Container>
        <Row>
          <Col md={6} className="d-flex flex-column justify-content-center align-items-center">
            <p> Pour un premier contact, vous pouvez m'envoyer un email à l'adresse suivante:{" "} <a target="_blank" rel="noopener noreferrer" href="mailto:lou.simon.2287@gmail.com">   lou.simon.2287@gmail.com </a>
            </p>
            <p>
              Vous pouvez également m'envoyer un message via LinkedIn à l'adresse suivante:{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/lou-simon-8511a526a/"
              >
                https://www.linkedin.com/in/lou-simon-8511a526a/
              </a>
            </p>
          </Col>
          <Col md={6}>
            <div className="d-flex justify-content-center align-items-center">
              <Lottie animationData={animation} style={{ maxWidth: 400, width: '100%' }} />
            </div>
          </Col>
        </Row>
       
       
      </Container>
      
    </main>
    </div>
  );
}
