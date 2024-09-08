import React from 'react';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import de FontAwesomeIcon
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function CardExp({ title, desc, date, imageUrl, location}) {
  return (
    <Card className='CardExp border-0'>
      <Card.Img variant="top" src={imageUrl} className="card-img-fixed" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          <FontAwesomeIcon icon={faLocationDot} className='me-2 text-danger'/>{location}
        </Card.Subtitle>
        <Card.Text>
          {desc}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-center align-items-center bg-transparent border-0">
        <small className="text-muted">{date}</small>
      </Card.Footer>
    </Card>
  );
}
