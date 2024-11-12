import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'] // Corrigé ici : 'styleUrl' à 'styleUrls'
})
export class SkillsComponent {
  skills = [
    { icon: 'assets/skills/html5-color.svg', name: 'HTML' },
    { icon: 'assets/skills/css3-color.svg', name: 'CSS' },
    { icon: 'assets/skills/javascript-color.svg', name: 'JavaScript' },
    { icon: 'assets/skills/typescript-color.svg', name: 'TypeScript' },
    { icon: 'assets/skills/react-color.svg', name: 'React' },
    { icon: 'assets/skills/angular-color.png', name: 'Angular' },
    { icon: 'assets/skills/mui-color.svg', name: 'Material UI' },
    { icon: 'assets/skills/bootstrap-color.svg', name: 'Bootstrap' },
    { icon: 'assets/skills/storybook-color.svg', name: 'Storybook' },
    { icon: 'assets/skills/nextdotjs-colorw.svg', name: 'Next.js' },
    { icon: 'assets/skills/tailwindcss-color.svg', name: 'Tailwind CSS' },
    { icon: 'assets/skills/php-color.svg', name: 'PHP' },
    { icon: 'assets/skills/symfony.png', name: 'Symfony', },
    { icon: 'assets/skills/nodedotjs-color.svg', name: 'NodeJS' },
    { icon: 'assets/skills/strapi-color.svg', name: 'Strapi' },
    { icon: 'assets/skills/refine-color.png', name: 'Refine' },
    { icon: 'assets/skills/mysql-color.svg', name: 'MySQL' },
  ];
  tools = [
    { icon: 'assets/tools/Figma-logo.svg', name: 'Figma' },
    { icon: 'assets/tools/git-color.svg', name: 'Git' },
    { icon: 'assets/tools/github-color.svg', name: 'Github' },
    { icon: 'assets/tools/gitlab-color.svg', name: 'Gitlab' },
    { icon: 'assets/tools/docker-color.svg', name: 'Docker' },
    { icon: 'assets/tools/jira-color.svg', name: 'Jira' },
    { icon: 'assets/tools/notion.png', name: 'Notion' },
    { icon: 'assets/tools/wordpress-color.svg', name: 'Wordpress' },
    { icon: 'assets/tools/webflow-color.svg', name: 'Webflow' },
    { icon: 'assets/tools/discord-color.svg', name: 'Discord' },
  ]
}
