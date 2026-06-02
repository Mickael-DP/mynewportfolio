import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  experiences = [
    {
      position: 'Développeur Fullstack - Freelance',
      company: 'SWANTRAD',
      duration: 'Juin 2025 - Décembre 2025',
      descriptions: [
        "Reprise et refonte d'une base de code existante sur une plateforme SaaS de traduction assermentée",
        "Restructuration complète du back-office et correction des anomalies héritées",
        "Développement de nouvelles fonctionnalités post-lancement",
        "Mission en régie partielle avec contact direct client pour le cadrage et le suivi des tâches",
      ],
      technologies: ['Laravel', 'Blade', 'Bootstrap', 'MySQL', 'Git', 'Notion'],
    },
    {
      position: 'Développeur Frontend - Freelance',
      company: 'SQUAD',
      duration: 'Mars 2025 - Décembre 2025',
      descriptions: [
        "Refonte complète du tunnel de réservation en ligne (B2B & B2C) d'une compagnie de transport maritime nationale",
        "Intégration d'un CMS headless Drupal et consommation d'une API Java",
        "Mise en place de tests automatisés unitaires et end-to-end (Jest)",
        "Collaboration au sein d'une équipe pluridisciplinaire de 10 personnes en méthodologie Agile Scrum",
      ],
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Drupal', 'Jest', 'Git', 'Docker', 'Jira'],
    },
    {
      position: 'Développeur Web - Alternance',
      company: 'SQUAD',
      duration: 'Avril 2022 - Septembre 2024',
      descriptions: [
        "Développement et maintenance sur 2 ans d'une bibliothèque de composants React/Material UI adaptée à la charte graphique d'un client",
        "Création de composants custom non natifs à MUI, migration vers une version majeure et documentation complète sous Storybook",
        "Contribution en cycles Agile/Scrum sur des projets clients (ajout de fonctionnalités, corrections de bugs)",
        "Réalisation d'un POC Next.js/Strapi pour explorer une offre CMS headless",
      ],
      technologies: ['React', 'TypeScript', 'Storybook', 'Material UI', 'Strapi', 'Next.js', 'Git', 'Docker', 'Jira'],
    },
    {
      position: 'Développeur Web - Alternance',
      company: 'Niceflow',
      duration: 'Octobre 2021 - Avril 2022',
      descriptions: [
        'Conception et livraison de 3 à 4 sites vitrines et e-commerce clients, de la maquette UI/UX jusqu\'à la mise en production',
        'Accompagnement client à la prise en main du CMS via des tutoriels vidéo Loom sur mesure',
      ],
      technologies: ['WordPress', 'Webflow', 'Figma', 'Notion'],
    },
  ];

  educations = [
    {
      degree: 'Mastère - Expert en Développement Fullstack (BAC+5)',
      institution: 'Sophia YNOV Campus',
      year: '2021 - 2024',
      detail:
        "Formation en alternance axée sur le cycle de vie complet d'une application web : architecture logicielle, développement front-end et back-end, tests, déploiement continu et bonnes pratiques DevOps (Docker).",
    },
    {
      degree: 'Titre Professionnel - Développeur web et web mobile (BAC+2)',
      institution: 'SCIC Tétris',
      year: '2020 - 2021',
      detail:
        "Formation orientée conception et développement d'applications web et mobiles : interfaces dynamiques, logique back-end, bases de données, CMS et e-commerce.",
    },
  ];
}