import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatchDashboardComponent } from '../matches/match-dashboard/match-dashboard.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatchDashboardComponent, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
