import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { map, Observable, combineLatest, shareReplay } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']  // Utilise styleUrls ici
})
export class SidebarComponent implements OnInit {

  isHandheld$!: Observable<boolean>;  // Combine mobile et tablette
  isDesktop$!: Observable<boolean>;    // Ordinateur de bureau

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    // Observable pour les appareils mobiles et tablettes
    this.isHandheld$ = this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.Tablet, Breakpoints.Small, Breakpoints.Medium])
      .pipe(
        map(result => result.matches),
        shareReplay()
      );

    // Observable pour les ordinateurs de bureau
    this.isDesktop$ = this.breakpointObserver.observe([Breakpoints.Large, Breakpoints.Web, Breakpoints.WebLandscape])
      .pipe(
        map(result => result.matches),
        shareReplay()
      );
  }
}