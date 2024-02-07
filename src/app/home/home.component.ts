import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatchInfoComponent } from '../matches/match-info/match-info.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatchInfoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
