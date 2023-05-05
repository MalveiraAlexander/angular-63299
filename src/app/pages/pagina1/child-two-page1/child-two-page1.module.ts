import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildTwoPage1Component } from './child-two-page1.component';
import { ChildTwoPage1RountingModule } from './child-two-page1-rounting.module';



@NgModule({
  declarations: [
    ChildTwoPage1Component
  ],
  imports: [
    CommonModule,
    ChildTwoPage1RountingModule
  ]
})
export class ChildTwoPage1Module { }
