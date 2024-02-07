import { Component, /*Inject,*/ OnInit } from '@angular/core';
import { MatchesService } from '../../services/matches.service';
import { DocumentData, QuerySnapshot } from 'firebase/firestore';
import { Match } from '../../interfaces/match';

@Component({
  selector: 'app-match-info',
  standalone: true,
  imports: [],
  templateUrl: './match-info.component.html',
  styleUrl: './match-info.component.css'
})
export class MatchInfoComponent implements OnInit {
  // matchSrv: MatchesService = Inject(MatchesService);
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
    snapshot.docs.forEach((match) => {
      this.matchesData.push({id: match.id, data: { ...match.data(), deleted: false }})
    })
  }
}
