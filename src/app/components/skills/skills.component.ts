import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skillCategories = [
    {
      title: 'Front-end',
      color: 'indigo',
      skills: [
        { icon: 'assets/skills/javascript-color.svg', name: 'JavaScript' },
        { icon: 'assets/skills/typescript-color.svg', name: 'TypeScript' },
        { icon: 'assets/skills/react-color.svg', name: 'React' },
        { icon: 'assets/skills/angular-color.png', name: 'Angular' },
        { icon: 'assets/skills/nextdotjs-colorw.svg', name: 'Next.js' },
        { icon: 'assets/skills/tailwindcss-color.svg', name: 'Tailwind CSS' },
        { icon: 'assets/skills/mui-color.svg', name: 'Material UI' },
        { icon: 'assets/skills/storybook-color.svg', name: 'Storybook' },
      ]
    },
    {
      title: 'Back-end',
      color: 'purple',
      skills: [
        { icon: 'assets/skills/java-color.png', name: 'Java' },
        { icon: 'assets/skills/php-color.svg', name: 'PHP' },
        { icon: 'assets/skills/laravel-color.svg', name: 'Laravel' },
        { icon: 'assets/skills/nodedotjs-color.svg', name: 'NodeJS' },
        { icon: 'assets/skills/mysql-color.svg', name: 'MySQL' },
      ]
    },
    {
      title: 'Outils & Design',
      color: 'blue',
      skills: [
        { icon: 'assets/skills/strapi-color.svg', name: 'Strapi' },
        { icon: 'assets/tools/Figma-logo.svg', name: 'Figma' },
        { icon: 'assets/tools/git-color.svg', name: 'Git' },
        { icon: 'assets/tools/docker-color.svg', name: 'Docker' },
        { icon: 'assets/tools/jira-color.svg', name: 'Jira' },
        { icon: 'assets/tools/notion.png', name: 'Notion' },
      ]
    }
  ];
}