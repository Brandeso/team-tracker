import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Match } from '../../interfaces/match';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-match-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './match-details.component.html',
  styleUrl: './match-details.component.css'
})
export class MatchDetailsComponent {
  @Input() matchDetails!: Match;

  constructor() {
  }
}
