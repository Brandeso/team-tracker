import { Component, OnInit, inject } from '@angular/core';
import { MatchesService } from '../../services/matches.service';
import { DocumentData, QuerySnapshot } from 'firebase/firestore';
import { Match } from '../../interfaces/match';
import { CommonModule } from '@angular/common';
import { MatchDetailsComponent } from '../match-details/match-details.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-match-info',
  standalone: true,
  imports: [CommonModule, MatchDetailsComponent],
  templateUrl: './match-dashboard.component.html',
  styleUrl: './match-dashboard.component.css'
})
export class MatchDashboardComponent implements OnInit {
  matchesData: Match[] = [];
  route: ActivatedRoute = inject(ActivatedRoute);
  seasonId: string;

  constructor(
    private matchesService: MatchesService,
  ) {
    this.seasonId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.get();
  }

  async get() {
    const snapshot = await this.matchesService.getMatches(this.seasonId);
    this.updateMatchesCollection(snapshot);
  }

  updateMatchesCollection(snapshot: QuerySnapshot<DocumentData>) {
    console.log(snapshot.docs)
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
    console.log(this.matchesData)
  }
}
