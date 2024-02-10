import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
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
  currentRoute: string = '';
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.hideSearchBar = false;
    router.events.subscribe((route) => {
      if(route instanceof NavigationEnd) {
        this.currentRoute = route.url;
        if(route.url != '/') {
          // this.hideSearchBar = true;
        } else {
          // this.hideSearchBar = false;
        }
      }
    })
  }

  createForm() {
    console.log(this.currentRoute)
  }
}
