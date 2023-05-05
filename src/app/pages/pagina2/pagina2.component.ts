import { ActivatedRoute } from '@angular/router';
import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.component.html',
  styleUrls: ['./pagina2.component.scss']
})
export class Pagina2Component implements OnInit, OnChanges, OnDestroy {
  isShowDiv: boolean = false;
  constructor(private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    console.log('OnInit');
    this.activeRoute.paramMap.subscribe((data) => {
      console.log("route", data['params']['id']);

    });

    this.activeRoute.queryParams.subscribe((data) => {
      console.log("query", data);
    })

    this.activeRoute.data.subscribe((data) => {
      console.log('data', data);
    })
  }




  ngOnChanges(): void {
    console.log('OnChanges');
  }

  ngOnDestroy(): void {
    console.log('OnDestroy');
  }

  showDiv() {
    this.isShowDiv = !this.isShowDiv;
  }
}
