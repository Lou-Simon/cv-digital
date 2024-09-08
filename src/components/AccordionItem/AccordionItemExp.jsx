import React from 'react';
import { Accordion } from 'react-bootstrap';

export default function AccordionItemExp({ title, desc, eventKey, date }) {
  return (
    <Accordion.Item eventKey={eventKey}>
      <Accordion.Header>
        <div className="d-flex justify-content-between w-100">
          <span>{title}</span>
          <span className="text-muted mx-3">{date}</span>
        </div>
      </Accordion.Header>
      <Accordion.Body>
        {desc}
      </Accordion.Body>
    </Accordion.Item>
  );
}
