import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {

  projects = [
    {
      image: 'assets/img/swantrad.png',
      title: 'SwanTrad',
      category: 'LegalTech — Mission freelance',
      description: 'Plateforme SaaS de traduction assermentée en ligne : reprise d\'une base de code existante, restructuration complète et développement de nouvelles fonctionnalités post-lancement.',
      role: 'Refonte du back-office, correction des anomalies héritées, intégration de la signature électronique qualifiée. Mission en régie partielle avec contact direct client.',
      tags: ['Laravel', 'MySQL', 'Bootstrap', 'Blade'],
      link: 'https://www.swantrad.com',
    },
    {
      image: 'assets/img/gestionnaire.png',
      title: 'Ma Banque',
      category: 'Application web fullstack',
      description: 'Application bancaire fullstack avec API REST sécurisée, gestion des comptes, virements et historique des mouvements.',
      role: 'Architecture en couches côté back (Spring Boot), modulaire core/features/shared côté front (Angular), authentification JWT, tests unitaires et base de données Dockerisée.',
      tags: ['Angular', 'TypeScript', 'Java', 'Spring Boot', 'MySQL', 'Docker'],
      link: 'https://gestionnaire-bancaire.vercel.app/',
      githubFront: 'https://github.com/Mickael-DP/gestionnaire-bancaire-angular',
      githubBack: 'https://github.com/Mickael-DP/gestionnaire-bancaire-springboot'
    },
    {
      image: 'assets/img/app-mobile-coach-ia.png',
      title: 'AlgoFit',
      category: 'Application mobile — IA',
      description: 'Application mobile de coaching sportif générant des programmes d\'entraînement personnalisés via l\'API OpenAI.',
      role: 'Développement mobile React Native/Expo, intégration de l\'API OpenAI, génération dynamique de programmes adaptés au profil utilisateur.',
      tags: ['React Native', 'Expo', 'OpenAI API'],
      github: 'https://github.com/Mickael-DP/AlgoFit'
    },
    {
      image: 'assets/img/BodyFiitAPP.png',
      title: 'BodyFit APP',
      category: 'Application mobile',
      description: 'Application cross-platform de fitness et suivi d\'entraînement avec authentification et données temps réel.',
      role: 'Développement mobile React Native, authentification Supabase, suivi des performances en temps réel.',
      tags: ['React Native', 'Expo', 'Supabase'],
      github: 'https://github.com/BodyFit-App/frontend-bodyfit-app'
    },
    {
      image: 'assets/img/aragonite.png',
      title: 'Restaurant L\'Aragonite',
      category: 'Site vitrine — Client',
      description: 'Site vitrine pour un restaurant client, avec présentation du menu, informations et contact. Migré de React vers Next.js et redesigné en 2026.',
      role: 'Conception de la maquette, intégration frontend responsive, optimisation mobile et SEO.',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      link: 'https://site-aragonite-v2.vercel.app/',
      github: 'https://github.com/Mickael-DP/site-aragonite-v2'
    },
    {
      image: 'assets/img/mdallepasqualine.png',
      title: 'MDP Développeur',
      category: 'Site vitrine',
      description: 'Site vitrine freelance conçu et développé de la maquette jusqu\'à la mise en ligne, redesigné en 2026.',
      role: 'Architecture complète du site, optimisation SEO et performance, formulaire de contact.',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      link: 'https://www.mdallepasqualine.com',
      github: 'https://github.com/Mickael-DP/mynewportfolio'
    },
  ];

  onLinkClick(url: string) {
    if (url) {
      window.open(url, '_blank');
    }
  }
}