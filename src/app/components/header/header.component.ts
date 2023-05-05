import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private router: Router) {}

  goToPagina1() {
    this.router.navigate(['/pagina1']);
    let algo: string;
    let extra: string = 'Mundo';
    algo = 'Hola ' + extra;
    algo = `Hola ${extra}`;
  }

  goToPagina2() {
    let id: number = Math.random();
    this.router.navigate([`/pagina2/${id}`], {
      queryParams: {
        clientId: id,
        carName: 'Nissan'
      }
    });
  }
}
