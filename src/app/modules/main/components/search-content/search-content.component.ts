import { Component, effect, inject, signal } from '@angular/core';
import { SearchService } from 'src/app/modules/shared/services/search.service';
import { UserService } from '../../services/user.service';
import { UserResponse } from '../../models/reponses/user.response';

@Component({
  selector: 'app-search-content',
  templateUrl: './search-content.component.html',
  styleUrls: ['./search-content.component.scss'],
  providers: [UserService]
})
export class SearchContentComponent {
  searchService = inject(SearchService);
  private userService = inject(UserService);
  users = signal<UserResponse[]>([]);

  constructor() {
    effect(() => {
      let query = this.searchService.search();

      this.userService.searchUserByName(query).subscribe({
        next: (data) => {
          console.log(data);
          this.users.set(data);
        },
        error: err => {
          console.log(err);
        },
        complete: () => {
          console.log('Complete');
        }
      });
    });
  }
}
