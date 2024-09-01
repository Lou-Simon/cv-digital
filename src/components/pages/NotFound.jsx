import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <Container className='d-flex justify-content-center align-items-center vh-100'>
      <Alert variant="danger" className='w-100 w-md-50'>
        <Alert.Heading>Page Non Trouvée</Alert.Heading>
        <p>
          La page que vous visionnez n'existe pas sur le site web. Cliquez sur le bouton ci-dessous pour revenir à la page d'accueil du site web.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button variant="success" onClick={handleClick}>
            Revenir à l'accueil
          </Button>
        </div>
      </Alert>
    </Container>
  );
}
