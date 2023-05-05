import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ChildOnePage1Component } from './child-one-page1.component';

const routes: Routes = [
  { path: '', component: ChildOnePage1Component }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class ChildOnePage1RountingModule { }
