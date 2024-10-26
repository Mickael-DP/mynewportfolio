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
      image: 'https://via.placeholder.com/280x200.png',
      title: 'Projet1',
    },
    {
      image: 'https://via.placeholder.com/280x200.png',
      title: 'Projet2',
    },
    {
      image: 'https://via.placeholder.com/280x200.png',
      title: 'Projet3',
    },
    {
      image: 'https://via.placeholder.com/280x200.png',
      title: 'Projet4',
    },
  ];
}
