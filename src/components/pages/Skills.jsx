import React, { useEffect } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import CardComp from '../CardComp/CardComp';
import anime from 'animejs';


export default function Skills() {
  useEffect(() => {
    anime({
      targets: '.card',
      opacity: [0,1],
      translateX: [-3000, 0],
      duration: 3000,
      delay: anime.stagger(500)
    });
  }, []);
  
  const skillsInfo = [
    { 
      title: "Bases de Données Relationnelles",
      desc: (
        <div>
          <p>J'ai appris à concevoir des bases de données relationnelles et à les interroger avec SQL.</p>
          <ul>
            <li>Conception de bases de données avec UML</li>
            <li>Transformation du modèle conceptuel en modèle physique</li>
            <li>Création et gestion d'une base de données relationnelle avec SQL</li>
            <li>Interrogation de données avec des requêtes SQL</li>
            <li>Opérations de sélection, projection et jointures (naturelle et externe)</li>
          </ul>
        </div>
      )
    },
    { 
      title: "Programmation C",
      desc: (
        <div>
          <p>Ce cours m'a permis de développer une solide base en langage C, indispensable pour d'autres matières de la formation.</p>
          <ul>
            <li>Écriture, compilation et exécution de programmes en C</li>
            <li>Utilisation des fonctions de la bibliothèque standard C</li>
            <li>Maîtrise des pointeurs pour le passage par adresse et l'allocation dynamique</li>
            <li>Compréhension et utilisation de la documentation technique</li>
          </ul>
        </div>
      )
    },
    { 
      title: "Projet de Conception Objet",
      desc: (
        <div>
          <p>Ce projet m'a permis de découvrir le paradigme objet en Python à travers des concepts théoriques et une application concrète.</p>
          <ul>
            <li>Compréhension des concepts d’objet, d’héritage et de collections</li>
            <li>Implémentation d'une interface graphique et résolution de problèmes de récursivité et graphes</li>
            <li>Réalisation d’un projet complet intégrant une interface graphique et la gestion d’objets</li>
          </ul>
        </div>
      )
    },
    { 
      title: "Réseau : Modèle OSI",
      desc: (
        <div>
          <p>Ce cours m'a initié aux concepts fondamentaux des réseaux, en particulier le modèle OSI.</p>
          <ul>
            <li>Découverte des principales technologies réseaux, matériels et logiciels</li>
            <li>Étude détaillée des couches du modèle OSI et des protocoles associés</li>
            <li>Application pratique avec des simulateurs comme GNS3 et Cisco Packet Tracer</li>
          </ul>
        </div>
      )
    },
    { 
      title: "Développement Web côté Client",
      desc: (
        <div>
          <p>J'ai acquis des compétences en création d'interfaces web avec HTML, CSS et JavaScript, tout en apprenant à manipuler des bases de données côté client.</p>
          <ul>
            <li>Conception d'interfaces web interactives avec HTML/CSS et JavaScript</li>
            <li>Utilisation de frameworks CSS/JS comme Bootstrap et jQuery</li>
            <li>Création de formulaires web et validation des données utilisateurs</li>
            <li>Manipulation basique de données dans une base de données côté client</li>
          </ul>
        </div>
      )
    },
    { 
      title: "Langages Formels et Automates",
      desc: (
        <div>
          <p>Dans ce cours, j'ai exploré les concepts de langages formels et d’automates à états finis, ainsi que leur application à l’analyse lexicale.</p>
          <ul>
            <li>Étude des langages réguliers, expressions régulières et opérations sur les langages</li>
            <li>Automates déterministes et non déterministes, déterminisation et minimisation</li>
            <li>Applications pratiques des automates, notamment dans la reconnaissance des langages</li>
          </ul>
        </div>
      )
    },
    { 
      title: "Algorithmique Fondamentale, Graphes et Test",
      desc: (
        <div>
          <p>Ce cours m'a permis de renforcer mes compétences en algorithmique et de découvrir les graphes et les méthodes de test.</p>
          <ul>
            <li>Conception et spécification d'algorithmes adaptés aux modèles de données</li>
            <li>Évaluation des programmes produits (complexité, preuve, test unitaire)</li>
            <li>Résolution de problèmes de graphes (chemins eulériens, plus court chemin, etc.)</li>
          </ul>
        </div>
      )
    },
    { 
      title: "Architecture et Systèmes 1",
      desc: (
        <div>
          <p>J'ai étudié les bases de la conception des processeurs, la programmation en assembleur et la programmation système.</p>
          <ul>
            <li>Conception d’un processeur simple à partir de portes logiques</li>
            <li>Introduction au langage assembleur et compréhension des mécanismes bas niveau</li>
            <li>Programmation système et gestion des processus parallèles avec sémaphores</li>
          </ul>
        </div>
      )
    },
    { 
      title: "Logique",
      desc: (
        <div>
          <p>J'ai acquis des compétences en logique booléenne, calcul propositionnel et des prédicats, ainsi qu’en vérification formelle de programmes.</p>
          <ul>
            <li>Syntaxe et sémantique des propositions, méthodes de démonstration</li>
            <li>Théorie des ensembles : union, intersection, produits cartésiens, relations</li>
            <li>Applications à la théorie des langages et à la vérification des programmes</li>
          </ul>
        </div>
      )
    },
    { 
      title: "Programmation Fonctionnelle",
      desc: (
        <div>
          <p>J'ai découvert la programmation fonctionnelle à travers OCaml, en me concentrant sur la récursivité et la manipulation de structures de données.</p>
          <ul>
            <li>Travail sur des structures de données comme les listes, arbres et graphes</li>
            <li>Écriture d'algorithmes classiques avec OCaml</li>
            <li>Introduction à la programmation modulaire et paresseuse</li>
          </ul>
        </div>
      )
    },
    { 
      title: "Java 1",
      desc: (
        <div>
          <p>Ce cours m'a permis de consolider mes connaissances en programmation objet, en particulier en Java, tout en approfondissant les concepts d'encapsulation, composition et héritage.</p>
          <ul>
            <li>Modularité et extensibilité de la programmation objet</li>
            <li>Méthodologies de conception pour définir les objets et leurs interactions</li>
            <li>Maîtrise des constructions élémentaires de Java et de son API standard</li>
          </ul>
        </div>
      )
    },
    { 
      title: "Développement Web côté Serveur",
      desc: (
        <div>
          <p>Ce cours m'a permis de maîtriser le développement d'applications web côté serveur avec gestion de bases de données relationnelles.</p>
          <ul>
            <li>Conception et gestion de bases de données relationnelles avec SQL</li>
            <li>Développement d'applications web pour manipuler les données côté serveur</li>
            <li>Travail en mode projet pour la réalisation d'applications complètes</li>
          </ul>
        </div>
      )
    }
  ];


  return (
      <main>
        <Container>
          <h1 className='mb-4'>Compétences acquises au cours de ma licence d'informatique</h1>
          <div className="masonry-grid">
            {skillsInfo.map((skillsInfo, index) => (
              <div key={index} className="masonry-item">
                <CardComp
                  className="card"
                  eventKey={index.toString()}
                  title={skillsInfo.title}
                  desc={skillsInfo.desc}
                />
              </div>
            ))}
          </div>
        </Container>
      </main>
  );
  
  
  
  
  
}
