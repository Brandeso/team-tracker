import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Season } from '../../interfaces/season';
import { SeasonsService } from '../../services/seasons.service';
import { DocumentData, QuerySnapshot } from 'firebase/firestore';
import { SeasonCardComponent } from '../season-card/season-card.component';

@Component({
  selector: 'app-season-dashboard',
  standalone: true,
  imports: [CommonModule, SeasonCardComponent],
  templateUrl: './season-dashboard.component.html',
  styleUrl: './season-dashboard.component.css'
})
export class SeasonDashboardComponent implements OnInit {
  seasonsData: Season[] = [];

  constructor(private seasonSrv: SeasonsService) {}

  ngOnInit(): void {
    this.get();
  }

  async get() {
    const snapshot = await this.seasonSrv.getSeasons();
    this.updateSeasonsCollection(snapshot);
  }

  updateSeasonsCollection(snapshot: QuerySnapshot<DocumentData>) {
    this.seasonsData = [];
    if(snapshot.docs.length == 0) {
      console.log('No data')
    } else {
      snapshot.docs.forEach((season) => {
        this.seasonsData.push({id: season.id, data: { ...season.data() }})
      })
    }
    console.log(this.seasonsData);
  }
}
