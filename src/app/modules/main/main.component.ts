import { Component, OnInit, effect, inject } from '@angular/core';
import { SearchService } from '../shared/services/search.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':leave',
          [
            style({ transform: 'translate3d(0, 0, 0)' }),
            animate('0.3s ease-out', style({ transform: 'translate3d(0, -100%, 0)' }))
          ]
        ),
        transition(
          ':enter',
          [
            style({ transform: 'translate3d(0, -100%, 0)' }),
            animate('0.3s ease-in', style({ transform: 'translate3d(0, 0, 0)' }))
          ]
        )
      ]
    )
  ]
})
export class MainComponent {
  searchService = inject(SearchService);

  constructor() {
  }
}
