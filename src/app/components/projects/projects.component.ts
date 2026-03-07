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
     {
      image: 'assets/img/gestionnaire.png',
      title:'Ma banque',
      category: 'Application web',
      description: 'Application de gestion bancaire afin de monter en compétence sur mon temps perso.',
      role: 'Développement frontend Angular, développement backend Java Spring BOOT, authentification JWT et gestion de données avec mySQL.',
      tags: ['Angular', 'Typescript', 'Java Spring BOOT', 'mySQL'],
      link: 'https://gestionnaire-bancaire.vercel.app/',
      githubFront: 'https://github.com/Mickael-DP/gestionnaire-bancaire-angular',
      githubBack:'https://github.com/Mickael-DP/gestionnaire-bancaire-springboot'
    }, {
      image: 'assets/img/app-mobile-coach-ia.png',
      title:'AlgoFit',
      category: 'Application mobile',
      description: 'Application mobile de coaching sportif personnalisé afin de monter en compétence sur mon temps perso.',
      role: 'Développement mobile React Native et Expo, intégration de l\'API OpenAI pour générer des programmes d\'entraînement personnalisés',
      tags: ['React Native', 'Expo', 'OpenAI API'],
      github: 'https://github.com/Mickael-DP/AlgoFit'
    },
  ];

  onLinkClick(url: string) {
    if (url) {
      window.open(url, '_blank');
    }
  }
}
