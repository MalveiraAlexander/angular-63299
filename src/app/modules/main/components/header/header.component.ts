import { Component, inject } from '@angular/core';
import { SearchService } from 'src/app/modules/shared/services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  private searchService = inject(SearchService);
  query: string = '';
  search() {
    if (this.query.length >= 3) {
      console.log(this.query);

      this.searchService.search.set(this.query);
      this.searchService.showSearch.set(true);
    } else {
      this.searchService.showSearch.set(false);
    }
  }
}
