import React from 'react';
import { Card, Button, Badge, Row, Col } from 'react-bootstrap';

export default function ProjectDetails({ title, status, href, languages, devTools, frameworks }) {
  return (
    <Card className="mb-3 shadow border-0" style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <div className="d-flex justify-content-between align-items-center">
          {status === "dev" ? (
            <Badge bg="warning" text="dark">En développement</Badge>
          ) : status === "termine" ? (
            <Badge bg="success">Terminé</Badge>
          ) : (
            <Badge bg="secondary">Inconnu</Badge>
          )}
          <a href={href} target='_blank' rel="noopener noreferrer">
            <Button variant="dark">&lt;&gt; Code</Button>
          </a>
        </div>

        <Row>
          <Col>
            <div className="mt-3">
              <h6>Langages :</h6>
              <ul>
                {languages.map((language, index) => (
                  <li key={index}>{language}</li>
                ))}
              </ul>
            </div>
          </Col>

          <Col>
            <div className="mt-3">
              <h6>Outils :</h6>
              <ul>
                {devTools.map((tool, index) => (
                  <li key={index}>{tool}</li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>

        {frameworks && frameworks.length > 0 && (
          <div className="mt-3">
            <h6>Frameworks :</h6>
            <ul>
              {frameworks.map((framework, index) => (
                <li key={index}>{framework}</li>
              ))}
            </ul>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}
