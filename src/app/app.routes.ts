import { Routes } from '@angular/router';
import { MatchDashboardComponent } from './matches/match-dashboard/match-dashboard.component';
import { MatchInfoComponent } from './matches/match-info/match-info.component';

export const routes: Routes = [
  { path: '', component: MatchDashboardComponent, pathMatch: 'full'},
  { path: 'match/:id', component: MatchInfoComponent },
  { path: '**', redirectTo: '/' }
];
