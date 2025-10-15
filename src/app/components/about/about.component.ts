import { Component, OnInit } from '@angular/core';
import { ProfilCardComponent } from '../profil-card/profil-card.component';
import { map, Observable, shareReplay } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ProfilCardComponent, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements OnInit {
  isHandheld$!: Observable<boolean>;  // Combine mobile et tablette


  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    // Observable pour les appareils mobiles et tablettes
    this.isHandheld$ = this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.Tablet, Breakpoints.Small, Breakpoints.Medium])
      .pipe(
        map(result => result.matches),
        shareReplay()
      );
  }

  whatidos = [
    {
      image: 'assets/img/img-front.png',
      title: 'Développement Frontend',
      description:
        "Je transforme des maquettes en interfaces web performantes, interactives et intuitives avec les dernières technologies. L'UX/UI est un aspect essentiel de mon travail.",
    },
    {
      image: 'assets/img/img-back.png',
      title: 'Développement Backend',
      description: "Grâce à mon parcours fullstack, je suis capable de créer des systèmes backend et des solutions côté serveur.",
    }
  ];
}
