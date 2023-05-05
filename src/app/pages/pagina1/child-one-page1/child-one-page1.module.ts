import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildOnePage1Component } from './child-one-page1.component';
import { ChildOnePage1RountingModule } from './child-one-page1-rounting.module';



@NgModule({
  declarations: [
    ChildOnePage1Component
  ],
  imports: [
    CommonModule,
    ChildOnePage1RountingModule
  ]
})
export class ChildOnePage1Module { }
