import { Routes } from '@angular/router';


export const routes: Routes = [
  { path: 'about', loadComponent: () => import('./components/about/about.component').then(m => m.AboutComponent) },
  { path: 'experience', loadComponent: () => import('./components/experience/experience.component').then(m => m.ExperienceComponent) },
  { path: 'projects', loadComponent: () => import('./components/projects/projects.component').then(m => m.ProjectsComponent) },
  { path: 'skills', loadComponent: () => import('./components/skills/skills.component').then(m => m.SkillsComponent) },
  { path: 'contact', loadComponent: () => import('./components/contact/contact.component').then(m => m.ContactComponent) },
  { path: '', redirectTo: 'about', pathMatch: 'full' }, // Page d'accueil par défaut
];
