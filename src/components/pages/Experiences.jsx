import React from 'react';
import { Container, Accordion, Col, Row } from 'react-bootstrap';
import AccordionItemExp from '../AccordionItem/AccordionItemExp';
import Alert from 'react-bootstrap/Alert';
import Lottie from "lottie-react";
import animation from "../../animations/skills-animation.json";


export default function Experiences() {
  const exp = [
    { 
      title: "Huîtres Le Gall",
      date: "Décembre 2022",
      desc: (
        <p>
          Mise en bourîches d'huîtres 
        </p>
      )
    },
    { 
      title: "Fraises Le Bot",
      date: "Juin 2023",
      desc: (
        <p>
          Cueillette de fraises, peignage et effeuillage
        </p>
      )
    },
    { 
      title: "Moniteur de voile",
      date: "Août 2023 & Juin à Août 2024",
      desc: (
        <p>
          Accompagnement des stagiaires dans l'apprentissage de la voile et la découverte de l'environnement marin.
        </p>
      )
    },
    { 
      title: "Entraîneur de voile",
      date: "Septembre 2023 - Juin 2024",
      desc: (
        <p>
          Entraînement et suivi d'un groupe d'optimist, 2 fois par semaine et lors de compétitions régionales.
        </p>
      )
    }
  ];

  return (
    <main>
      <div id="banner"></div>
      <Container>
        <Row>
          <Col md={6} className="d-flex flex-column justify-content-center align-items-center">
            <h1 className="mb-4">Expériences professionnelles</h1>
          </Col>
          <Col md={6} className="d-flex flex-column justify-content-center align-items-center">
            <div className="d-flex justify-content-center align-items-center">
              <Lottie animationData={animation} style={{ maxWidth: 400, width: '100%' }} />
            </div>
          </Col>
          
        </Row>
        <Accordion className='mb-5'>
          {exp.map((exp, index) => (
            <AccordionItemExp 
              key={index}
              eventKey={index.toString()}
              title={exp.title}
              desc={exp.desc}
              date={exp.date} // Pass the date here
            />
          ))}
        </Accordion>
        <Alert variant="warning">
          Je n'ai pas encore d'expériences professionnelles dans le domaine de l'informatique.
        </Alert>
      </Container>
    </main>
  );
}
