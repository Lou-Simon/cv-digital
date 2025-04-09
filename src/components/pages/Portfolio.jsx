import React, { useEffect } from 'react';
import ProjectDetails from '../ProjectDetails/ProjectDetails';
import { Container, Row, Col } from 'react-bootstrap';
import anime from 'animejs';


export default function Portfolio() {
  const projects = [
    { 
      title: "Application web de gestion de concours en ligne",
      status: "termine",
      href: "https://github.com/Lou-Simon/Olympix",
      languages: ['Html', 'Css', 'JavaScript', 'PHP', 'SQL'],
      devTools: ['VSCode', 'CodeIgniter', 'Gitlab'],
      frameworks: [ 'Bootstrap']
    },
    { 
      title: "Application de réservation de films",
      status: "termine",
      href: "https://github.com/Lou-Simon/PopCode",
      languages: ['Java'],
      devTools: ['Eclipse', 'Git'],
      frameworks: []
    },
    { 
      title: "Projet d'optimisation de placement d'antennes",
      status: "termine",
      href: "https://github.com/Lou-Simon/Antennes_OPL",
      languages: ['Java'],
      devTools: ['Eclipse', 'Git'],
      frameworks: []
    },
    { 
      title: "Projet d'une application PixelWar",
      status: "termine",
      href: "https://github.com/Lou-Simon/Popcode",
      languages: ['Java'],
      devTools: ['Eclipse', 'Git'],
      frameworks: []
    },
  ];
  useEffect(() => {
    anime({
      targets: '.item',
      opacity: [0,1],
      duration: 700,
      easing: 'easeInOutExpo',
      delay: anime.stagger(500)
    });
  }, []);
  return (
    <div id="banner">
      <main className="py-5">
        <Container>
          <h1 className="text-center my-5">Mes Projets</h1>
          <Row xs={1} md={2} className="d-flex justify-content-center align-items-center">
            {projects.map((project, index) => (
              <Col key={index} className="item">
                <ProjectDetails 
                  title={project.title}
                  status={project.status}
                  href={project.href}
                  languages={project.languages}
                  devTools={project.devTools}
                  frameworks={project.frameworks}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </main>
    </div>
  );
}
