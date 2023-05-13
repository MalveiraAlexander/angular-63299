import { Injectable, effect, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  search = signal<string>(null);
  showSearch = signal<boolean>(false);

  constructor() {
    effect(() => {
      console.log('effect',this.search());
    });
  }
}
