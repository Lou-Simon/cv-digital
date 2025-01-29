import React, { useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

import anime from 'animejs';


export default function Home() {

  useEffect(() => {
    anime({
      targets: '.title',
      opacity: [0,1],
      duration: 700,
      easing: 'easeInOutExpo'

    });

    anime({
      targets: '.alert',
      opacity: [0,1],
      duration: 1000,
      easing: 'easeInOutExpo'
    });
  }, []);

  const email = 'lou.simon.2287@gmail.com';
  const subject = encodeURIComponent('Stage fin de licence informatique');

  const mailtoLink = `mailto:${email}?subject=${subject}`;

  return (
    <div id="banner">
    <main className='d-flex flex-column justify-content-center align-items-center'>
      <h1 className='my-5 title'>Bienvenue sur mon CV Digital</h1>
      <Alert variant="primary">
        <p className='d-flex align-items-center'>
        <Badge bg="primary mx-2 fs-5">New</Badge>
          Actuellement à la recherche d'un stage de 2 mois à partir d'avril 2025, pour la fin de ma licence d'informatique.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <a href={mailtoLink} target='_blank' rel='noopener noreferrer'>
            <Button variant="success">
              Contactez-moi à ce sujet
            </Button>
          </a>
        </div>
      </Alert>
    </main>
    </div>
  );
}
