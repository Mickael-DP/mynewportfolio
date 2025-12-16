import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilCardComponent } from "./components/profil-card/profil-card.component";
import { AboutComponent } from "./components/about/about.component";
import { ExperienceComponent } from "./components/experience/experience.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { ContactComponent } from "./components/contact/contact.component";
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, Observable, shareReplay } from 'rxjs';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [

    ProfilCardComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactComponent,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  isMobile$!: Observable<boolean>;
  isTablet$!: Observable<boolean>;

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    // Initialiser les observables pour la taille de l'écran
    this.isMobile$ = this.breakpointObserver.observe([Breakpoints.Handset])
      .pipe(
        map(result => result.matches),
        shareReplay()
      );

    this.isTablet$ = this.breakpointObserver.observe([Breakpoints.Tablet])
      .pipe(
        map(result => result.matches),
        shareReplay()
      );
  }



}
