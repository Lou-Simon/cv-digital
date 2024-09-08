<<<<<<< HEAD
import React, { useEffect } from 'react';
=======
<<<<<<< HEAD
import React, { useEffect } from 'react';
=======
import React from 'react';
>>>>>>> origin/master
>>>>>>> 4cdb3a9bb91c8646e60afdc595969589b4b944a9
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4cdb3a9bb91c8646e60afdc595969589b4b944a9
import anime from 'animejs';


export default function Home() {

  useEffect(() => {
    anime({
      targets: '.title',
      translateY: [-500, 0],
      duration: 3000,
        easing: 'easeInOutExpo'

    });

    anime({
      targets: '.alert', // Sélectionne les éléments avec la classe "card"
      translateX: [-2000, 0],
      duration: 5000,
    });
  }, []);

<<<<<<< HEAD
=======
=======
export default function Home() {

>>>>>>> origin/master
>>>>>>> 4cdb3a9bb91c8646e60afdc595969589b4b944a9
  const email = 'lou.simon.2287@gmail.com';
  const subject = encodeURIComponent('Stage fin de licence informatique');

  const mailtoLink = `mailto:${email}?subject=${subject}`;

  return (
<<<<<<< HEAD
    <div id="banner">
    <main className='d-flex flex-column justify-content-center align-items-center'>
      <h1 className='my-5 title'>Bienvenue sur mon CV Digital</h1>
=======
<<<<<<< HEAD
    <div id="banner">
    <main className='d-flex flex-column justify-content-center align-items-center'>
      <h1 className='my-5 title'>Bienvenue sur mon CV Digital</h1>
=======
    <main className='d-flex flex-column justify-content-center align-items-center'>
      <div id="banner"></div>
      <h1 className='my-5'>Bienvenue sur mon CV Digital</h1>
>>>>>>> origin/master
>>>>>>> 4cdb3a9bb91c8646e60afdc595969589b4b944a9
      <Alert variant="primary">
        <p className='d-flex align-items-center'>
        <Badge bg="primary mx-2 fs-5">New</Badge>
          Actuellement à la recherche d'un stage pour la fin de ma licence d'informatique dans le domaine des systèmes embarqués.
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
<<<<<<< HEAD
    </div>
=======
<<<<<<< HEAD
    </div>
=======
>>>>>>> origin/master
>>>>>>> 4cdb3a9bb91c8646e60afdc595969589b4b944a9
  );
}
