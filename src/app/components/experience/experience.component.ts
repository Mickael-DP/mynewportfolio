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
      position: 'Développeur Frontend - Freelance',
      company: 'SWANTRAD',
      duration: 'Juillet 2025 - Présent',
      descriptions: [
        "Implémentation de nouveaux composants du back-office",
        "Ajout de services et de nouvelles fonctionnalités",
        "Revue du système de notification",
        "Participation à l'optimisation continue du code",
      ],
      technologies: ['Laravel', 'Blade', 'Bootstrap', 'MySQL', 'Git', 'Notion'],
    },
    {
      position: 'Développeur Frontend - Freelance',
      company: 'SQUAD',
      duration: 'Mars 2025 - Décembre 2025',
      descriptions: [
        "Développement d'une plateforme de réservation pour une compagnie maritime",
        "Intégration d'un site vitrine pour une compagnie maritime",
        "Mise en place de tests unitaires et end-to-end",
        "Optimisation des performances et de l'UX",
        "Gestion des tâches en Kanban avec Jira",
      ],
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Drupal', 'Jest', 'Git', 'Docker', 'Jira'],
    },
    {
      position: 'Développeur Web',
      company: 'SQUAD',
      duration: 'Avril 2022 - Septembre 2024',
      descriptions: [
        "Implémentation d'une bibliothèque de composants client sur Storybook",
        "Optimisation d'une bibliothèque de composants utilisant Material UI",
        "Développement sur divers projets clients, principalement front-end",
        "Réalisation de POC techniques",
        "Sensibilisation aux bonnes pratiques de sécurité (SecureFlag)",
      ],
      technologies: ['React', 'TypeScript', 'Storybook', 'Material UI', 'Strapi', 'Next.js', 'Refine', 'Git', 'Docker', 'Jira'],
    },
    {
      position: 'Développeur Web',
      company: 'Niceflow',
      duration: 'Octobre 2021 - Avril 2022',
      descriptions: [
        'Création de sites internet pour divers clients',
        'Refonte de sites via CMS',
        'Participation à l’élaboration des maquettes UI/UX',
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
        "Cette formation m’a permis de maîtriser l’ensemble du cycle de vie d’une application web : cadrage et gestion de projet, conception d’architectures logicielles, développement front-end et back-end, mise en place de tests, déploiement continu et exploitation d’applications cloud, en appliquant les bonnes pratiques de qualité, d’accessibilité et de DevOps (Docker).",
    },
    {
      degree: 'Titre Professsionel - Développeur web et web mobile (BAC+2)',
      institution: 'SCIC Tétris',
      year: '2020 - 2021',
      detail:
        'Cette formation m’a permis de développer des applications web et web mobile complètes, en concevant des interfaces utilisateurs statiques et dynamiques, en développant la logique back-end et l’accès aux données, et en intégrant des bases de données, des solutions CMS et e-commerce, tout en respectant les recommandations de sécurité.',
    },
  ];
}
