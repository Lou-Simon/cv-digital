import React from 'react';
import { Accordion } from 'react-bootstrap'; 

export default function AccordionItem({ title, desc, eventKey }) {
  return (
    <Accordion.Item eventKey={eventKey}>
      <Accordion.Header>{title}</Accordion.Header>
      <Accordion.Body>
        {desc}
      </Accordion.Body>
    </Accordion.Item>
  );
}
