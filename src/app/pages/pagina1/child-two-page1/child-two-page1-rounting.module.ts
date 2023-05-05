import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ChildTwoPage1Component } from './child-two-page1.component';

const routes: Routes = [
  { path: '', component: ChildTwoPage1Component }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class ChildTwoPage1RountingModule { }
