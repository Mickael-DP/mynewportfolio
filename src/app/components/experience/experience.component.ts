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
      position: 'Développeur Frontend',
      company: 'FREELANCE',
      duration: 'Mars 2025 - Présent',
      descriptions: [
        "Mission pour SQUAD: Développement d'une plateforme de réservation dans le transport maritime ainsi que le site vitrine du client (Next.js, Tailwind CSS, Drupal)",
        "Mission pour Swantrad: Développement d'une plateforme pour les services de traduction, interprétariat assermenté et non assermenté (Laravel, Blade, Bootstrap)",
        "Création / Refonte de site internet pour des clients (React, Next.js, Wordpress, Webflow)",
        "Participation à l’élaboration des maquettes pour des projets client (Figma)",
      ],
    },
    {
      position: 'Développeur Web',
      company: 'SQUAD',
      duration: 'Avril 2022 - Septembre 2024',
      descriptions: [
        "Implémentation d'une bibliothèque de composants client sur Storybook avec React.",
        "Participation à l'optimisation continue de la bibliothèque de composants utilisant MUI.",
        "Intégration au sein d'une équipe de développeurs sur des projets clients, principalement en front-end avec React.",
        'Réalisation de POC avec Strapi, Next.js, Refine et Vite.js.',
        'Sensibilisation aux bonnes pratiques de sécurité et obtention de certifications via SecureFlag',
      ],
    },
    {
      position: 'Développeur Web',
      company: 'Niceflow',
      duration: 'Octobre 2021 - Avril 2022',
      descriptions: [
        'Création de site internet pour des client (Wordpress / Webflow)',
        'Refonte de site internet (CMS)',
        'Participation a l’élaboration des maquettes pour des projets client',
      ],
    },
  ];

  educations = [
    {
      degree: 'Titre Professsionel - Développeur web et web mobile (BAC+2)',
      institution: 'SCIC Tétris',
      year: '2020 - 2021',
      detail:
        'Formation Bac+2 orientée conception et développement d’applications web et mobiles, avec mise en pratique des langages front-end et back-end.',
    },
    {
      degree: 'Mastère - Expert en Développement Fullstack (BAC+5)',
      institution: 'Sophia YNOV Campus',
      year: '2021 - 2024',
      detail:
        "Formation Bac+5 (RNCP niveau 7) axée sur le développement web full-stack, l’architecture logicielle et les technologies modernes du cloud.",
    },
  ];
}
