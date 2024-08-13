import React from 'react';
import { Container, Accordion, Col, Row } from 'react-bootstrap';
import AccordionItem from '../AccordionItem/AccordionItem';

import Lottie from "lottie-react";
import animation from "../../animations/skills-animation.json";


export default function Skills() {
  const skillsS1 = [
    { 
      title: "Bases de Données Relationnelles",
      desc: (
        <div>
          <p>Cet enseignement couvre le domaine de la conception de bases de données relationnelles et de l'interrogation avec le langage SQL.</p>
          <ul>
            <li>Conception de bases de donnée avec UML</li>
            <li>Passage du modèle conceptuel de données UML au modèle physique</li>
            <li>Mise en place d’une base de données relationnelle avec SQL</li>
            <li>Interrogation d’une base de données avec SQL</li>
            <li>Projection</li>
            <li>Sélection</li>
            <li>Jointures  (Jointure Naturelle et Jointure Externe)</li>
          </ul>
        </div>
      )
    },
    { 
      title: "Programmation C",
      desc: (
        <div>
          <p>Le but de ce cours est d'obtenir un socle de base en langage C, pré-requis dans plusieurs autres cours de la formation. À l'issue de ce cours, les étudiant·e·s devraient notamment être capable :</p>
          <ul>
            <li>de faire un programme simple en C (écriture du programme, compilation puis exécution)</li>
            <li>d'utiliser un certain nombre de fonctions très classiques de la bibliothèque standard C</li>
            <li>de comprendre la documentation de celle-ci</li>
            <li>d'utiliser les pointeurs dans le cadre de passage par adresse et de l'allocation dynamique (simple)</li>
          </ul>
        </div>
      )
    },
    { 
      title: "Projet de conception objet",
      desc: (
        <div>
          <p>Découverte du paradigme objet avec Python et une application projet</p>
          <p>Découverte du paradigme objet (notion d’objet, d’héritage). Le langage Python sert de support à l’expérimentation de petits exemples et au développement d’une application plus conséquente à travers un projet. Le cours est divisé en deux parties</p>
          <ul>
            <li>Partie 1 : concepts de base de l’objet et illustration au niveau des collections, de la récursivité, des graphes et du développement d’interface graphique</li>
            <li>Partie 2 : mise en place d’un projet avec interface graphique permettant d’identifier les objets et leurs interactions.</li>
          </ul>
        </div>
      )
    },
    { 
      title: "Réseau : modèle OSI",
      desc: (
        <div>
         <ul>
          <li>Les concepts réseaux : historique, principaux éléments matériels et logiciels, technologies des réseaux, modèles de référence dont le modèle ISO</li>
          <li>Les couches du modèle OSI et les protocoles associés.</li>
          <li>Application pratique sur simulateurs de réseaux (GNS3 et/ou Cisco Packet Tracer et/ou Filius et/ou autre) des concepts présentés.</li>
         </ul>
        </div>
      )
    },
    { 
      title: "Développement Web côté client",
      desc: (
        <div>
          <p>Développer une meilleure compréhension de l'utilisation de HTML et CSS dans un contexte pratique et professionnel. Fournir plus d'interactions entre les utilisateurs et un site Web grâce à l’usage de JavaScript. Être capable de collecter et de vérifier les données des utilisateurs avec un formulaire Web. Avoir une première expérience de manipulation d'une base de données simple côté client.</p>
          <ul>
            <li>Maîtriser l'utilisation de HTML/CSS et Javascript dans la conception de l’interface web côté client. Être capable d'utiliser et lire des documentation de frameworks CSS/JS comme jquery, Bootstrap.</li>
            <li>Programmer en JavaScript</li>
            <li>Construire des formulaires web et vérifier la validité des données fournies par l’utilisateur.</li>
            <li>Gestion (ajouter, modifier, supprimer) de données dans une base de données sample côté client. </li>
          </ul>
        </div>
      )
    },
    { 
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
          </ul>
        </div>
      )
    },
    { 
      title: "Architecture et Systèmes 1",
      desc: (
        <div>
          <p><strong>Partie 1 : Conception</strong></p>
          <p>La première partie du cours mène à la conception d'un petit processeur très basique afin d'en comprendre les briques de base dans une architecture très élémentaire. En partant des portes logiques de base et de la représentation de l'information au plus bas niveau, nous voyons la conception d'unités de calcul et de mémorisation élémentaires, puis d'une unité de contrôle (câblée ou microprogrammée) modélisée à l'aide d'un automate, menant à la réalisation du petit processeur.</p>
          <p><strong>Partie 2 : Programmation Assembleur</strong></p>
          <p>Cette partie est une très brève introduction à la programmation en langage d'assemblage d'un processeur industriel, afin de voir un aperçu de la programmation au plus bas niveau d'une mise en œuvre réelle de la partie conception. De plus, cette partie permet d'expliciter certains mécanismes comme le déroulement complet d'un appel de fonction ou comment se traduisent les instructions de contrôles (branchements, boucles) au plus bas niveau.</p>
          <p><strong>Partie 3 : Programmation système</strong></p>
          <p>Dans cette dernière partie on revient sur certains éléments de base d'un système d'exploitation. La notion de processus est présentée, avec une présentation de la génération des processus et une première introduction au parallélisme via des processus (lourds) parallèles, et des premiers outils de coopération inter processus avec l'aide de sémaphores.</p>
        </div>
      )
    },
    { 
      title: "Logique",
      desc: (
        <div>
          <p>Ce cours présente les éléments de la logique booléenne, le calcul propositionnel, le calcul des prédicats, les ensembles et les relations. On présente également des outils dans le cadre de la vérification formelle de programmes.</p>
          <ul>
            <li>Systèmes formels et logiques. Syntaxe et logique des propositions, sémantique, procédures de démonstration (fonction de vérités, méthodes axiomatiques, déduction naturelle, séquents de Gentzen, résolution). </li>
            <li>Ensembles : construction par énumération et induction, appartenance, union, intersection, produits cartésiens, relations. Récursion, principes d'induction. Ensembles et fonctions définis inductivement. Applications : introduction à la théorie des langages, notion de typage.  </li>
          </ul>
        </div>
      )
    },
    { 
      title: "Programmation fonctionnelle",
      desc: (
        <div>
          <ul>
            <li>Types, fonctions, récursivité. Terminaison, validité et complexité des programmes récursifs.</li>
            <li>Structures de données: listes, piles, files, arbres, graphes.</li>
            <li>Algorithmes classiques et avancés sur ces structures de données.</li>
            <li>Évaluations par valeur et paresseuse. Programmation modulaire.</li>
            <li>Présentation d’un langage fonctionnel (OCaml).</li>
          </ul>
        </div>
      )
    },
    { 
      title: "Java 1",
      desc: (
        <div>
          <p>Ce cours reprend trois concepts fondamentaux de la programmation objet abordés en Python (l'encapsulation, la composition et l'héritage) et les développe dans le contexte technique différent d’un langage de programmation impératif et typé statiquement : le langage Java. L'objectif est triple :</p>
          <ul>
            <li>mettre en évidence l'intérêt essentiel de la programmation objet, i.e. sa nature intrinsèquement modulaire et extensible</li>
            <li>donner les premiers éléments méthodologiques de conception qui permettent de déterminer les objets utiles à la réalisation d'un programme en précisant leurs responsabilités et leurs interactions</li>
            <li>consolider la maîtrise du langage Java, de ses constructions élémentaires, et de son API standard</li>
          </ul>
        </div>
      )
    },
    { 
      title: "Developpement Web côté serveur",
      desc: (
        <div>
          <ul>
            <li>Concevoir et implanter une base de données sur un SGBD relationnel (mySQL, Oracle ...) en utilisant le langage SQL.</li>
            <li>Manipuler les données de la base de données relationnelle en utilisant le langage SQL.</li>
            <li>Développer, côté serveur, l’application Web permettant de manipuler les données de la base de données.</li>
            <li>Travailler en mode projet.</li>
          </ul>
        </div>
      )
    }
  ];

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
}
