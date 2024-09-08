<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4cdb3a9bb91c8646e60afdc595969589b4b944a9
import React, { useEffect } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';

import CardExp from '../CardExp/CardExp';

import huitres from '../../images/experiences/huitre-le-gall.jpg'
import fraises from '../../images/experiences/fraises-le-bot.jpeg'
import bbn from '../../images/experiences/bbn.png'

import anime from 'animejs';


export default function Experiences() {

  useEffect(() => {
    anime({
      targets: '.card',
      opacity: [0,1],
      translateX: [-3000, 0],
      duration: 3000,
      delay: anime.stagger(500)
    });
  }, []);

  const exp = [
    { 
      imageUrl: huitres, 
      title: "Huîtres Le Gall",
      date: "Décembre 2022",
      location: "Plougastel Daoulas - 29470, France",
<<<<<<< HEAD
=======
=======
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
>>>>>>> origin/master
>>>>>>> 4cdb3a9bb91c8646e60afdc595969589b4b944a9
      desc: (
        <p>
          Mise en bourîches d'huîtres 
        </p>
      )
    },
    { 
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4cdb3a9bb91c8646e60afdc595969589b4b944a9
      imageUrl: fraises, 
      title: "Fraises Le Bot",
      date: "Juin 2023",
      location: "Plougastel Daoulas - 29470, France",
<<<<<<< HEAD
=======
=======
      title: "Fraises Le Bot",
      date: "Juin 2023",
>>>>>>> origin/master
>>>>>>> 4cdb3a9bb91c8646e60afdc595969589b4b944a9
      desc: (
        <p>
          Cueillette de fraises, peignage et effeuillage
        </p>
      )
    },
    { 
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4cdb3a9bb91c8646e60afdc595969589b4b944a9
      imageUrl: bbn,
      title: "Moniteur de voile",
      date: "Eté 2023 & 2024",
      location: "Brest - 29200, France",
<<<<<<< HEAD
=======
=======
      title: "Moniteur de voile",
      date: "Août 2023 & Juin à Août 2024",
>>>>>>> origin/master
>>>>>>> 4cdb3a9bb91c8646e60afdc595969589b4b944a9
      desc: (
        <p>
          Accompagnement des stagiaires dans l'apprentissage de la voile et la découverte de l'environnement marin.
        </p>
      )
    },
    { 
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4cdb3a9bb91c8646e60afdc595969589b4b944a9
      imageUrl: bbn, 
      title: "Entraîneur de voile",
      date: "Septembre 2023 - Aujourd'hui",
      location: "Brest- 29200, France",
<<<<<<< HEAD
=======
=======
      title: "Entraîneur de voile",
      date: "Septembre 2023 - Juin 2024",
>>>>>>> origin/master
>>>>>>> 4cdb3a9bb91c8646e60afdc595969589b4b944a9
      desc: (
        <p>
          Entraînement et suivi d'un groupe d'optimist, 2 fois par semaine et lors de compétitions régionales.
        </p>
      )
    }
  ];

  return (
    <main>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4cdb3a9bb91c8646e60afdc595969589b4b944a9
      <Container>
      <h1 className='mb-4'>Mes expériences professionnelles</h1>

      <Alert variant="warning">
          Je n'ai pas encore d'expériences professionnelles dans le domaine de l'informatique.
        </Alert>
      <Row xs={1} md={2} className='g-4'>
            {exp.map((exp, index) => (
              <Col key={index}>
                <CardExp
                  className="card"
                  eventKey={index.toString()}
                  title={exp.title}
                  desc={exp.desc}
                  date={exp.date}
                  location={exp.location}
                  imageUrl={exp.imageUrl}
                />
              </Col>
            ))}
        </Row>
      </Container>
      
<<<<<<< HEAD
=======
=======
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
>>>>>>> origin/master
>>>>>>> 4cdb3a9bb91c8646e60afdc595969589b4b944a9
    </main>
  );
}
