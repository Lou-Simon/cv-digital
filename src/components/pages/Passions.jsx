import React, { useEffect } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import img_voile_compet from '../../images/passions/voile_competition.jpg';
import img_bbn from '../../images/passions/logo-bbn.png';
import img_wing from '../../images/passions/wing.jpg'
import anime from 'animejs';

export default function Passions() {

  useEffect(() => {
    anime({
      targets: '.section',
      opacity: [0,1],
      translateX: [-3000, 0],
      duration: 3000,
      delay: anime.stagger(500)
    });
  }, []);

  return (
    <main>
      <Container className="py-5">
        <h1 className="mb-5 text-center">Mes passions</h1>

        <section className="mb-5 section">
          <Row className="align-items-center">
            <Col md={6} className="mb-4 mb-md-0">
              <img src={img_voile_compet} alt="Voile en compétition" className="img-fluid rounded shadow" />
            </Col>
            <Col md={6}>
              <h4 className="text-primary mb-3">Voile en compétition</h4>
              <p>Depuis l'âge de 8 ans, je pratique la voile en compétition. Plus qu'un sport, cette passion m'a permis de développer des qualités telles que l'esprit d'équipe, le goût de l'effort, l'esprit de compétition et d'autres valeurs véhiculées par le sport.</p>
              <p>Grâce à ma persévérance, j'ai atteint un niveau qui m'a permis de participer à des compétitions régionales, nationales et internationales.</p>
              <p>En 2019, j'ai intégré le Pôle Espoir Voile à Brest, où j'ai combiné études et voile. J'ai pratiqué de manière intensive le laser avec 3 à 4 entraînements hebdomadaires, en plus des entraînements physiques.</p>
              <p>Maintenant, j'entraîne un groupe de jeunes au club de Brest Bretagne Nautisme, les préparant pour des compétitions régionales et nationales.</p>
            </Col>
          </Row>
        </section>

        <section className="mb-5 section">
          <Row className="align-items-center">
            <Col md={6} className="order-md-2 mb-4 mb-md-0">
              <img src={img_bbn} alt="Bénévolat en voile" className="img-fluid rounded shadow" />
            </Col>
            <Col md={6} className="order-md-1">
              <h4 className="text-primary mb-3">Bénévole</h4>
              <p>Depuis 2018, je consacre une partie de mes week-ends au service de mon club de voile, aidant à l'organisation d'événements sportifs.</p>
            </Col>
          </Row>
        </section>

        <section className='section'>
          <Row className="align-items-center">
            <Col md={6} className="mb-4 mb-md-0">
              <img src={img_wing} alt="Wingfoil" className="img-fluid rounded shadow" />
            </Col>
            <Col md={6}>
              <h4 className="text-primary mb-3">Sports nautiques</h4>
              <p>Je pratique également divers sports nautiques tels que le wingfoil, le surf, la planche à voile, entre autres.</p>
            </Col>
          </Row>
        </section>

      </Container>
    </main>
  );
}
