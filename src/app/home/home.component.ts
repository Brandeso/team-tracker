import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { MatchDashboardComponent } from '../matches/match-dashboard/match-dashboard.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatchDashboardComponent, RouterOutlet, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  hideSearchBar: boolean;
  constructor(private router: Router) {
    this.hideSearchBar = true;
    router.events.subscribe((route) => {
      if(route instanceof NavigationEnd) {
        if(route.url != '/') {
          this.hideSearchBar = true;
        } else {
          this.hideSearchBar = false;
        }
      }
    })
  }
}
