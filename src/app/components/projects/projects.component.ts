import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { link } from 'fs';


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
      image: 'assets/img/BodyFiitAPP.png',
      title: 'App. mobile - BodyFit APP (React Native)',
      link: 'https://github.com/BodyFit-App/frontend-bodyfit-app'
    },
    {
      image: 'assets/img/innoweb.png',
      title: 'Site Internet - InnoWeb Digital (Next.js)',
      link:'https://www.innowebdigital.com'
    },
    {
      image: 'assets/img/aragonite.png',
      title: "Site Internet - Restaurant l'Aragonite (React)",
      link:'https://www.restaurantlaragonite.com'
    },
    {
      image: 'assets/img/paniergourmand.png',
      title: 'Outil gestion - Panier Gourmand (Bootstrap)',
    },
  
  ];

  onProjectClick(project: any) {
    // Vérifiez si le lien existe, puis ouvrez le lien externe
    if (project.link) {
      window.open(project.link, '_blank'); // `_blank` ouvre le lien dans un nouvel onglet
    }
  }
}
