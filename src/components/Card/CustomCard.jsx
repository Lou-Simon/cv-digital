import React from 'react';
import { Card as BootstrapCard } from 'react-bootstrap';


export default function CustomCard({ title, text, image }) {
  return (
    <BootstrapCard className='my-4'>
      <BootstrapCard.Img 
        variant="top" 
        src={image} 
        alt={title} 
      />
      <BootstrapCard.Body>
        <BootstrapCard.Title>{title}</BootstrapCard.Title>
        <BootstrapCard.Text>
          {text}
        </BootstrapCard.Text>
      </BootstrapCard.Body>
    </BootstrapCard>
  );
}
