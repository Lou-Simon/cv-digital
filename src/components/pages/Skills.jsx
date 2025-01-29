import React, { useEffect } from 'react';
import anime from 'animejs';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Skills() {

    useEffect(() => {
        anime({
          targets: '.table-cont',
          opacity: [0,1],
          duration: 700,
          easing: 'easeInOutExpo',
          delay: anime.stagger(500)
        });
      }, []);

  return (
    <div id="banner">
      <main>
      <h1 className="mb-4 text-center">Mes compétences informatiques</h1>
      <div className="table-cont container p-4" style={{ backgroundColor: '#f7f9fc', borderRadius: '15px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
        <Table responsive style={{ borderCollapse: 'separate', borderSpacing: '0 15px' }}>
          <tbody>
            <tr style={{ backgroundColor: '#e0f0ff' }}>
              <td style={{ color: '#0D6EFD', fontWeight: '600', padding: '15px' }}>Technologie Web</td>
              <td style={{ padding: '15px' }}>HTML, CSS, JS, PHP, REACT</td>
            </tr>
            <tr style={{ backgroundColor: '#f0f8ff' }}>
              <td style={{ color: '#0D6EFD', fontWeight: '600', padding: '15px' }}>Méthode d'analyse et de conception</td>
              <td style={{ padding: '15px' }}>UML, SCRUM</td>
            </tr>
            <tr style={{ backgroundColor: '#e0f0ff' }}>
              <td style={{ color: '#0D6EFD', fontWeight: '600', padding: '15px' }}>Système d'exploitation</td>
              <td style={{ padding: '15px' }}>Linux, Windows</td>
            </tr>
            <tr style={{ backgroundColor: '#f0f8ff' }}>
              <td style={{ color: '#0D6EFD', fontWeight: '600', padding: '15px' }}>Outils & Framework</td>
              <td style={{ padding: '15px' }}>CodeIgniter, Visual Studio Code, Eclipse, Bootstrap, Git/Github</td>
            </tr>
            <tr style={{ backgroundColor: '#e0f0ff' }}>
              <td style={{ color: '#0D6EFD', fontWeight: '600', padding: '15px' }}>Langages de programmation</td>
              <td style={{ padding: '15px' }}>C, Java</td>
            </tr>
            <tr style={{ backgroundColor: '#f0f8ff' }}>
              <td style={{ color: '#0D6EFD', fontWeight: '600', padding: '15px' }}>Base de données</td>
              <td style={{ padding: '15px' }}>SQL, MySQL, phpMyAdmin, MariaDB</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </main>
    </div>
  );
}
