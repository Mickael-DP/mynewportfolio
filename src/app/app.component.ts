import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { ProfilCardComponent } from "./components/profil-card/profil-card.component";
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, Observable, shareReplay } from 'rxjs';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SidebarComponent, ProfilCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  isMobile$!: Observable<boolean>;
  isTablet$!: Observable<boolean>;

  constructor( private breakpointObserver: BreakpointObserver) {}

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
