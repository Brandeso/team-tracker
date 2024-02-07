import { Component, OnInit } from '@angular/core';
import { MatchesService } from '../../services/matches.service';
import { DocumentData, QuerySnapshot } from 'firebase/firestore';
import { Match } from '../../interfaces/match';
import { CommonModule } from '@angular/common';
import { MatchDetailsComponent } from '../match-details/match-details.component';

@Component({
  selector: 'app-match-info',
  standalone: true,
  imports: [CommonModule, MatchDetailsComponent],
  templateUrl: './match-dashboard.component.html',
  styleUrl: './match-dashboard.component.css'
})
export class MatchDashboardComponent implements OnInit {
  matchesData: Match[] = [];

  constructor(private matchesService: MatchesService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.get();
  }

  async get() {
    const snapshot = await this.matchesService.getMatches();
    this.updateMatchesCollection(snapshot);
  }

  updateMatchesCollection(snapshot: QuerySnapshot<DocumentData>) {
    this.matchesData = [];
    if(snapshot.docs.length == 0) {
      this.matchesData.push({
        id: "120",
        data: {
          deleted: false,
          awayGoals: 0,
          awayTeam: "Compares",
          date: new Date(),
          localGoals: 2,
          localTeam: "Living"
        }
      })
    } else {
      snapshot.docs.forEach((match) => {
        this.matchesData.push({id: match.id, data: { ...match.data(), deleted: false }})
      })
    }
  }
}
