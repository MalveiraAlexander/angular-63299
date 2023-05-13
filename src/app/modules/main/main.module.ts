import { ReactiveFormsModule } from '@angular/forms';
import { RolesComponent } from './pages/roles/roles.component';
import { UsersComponent } from './pages/users/users.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRountingModule } from './main-rounting.module';
import { ValidatorComponent } from './components/validator/validator.component';



@NgModule({
  declarations: [
    UsersComponent,
    RolesComponent,
    ValidatorComponent
  ],
  imports: [
    CommonModule,
    MainRountingModule,
    ReactiveFormsModule
  ]
})
export class MainModule { }
