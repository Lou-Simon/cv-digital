import React, { useEffect } from 'react';
import { Container, Col, Row, ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faCalendarAlt, faSailboat, faCar, faShip } from '@fortawesome/free-solid-svg-icons';
import anime from 'animejs';

export default function Courses() {
  useEffect(() => {
    anime({
      targets: '.item',
      opacity: [0,1],
      translateX: [-3000, 0],
      duration: 3000,
      delay: anime.stagger(500)
    });
  }, []);
  return (

    

    <main>
      <Container className="py-5">
        <h1 className="mb-5 text-center">Formations effectuées</h1>
        <Row className="gy-4">
          <Col md={6}>
            <ListGroup.Item className="border-0 p-4 shadow-sm rounded-3 bg-light item">
              <h3 className="mb-3">
                <FontAwesomeIcon icon={faGraduationCap} className="me-2 text-primary" />
                <strong>Lycée La Pérouse Kerichen, Brest</strong>
              </h3>
              <div className="text-muted mb-2">
                <FontAwesomeIcon icon={faCalendarAlt} className="me-2" />
                Septembre 2019 - Juin 2022
              </div>
              <p>Cursus sportif de haut niveau au lycée de La Pérouse Kerichen.</p>
              <p>Obtention du <strong>baccalauréat général</strong> avec mention assez bien (spécialités maths/physique).</p>
            </ListGroup.Item>
          </Col>
          <Col md={6}>
            <ListGroup.Item className="border-0 p-4 shadow-sm rounded-3 bg-light item">
              <h3 className="mb-3">
                <FontAwesomeIcon icon={faGraduationCap} className="me-2 text-primary" />
                <strong>UBO | Licence d'informatique L1, Brest</strong>
              </h3>
              <div className="text-muted mb-2">
                <FontAwesomeIcon icon={faCalendarAlt} className="me-2" />
                Septembre 2022 - Aujourd'hui
              </div>
              <p>
                Troisième année de licence informatique. <br />
                <strong>Projet :</strong> Master LSE (Parcours Logiciels pour systèmes embarqués)
              </p>
            </ListGroup.Item>
          </Col>
        </Row>

        <h1 className="my-5 text-center">Autres</h1>
        <Row className="gy-4">
          <Col md={4}>
            <ListGroup.Item className="border-0 p-4 shadow-sm rounded-3 bg-light item">
            <h5>
              <FontAwesomeIcon icon={faSailboat} className="me-2 text-success" />
              Moniteur & Entraîneur de voile (CQP IV)
            </h5>
            </ListGroup.Item>
          </Col>
          <Col md={4}>
            <ListGroup.Item className="border-0 p-4 shadow-sm rounded-3 bg-light item">
              <h5>
                <FontAwesomeIcon icon={faCar} className="me-2 text-success" />
                Permis B - véhiculé
              </h5>
            </ListGroup.Item>
          </Col>
          <Col md={4}>
            <ListGroup.Item className="border-0 p-4 shadow-sm rounded-3 bg-light item">
              <h5>
                <FontAwesomeIcon icon={faShip} className="me-2 text-success" />
                Permis Bateau
              </h5>
            </ListGroup.Item>
          </Col>
        </Row>
      </Container>
    </main>
  );
}
