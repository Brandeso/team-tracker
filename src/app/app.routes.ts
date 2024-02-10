import { Routes } from '@angular/router';
import { MatchDashboardComponent } from './matches/match-dashboard/match-dashboard.component';
import { MatchInfoComponent } from './matches/match-info/match-info.component';
import { SeasonDashboardComponent } from './seasons/season-dashboard/season-dashboard.component';

export const routes: Routes = [
  { path: '', component: SeasonDashboardComponent, pathMatch: 'full'},
  { path: 'season/:id', component: MatchDashboardComponent },
  { path: 'match/:id', component: MatchInfoComponent },
  { path: 'season/:seasonId/match/:matchId', component: MatchInfoComponent},
  { path: '**', redirectTo: '/' }
];
