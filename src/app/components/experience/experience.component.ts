import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experiences = [
    {
      position: 'Développeur Web',
      company: 'SQUAD',
      duration: 'Avril 2022 - Septembre 2024',
      descriptions: [
        "Implémentation d'une bibliothèque de composants client sur Storybook avec React.",
        "Participation à l'optimisation continue de la bibliothèque de composants utilisant MUI.",
        "Intégration au sein d'une équipe de développeurs sur des projets clients, principalement en front-end avec React.",
        "Réalisation de POC avec Strapi, Next.js, Refine et Vite.js.",
        "Sensibilisation aux bonnes pratiques de sécurité et obtention de certifications via SecureFlag",
      ]
    },
    {
      position: 'Développeur Web',
      company: 'Niceflow',
      duration: 'Octobre 2021 - Avril 2022',
      descriptions: [
       'Création de site internet pour des client (Wordpress / Webflow)',
       'Refonte de site internet (CMS)',
       'Participation a l’élaboration des maquettes pour des projets client',
      ]
    }
  ];

  educations = [
    {
      degree: 'Titre Professsionel - Développeur web et web mobile (BAC+2)',
      institution: 'SCIC Tétris',
      year: '2020 - 2021',
      detail: 'Diplôme de niveau BAC+2, permettant de voir les bases du développement web avec les language: HTML, CSS, Javascript et PHP',
    },
    {
      degree: 'Mastère - Expert en développement web et web mobile',
      institution: 'Sophia YNOV Campus',
      year: '2021 - 2024',
      detail: "Diplôme permettant d'apprendre d'avantage sur le métier du développement web afin de devenir un expert dans le domaine. "
    }
  ];

}
