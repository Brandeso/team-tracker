import { Routes } from '@angular/router';
import { MatchDashboardComponent } from './matches/match-dashboard/match-dashboard.component';

export const routes: Routes = [
  { path: '', component: MatchDashboardComponent, pathMatch: 'full'}
];
