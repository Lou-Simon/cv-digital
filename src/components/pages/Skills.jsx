<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4cdb3a9bb91c8646e60afdc595969589b4b944a9
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
<<<<<<< HEAD
=======
=======
import React from 'react';
import { Container, Accordion, Col, Row } from 'react-bootstrap';
import AccordionItem from '../AccordionItem/AccordionItem';

import Lottie from "lottie-react";
import animation from "../../animations/skills-animation.json";


export default function Skills() {
  const skillsS1 = [
>>>>>>> origin/master
>>>>>>> 4cdb3a9bb91c8646e60afdc595969589b4b944a9
    { 
      title: "Bases de Données Relationnelles",
      desc: (
        <div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4cdb3a9bb91c8646e60afdc595969589b4b944a9
          <p>J'ai appris à concevoir des bases de données relationnelles et à les interroger avec SQL.</p>
          <ul>
            <li>Conception de bases de données avec UML</li>
            <li>Transformation du modèle conceptuel en modèle physique</li>
            <li>Création et gestion d'une base de données relationnelle avec SQL</li>
            <li>Interrogation de données avec des requêtes SQL</li>
            <li>Opérations de sélection, projection et jointures (naturelle et externe)</li>
<<<<<<< HEAD
=======
=======
          <p>Cet enseignement couvre le domaine de la conception de bases de données relationnelles et de l'interrogation avec le langage SQL.</p>
          <ul>
            <li>Conception de bases de donnée avec UML</li>
            <li>Passage du modèle conceptuel de données UML au modèle physique</li>
            <li>Mise en place d’une base de données relationnelle avec SQL</li>
            <li>Interrogation d’une base de données avec SQL</li>
            <li>Projection</li>
            <li>Sélection</li>
            <li>Jointures  (Jointure Naturelle et Jointure Externe)</li>
>>>>>>> origin/master
>>>>>>> 4cdb3a9bb91c8646e60afdc595969589b4b944a9
          </ul>
        </div>
      )
    },
    { 
      title: "Programmation C",
      desc: (
        <div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4cdb3a9bb91c8646e60afdc595969589b4b944a9
          <p>Ce cours m'a permis de développer une solide base en langage C, indispensable pour d'autres matières de la formation.</p>
          <ul>
            <li>Écriture, compilation et exécution de programmes en C</li>
            <li>Utilisation des fonctions de la bibliothèque standard C</li>
            <li>Maîtrise des pointeurs pour le passage par adresse et l'allocation dynamique</li>
            <li>Compréhension et utilisation de la documentation technique</li>
<<<<<<< HEAD
=======
=======
          <p>Le but de ce cours est d'obtenir un socle de base en langage C, pré-requis dans plusieurs autres cours de la formation. À l'issue de ce cours, les étudiant·e·s devraient notamment être capable :</p>
          <ul>
            <li>de faire un programme simple en C (écriture du programme, compilation puis exécution)</li>
            <li>d'utiliser un certain nombre de fonctions très classiques de la bibliothèque standard C</li>
            <li>de comprendre la documentation de celle-ci</li>
            <li>d'utiliser les pointeurs dans le cadre de passage par adresse et de l'allocation dynamique (simple)</li>
>>>>>>> origin/master
>>>>>>> 4cdb3a9bb91c8646e60afdc595969589b4b944a9
          </ul>
        </div>
      )
    },
    { 
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4cdb3a9bb91c8646e60afdc595969589b4b944a9
      title: "Projet de Conception Objet",
      desc: (
        <div>
          <p>Ce projet m'a permis de découvrir le paradigme objet en Python à travers des concepts théoriques et une application concrète.</p>
          <ul>
            <li>Compréhension des concepts d’objet, d’héritage et de collections</li>
            <li>Implémentation d'une interface graphique et résolution de problèmes de récursivité et graphes</li>
            <li>Réalisation d’un projet complet intégrant une interface graphique et la gestion d’objets</li>
<<<<<<< HEAD
=======
=======
      title: "Projet de conception objet",
      desc: (
        <div>
          <p>Découverte du paradigme objet avec Python et une application projet</p>
          <p>Découverte du paradigme objet (notion d’objet, d’héritage). Le langage Python sert de support à l’expérimentation de petits exemples et au développement d’une application plus conséquente à travers un projet. Le cours est divisé en deux parties</p>
          <ul>
            <li>Partie 1 : concepts de base de l’objet et illustration au niveau des collections, de la récursivité, des graphes et du développement d’interface graphique</li>
            <li>Partie 2 : mise en place d’un projet avec interface graphique permettant d’identifier les objets et leurs interactions.</li>
>>>>>>> origin/master
>>>>>>> 4cdb3a9bb91c8646e60afdc595969589b4b944a9
          </ul>
        </div>
      )
    },
    { 
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4cdb3a9bb91c8646e60afdc595969589b4b944a9
      title: "Réseau : Modèle OSI",
      desc: (
        <div>
          <p>Ce cours m'a initié aux concepts fondamentaux des réseaux, en particulier le modèle OSI.</p>
          <ul>
            <li>Découverte des principales technologies réseaux, matériels et logiciels</li>
            <li>Étude détaillée des couches du modèle OSI et des protocoles associés</li>
            <li>Application pratique avec des simulateurs comme GNS3 et Cisco Packet Tracer</li>
          </ul>
<<<<<<< HEAD
=======
=======
      title: "Réseau : modèle OSI",
      desc: (
        <div>
         <ul>
          <li>Les concepts réseaux : historique, principaux éléments matériels et logiciels, technologies des réseaux, modèles de référence dont le modèle ISO</li>
          <li>Les couches du modèle OSI et les protocoles associés.</li>
          <li>Application pratique sur simulateurs de réseaux (GNS3 et/ou Cisco Packet Tracer et/ou Filius et/ou autre) des concepts présentés.</li>
         </ul>
>>>>>>> origin/master
>>>>>>> 4cdb3a9bb91c8646e60afdc595969589b4b944a9
        </div>
      )
    },
    { 
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4cdb3a9bb91c8646e60afdc595969589b4b944a9
      title: "Développement Web côté Client",
      desc: (
        <div>
          <p>J'ai acquis des compétences en création d'interfaces web avec HTML, CSS et JavaScript, tout en apprenant à manipuler des bases de données côté client.</p>
          <ul>
            <li>Conception d'interfaces web interactives avec HTML/CSS et JavaScript</li>
            <li>Utilisation de frameworks CSS/JS comme Bootstrap et jQuery</li>
            <li>Création de formulaires web et validation des données utilisateurs</li>
            <li>Manipulation basique de données dans une base de données côté client</li>
<<<<<<< HEAD
=======
=======
      title: "Développement Web côté client",
      desc: (
        <div>
          <p>Développer une meilleure compréhension de l'utilisation de HTML et CSS dans un contexte pratique et professionnel. Fournir plus d'interactions entre les utilisateurs et un site Web grâce à l’usage de JavaScript. Être capable de collecter et de vérifier les données des utilisateurs avec un formulaire Web. Avoir une première expérience de manipulation d'une base de données simple côté client.</p>
          <ul>
            <li>Maîtriser l'utilisation de HTML/CSS et Javascript dans la conception de l’interface web côté client. Être capable d'utiliser et lire des documentation de frameworks CSS/JS comme jquery, Bootstrap.</li>
            <li>Programmer en JavaScript</li>
            <li>Construire des formulaires web et vérifier la validité des données fournies par l’utilisateur.</li>
            <li>Gestion (ajouter, modifier, supprimer) de données dans une base de données sample côté client. </li>
>>>>>>> origin/master
>>>>>>> 4cdb3a9bb91c8646e60afdc595969589b4b944a9
          </ul>
        </div>
      )
    },
    { 
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4cdb3a9bb91c8646e60afdc595969589b4b944a9
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
<<<<<<< HEAD
=======
=======
      title: "Langages formels et automates",
      desc: (
        <div>
          <p>Le cours présente les notions relatives aux langages réguliers et aux automates à états finis. On présente également des outils dans le cadre de l’analyse lexicale. </p>
          <ul>
            <li>Introduction aux langages formels : alphabets, mots, facteurs, ordre sur les mots, opérations ensemblistes et algébriques sur les langages, fermetures des langages, langages réguliers, expressions régulières. </li>
            <li>Introduction aux automates : automates déterministes et non déterministes, calculs dans un automate, langages reconnaissables, automates complets, produits d'automates, déterminisation des automates, automates asynchrones, théorème des éliminations des epsilon-transitions, exemples de langages reconnus, théorème de Kleene, l’algorithme de Brzozowski et Mac Cluskey, minimisation des automates. Exemples d'applications d'automates.  </li>
          </ul>
        </div>
      )
    }
  ];

  const skillsS2 = [
    { 
      title: "Algorithmique fondamentale, Graphes et Test",
      desc: (
        <div>
          <p><strong>Partie Algorithmique et test :</strong> acquisition des bases en algorithmique permettant d'élaborer un schéma de résolution pour un problème donné</p>
          <ul>
            <li>Représentation des données (modèles formels de données, Types Abstraits de Données, implantation via structures de données associées), spécifications d'algorithmes adaptés.</li>
            <li>Évaluation de la qualité des programmes produits (complexité, éléments de preuve de programme), test et validation d’une application simple (objectifs et méthodes de test, test unitaire, analyse et interprétation des résultats des tests, arrêt du test).</li>
          </ul>
          <p><strong>Partie Graphes :</strong></p>
          <ul>
            <li>Introduction aux notions de Relations et Graphes (applications, terminologie et représentation).</li>
            <li>Résolution de problèmes de cheminement et connexité (chemins eulériens, hamiltoniens, postier chinois, composantes connexes),</li>
            <li>algorithmes de plus court chemin (Dijkstra, Floyd, Ford-Bellman, A*),</li>
            <li>modélisation et résolution de problèmes classiques d'optimisation (recouvrement, flots, coloration, partitionnement ordonnancement).</li>
>>>>>>> origin/master
>>>>>>> 4cdb3a9bb91c8646e60afdc595969589b4b944a9
          </ul>
        </div>
      )
    },
    { 
      title: "Architecture et Systèmes 1",
      desc: (
        <div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4cdb3a9bb91c8646e60afdc595969589b4b944a9
          <p>J'ai étudié les bases de la conception des processeurs, la programmation en assembleur et la programmation système.</p>
          <ul>
            <li>Conception d’un processeur simple à partir de portes logiques</li>
            <li>Introduction au langage assembleur et compréhension des mécanismes bas niveau</li>
            <li>Programmation système et gestion des processus parallèles avec sémaphores</li>
          </ul>
<<<<<<< HEAD
=======
=======
          <p><strong>Partie 1 : Conception</strong></p>
          <p>La première partie du cours mène à la conception d'un petit processeur très basique afin d'en comprendre les briques de base dans une architecture très élémentaire. En partant des portes logiques de base et de la représentation de l'information au plus bas niveau, nous voyons la conception d'unités de calcul et de mémorisation élémentaires, puis d'une unité de contrôle (câblée ou microprogrammée) modélisée à l'aide d'un automate, menant à la réalisation du petit processeur.</p>
          <p><strong>Partie 2 : Programmation Assembleur</strong></p>
          <p>Cette partie est une très brève introduction à la programmation en langage d'assemblage d'un processeur industriel, afin de voir un aperçu de la programmation au plus bas niveau d'une mise en œuvre réelle de la partie conception. De plus, cette partie permet d'expliciter certains mécanismes comme le déroulement complet d'un appel de fonction ou comment se traduisent les instructions de contrôles (branchements, boucles) au plus bas niveau.</p>
          <p><strong>Partie 3 : Programmation système</strong></p>
          <p>Dans cette dernière partie on revient sur certains éléments de base d'un système d'exploitation. La notion de processus est présentée, avec une présentation de la génération des processus et une première introduction au parallélisme via des processus (lourds) parallèles, et des premiers outils de coopération inter processus avec l'aide de sémaphores.</p>
>>>>>>> origin/master
>>>>>>> 4cdb3a9bb91c8646e60afdc595969589b4b944a9
        </div>
      )
    },
    { 
      title: "Logique",
      desc: (
        <div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4cdb3a9bb91c8646e60afdc595969589b4b944a9
          <p>J'ai acquis des compétences en logique booléenne, calcul propositionnel et des prédicats, ainsi qu’en vérification formelle de programmes.</p>
          <ul>
            <li>Syntaxe et sémantique des propositions, méthodes de démonstration</li>
            <li>Théorie des ensembles : union, intersection, produits cartésiens, relations</li>
            <li>Applications à la théorie des langages et à la vérification des programmes</li>
<<<<<<< HEAD
=======
=======
          <p>Ce cours présente les éléments de la logique booléenne, le calcul propositionnel, le calcul des prédicats, les ensembles et les relations. On présente également des outils dans le cadre de la vérification formelle de programmes.</p>
          <ul>
            <li>Systèmes formels et logiques. Syntaxe et logique des propositions, sémantique, procédures de démonstration (fonction de vérités, méthodes axiomatiques, déduction naturelle, séquents de Gentzen, résolution). </li>
            <li>Ensembles : construction par énumération et induction, appartenance, union, intersection, produits cartésiens, relations. Récursion, principes d'induction. Ensembles et fonctions définis inductivement. Applications : introduction à la théorie des langages, notion de typage.  </li>
>>>>>>> origin/master
>>>>>>> 4cdb3a9bb91c8646e60afdc595969589b4b944a9
          </ul>
        </div>
      )
    },
    { 
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4cdb3a9bb91c8646e60afdc595969589b4b944a9
      title: "Programmation Fonctionnelle",
      desc: (
        <div>
          <p>J'ai découvert la programmation fonctionnelle à travers OCaml, en me concentrant sur la récursivité et la manipulation de structures de données.</p>
          <ul>
            <li>Travail sur des structures de données comme les listes, arbres et graphes</li>
            <li>Écriture d'algorithmes classiques avec OCaml</li>
            <li>Introduction à la programmation modulaire et paresseuse</li>
<<<<<<< HEAD
=======
=======
      title: "Programmation fonctionnelle",
      desc: (
        <div>
          <ul>
            <li>Types, fonctions, récursivité. Terminaison, validité et complexité des programmes récursifs.</li>
            <li>Structures de données: listes, piles, files, arbres, graphes.</li>
            <li>Algorithmes classiques et avancés sur ces structures de données.</li>
            <li>Évaluations par valeur et paresseuse. Programmation modulaire.</li>
            <li>Présentation d’un langage fonctionnel (OCaml).</li>
>>>>>>> origin/master
>>>>>>> 4cdb3a9bb91c8646e60afdc595969589b4b944a9
          </ul>
        </div>
      )
    },
    { 
      title: "Java 1",
      desc: (
        <div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4cdb3a9bb91c8646e60afdc595969589b4b944a9
          <p>Ce cours m'a permis de consolider mes connaissances en programmation objet, en particulier en Java, tout en approfondissant les concepts d'encapsulation, composition et héritage.</p>
          <ul>
            <li>Modularité et extensibilité de la programmation objet</li>
            <li>Méthodologies de conception pour définir les objets et leurs interactions</li>
            <li>Maîtrise des constructions élémentaires de Java et de son API standard</li>
<<<<<<< HEAD
=======
=======
          <p>Ce cours reprend trois concepts fondamentaux de la programmation objet abordés en Python (l'encapsulation, la composition et l'héritage) et les développe dans le contexte technique différent d’un langage de programmation impératif et typé statiquement : le langage Java. L'objectif est triple :</p>
          <ul>
            <li>mettre en évidence l'intérêt essentiel de la programmation objet, i.e. sa nature intrinsèquement modulaire et extensible</li>
            <li>donner les premiers éléments méthodologiques de conception qui permettent de déterminer les objets utiles à la réalisation d'un programme en précisant leurs responsabilités et leurs interactions</li>
            <li>consolider la maîtrise du langage Java, de ses constructions élémentaires, et de son API standard</li>
>>>>>>> origin/master
>>>>>>> 4cdb3a9bb91c8646e60afdc595969589b4b944a9
          </ul>
        </div>
      )
    },
    { 
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4cdb3a9bb91c8646e60afdc595969589b4b944a9
      title: "Développement Web côté Serveur",
      desc: (
        <div>
          <p>Ce cours m'a permis de maîtriser le développement d'applications web côté serveur avec gestion de bases de données relationnelles.</p>
          <ul>
            <li>Conception et gestion de bases de données relationnelles avec SQL</li>
            <li>Développement d'applications web pour manipuler les données côté serveur</li>
            <li>Travail en mode projet pour la réalisation d'applications complètes</li>
<<<<<<< HEAD
=======
=======
      title: "Developpement Web côté serveur",
      desc: (
        <div>
          <ul>
            <li>Concevoir et implanter une base de données sur un SGBD relationnel (mySQL, Oracle ...) en utilisant le langage SQL.</li>
            <li>Manipuler les données de la base de données relationnelle en utilisant le langage SQL.</li>
            <li>Développer, côté serveur, l’application Web permettant de manipuler les données de la base de données.</li>
            <li>Travailler en mode projet.</li>
>>>>>>> origin/master
>>>>>>> 4cdb3a9bb91c8646e60afdc595969589b4b944a9
          </ul>
        </div>
      )
    }
  ];

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4cdb3a9bb91c8646e60afdc595969589b4b944a9

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
  
  
  
  
  
<<<<<<< HEAD
=======
=======
  return (
    <main>
      <div id="banner"></div>
      <Container>
       <Row className="my-5">
        <Col md={6} className="d-flex flex-column justify-content-center align-items-center">
            <h1 className="mb-4">Compétences - Semestre 3 :</h1>
          </Col>
          <Col md={6}>
            <div className="d-flex justify-content-center align-items-center">
              <Lottie animationData={animation} style={{ maxWidth: 400, width: '100%' }} />
            </div>
          </Col>
       </Row>
        
        <Accordion className='mb-5'>
          {skillsS1.map((skillsS1, index) => (
            <AccordionItem 
              key={index}
              eventKey={index.toString()}
              title={skillsS1.title}
              desc={skillsS1.desc}
            />
          ))}
        </Accordion>
        <h1 className="my-4">Compétences - Semestre 4 :</h1>
        <Accordion>
          {skillsS2.map((skillsS2, index) => (
            <AccordionItem 
              key={index}
              eventKey={index.toString()}
              title={skillsS2.title}
              desc={skillsS2.desc}
            />
          ))}
        </Accordion>
      </Container>
    </main>
  );
>>>>>>> origin/master
>>>>>>> 4cdb3a9bb91c8646e60afdc595969589b4b944a9
}
