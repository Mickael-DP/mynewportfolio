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
      position: 'Frontend Developer',
      company: 'Tech Solutions Inc.',
      duration: 'Jan 2021 - Present',
      description: 'Developed and maintained the front-end of a large web application using Angular and TypeScript.'
    },
    {
      position: 'Web Developer Intern',
      company: 'Startup XYZ',
      duration: 'Jun 2020 - Dec 2020',
      description: 'Worked on building responsive landing pages and integrating APIs using JavaScript and HTML/CSS.'
    }
  ];

  educations = [
    {
      degree: 'Master of Computer Science',
      institution: 'University of Tech',
      year: '2019 - 2021',
      details: 'Specialized in web development, software engineering, and cloud computing.'
    },
    {
      degree: 'Bachelor of Information Technology',
      institution: 'Tech University',
      year: '2015 - 2019',
      details: 'Studied software development, databases, and systems design.'
    }
  ];

}
