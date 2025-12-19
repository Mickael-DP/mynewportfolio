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
      description: 'Site vitrine personnel pour mon activité de freelance.',
      tags: ['Next.js', 'Tailwind CSS', 'Git', 'Vercel'],
      link: 'https://www.mdallepasqualine.com'
    },
    {
      image: 'assets/img/aragonite.png',
      title: 'Restaurant L\'Aragonite',
      category: 'Site vitrine',
      description: 'Site vitrine pour un restaurant de cuisine traditionnelle provençale et pizzas maison.',
      tags: ['Next.js', 'Tailwind CSS', 'Git', 'Vercel'],
      link: 'https://site-aragonite-v2.vercel.app/'
    },
    {
      image: 'assets/img/swantrad.png',
      title: 'SwanTrad',
      category: 'LegalTech',
      description: 'Plateforme de digitalisation de traductions assermentées simplifiant les démarches administratives.',
      tags: ['Laravel', 'Blade', 'Bootstrap', 'MySQL', 'Git'],
      link: 'https://www.swantrad.com'
    },
    {
      image: 'assets/img/BodyFiitAPP.png',
      title: 'BodyFit APP',
      category: 'Application mobile',
      description: 'Application mobile de fitness et suivi d\'entraînement dans le cadre de mon projet de fin d\'études.',
      tags: ['React Native', 'Supabase'],
      link: 'https://github.com/BodyFit-App/frontend-bodyfit-app'
    },
  ];

  onProjectClick(project: any) {
    // Vérifiez si le lien existe, puis ouvrez le lien externe
    if (project.link) {
      window.open(project.link, '_blank'); // `_blank` ouvre le lien dans un nouvel onglet
    }
  }
}
