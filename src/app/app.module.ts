import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactivoComponent } from './pages/reactivo/reactivo.component';
import { TemplateComponent } from './pages/template/template.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidatorComponent } from './components/validator/validator.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactivoComponent,
    TemplateComponent,
    ValidatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
