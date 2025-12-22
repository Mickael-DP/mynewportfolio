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
      image: 'assets/img/mdallepasqualine.png',
      title: 'MDP Développeur',
      category: 'Site vitrine',
      description: 'Mon site vitrine professionnel, conçu pour présenter mon profil, mes compétences et mes projets.',
      role: 'Architecture complète du site, optimisation SEO et performance, formulaire de contact.',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      link: 'https://www.mdallepasqualine.com',
      github: 'https://github.com/Mickael-DP/mynewportfolio'
    },
    {
      image: 'assets/img/aragonite.png',
      title: 'Restaurant L\'Aragonite',
      category: 'Site vitrine',
      description: 'Site vitrine pour un client (restaurant), avec présentation du menu, infos et contact.',
      role: 'Création de la maquette, intégration frontend responsive, structuration des sections et optimisation mobile.',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      link: 'https://site-aragonite-v2.vercel.app/',
      github: 'https://github.com/Mickael-DP/site-aragonite-v2'
    },
    {
      image: 'assets/img/swantrad.png',
      title: 'SwanTrad',
      category: 'LegalTech',
      description: 'Plateforme de digitalisation de traductions assermentées pour simplifier l\'administratif.',
      role: 'Développement frontend pour une plateforme SaaS modernisant le traitement des traductions certifiées, avec intégration de la signature électronique qualifiée et interface utilisateur fluide.',
      tags: ['Laravel', 'MySQL', 'Bootstrap', 'Blade'],
      link: 'https://www.swantrad.com',
    },
    {
      image: 'assets/img/BodyFiitAPP.png',
      title: 'BodyFit APP',
      category: 'Application mobile',
      description: 'Application de fitness et suivi d\'entraînement cross-platform pour un projet de fin d\'étude.',
      role: 'Développement mobile React Native, authentification Supabase et suivi temps réel.',
      tags: ['React Native', 'Expo', 'Supabase'],
      link: '',
      github: 'https://github.com/BodyFit-App/frontend-bodyfit-app'
    },
  ];

  onLinkClick(url: string) {
    if (url) {
      window.open(url, '_blank');
    }
  }
}
