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
      desc: (
        <p>
          Mise en bourîches d'huîtres 
        </p>
      )
    },
    { 
      imageUrl: fraises, 
      title: "Fraises Le Bot",
      date: "Juin 2023",
      location: "Plougastel Daoulas - 29470, France",
      desc: (
        <p>
          Cueillette de fraises, peignage et effeuillage
        </p>
      )
    },
    { 
      imageUrl: bbn,
      title: "Moniteur de voile",
      date: "Eté 2023 & 2024",
      location: "Brest - 29200, France",
      desc: (
        <p>
          Accompagnement des stagiaires dans l'apprentissage de la voile et la découverte de l'environnement marin.
        </p>
      )
    },
    { 
      imageUrl: bbn, 
      title: "Entraîneur de voile",
      date: "Septembre 2023 - Aujourd'hui",
      location: "Brest- 29200, France",
      desc: (
        <p>
          Entraînement et suivi d'un groupe d'optimist, 2 fois par semaine et lors de compétitions régionales.
        </p>
      )
    }
  ];

  return (
    <main>
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
      
    </main>
  );
}
