import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import anime from 'animejs';
import cata from '../../images/about/cata.jpg';
import laser from '../../images/about/medal_france.jpg';
import wing from '../../images/about/wing.jpg'

export default function About() {
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
      <main>
        <Container>
          <Row className="border-0 p-4 shadow-sm rounded-3 bg-light item my-4">
            <Col md={8} className='p-4 d-flex flex-column justify-content-center align-items-center'>
              <h3>Mes qualités</h3>
              <ul>
                <li><strong>Ponctuel</strong></li>
                <li><strong>Esprit d'équipe</strong></li>
                <li><strong>Curieux</strong></li>
                <li><strong>Volontaire</strong></li>
                <li><strong>Compétiteur</strong></li>
                <li><strong>Investi</strong></li>
              </ul>
            </Col>
            <Col md={4}>
              <img src={laser} alt="Image catamaran BBN" style={{ width: '100%' }} />
            </Col>
          </Row>
          <Row className="border-0 p-4 shadow-sm rounded-3 bg-light item my-4">
            <Col md={4}>
              <img src={cata} alt="Image catamaran BBN" style={{ width: '100%' }} />
            </Col>
            <Col md={8} className='p-4 d-flex flex-column justify-content-center align-items-center'>
              <h3>Bénévole engagé</h3>
              <p>
                En tant que <strong>bénévole</strong> au sein de <strong>Brest Bretagne Nautisme</strong>, j'apporte mon soutien à l'organisation et au bon déroulement d'<strong>événements nautiques</strong> de grande envergure, que ce soit au niveau <strong>régional</strong>, <strong>national</strong>, ou même <strong>international</strong>.
              </p>
            </Col>
          </Row>

          <Row className="border-0 p-4 shadow-sm rounded-3 bg-light item my-4">
            <Col md={8} className='p-4 d-flex flex-column justify-content-center align-items-center'>
              <h3>Mes passions</h3>
              <p>
                En dehors du bénévolat, je consacre une grande partie de mon temps libre aux <strong>sports nautiques</strong> tels que la <strong>planche à voile</strong>, le <strong>wingfoil</strong>, le <strong>surf</strong> et la <strong>navigation en bateau</strong>. Ma passion pour le milieu marin me pousse à aspirer à une carrière liée, de près ou de loin, à cet environnement.
              </p>
            </Col>
            <Col md={4}>
              <img src={wing} alt="Image catamaran BBN" style={{ width: '100%' }} />
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}
