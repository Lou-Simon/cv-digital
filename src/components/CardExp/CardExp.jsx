import React from 'react';
import Card from 'react-bootstrap/Card';

export default function CardExp({ title, desc, date, imageUrl }) {
  return (
    <Card className='CardExp border-0'>
      <Card.Img variant="top" src={imageUrl} className="card-img-fixed" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
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
