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
        "Avec une solide maîtrise de React.js. J'excelle dans la transformation de concepts de conception en sites Web dynamiques et conviviaux.",
    },
    {
      image: 'assets/img/img-back.png',
      title: 'Développement Backend',
      description: "Compétent en Node.js ou encore Symfony, je peux être capable de créer des systèmes backend et des solutions côté serveur.",
    }
  ];
}
