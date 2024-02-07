import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchesService } from '../../services/matches.service';
import { Match } from '../../interfaces/match';

@Component({
  selector: 'app-match-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './match-info.component.html',
  styleUrl: './match-info.component.css'
})
export class MatchInfoComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  matchData: Match | undefined;

  constructor(private matchesService: MatchesService) {
    console.log('Match details component')
    const matchId = String(this.route.snapshot.params['id']);
    this.matchesService.getSingleMatch(matchId)
  }

  async get(id: string) {
    const snapshot = await this.matchesService.getSingleMatch(id);
    this.updateMatchData(snapshot);
  }

  updateMatchData(data:Match | void) {
    console.log(data)
  }
}
