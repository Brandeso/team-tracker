import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Season } from '../../interfaces/season';

@Component({
  selector: 'app-season-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './season-card.component.html',
  styleUrl: './season-card.component.css'
})
export class SeasonCardComponent {
  @Input() seasonDetails!: Season;

  constructor() {}

}
