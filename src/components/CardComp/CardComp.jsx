import React from 'react';
import Card from 'react-bootstrap/Card';

export default function CardComp({ title, desc, eventKey }) {
  return (
    <Card className='skillCard border-0 rounded-5'>
        <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
            {desc}
        </Card.Text>
        </Card.Body>
    </Card>
  );
}
