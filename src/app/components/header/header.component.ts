import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NgxCrypticTextComponent } from '@omnedia/ngx-cryptic-text';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NgxCrypticTextComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  isMobile$!: Observable<boolean>;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.isMobile$ = this.breakpointObserver.observe([Breakpoints.Handset])
      .pipe(
        map(result => result.matches),
        shareReplay()
      );
    }

}
