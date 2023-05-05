import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRountingModule } from './app-rounting.module';
import { Pagina1Component } from './pages/pagina1/pagina1.component';
import { Pagina2Component } from './pages/pagina2/pagina2.component';
import { HeaderComponent } from './components/header/header.component';
import { ChildOnePage1Component } from './pages/pagina1/child-one-page1/child-one-page1.component';
import { ChildTwoPage1Component } from './pages/pagina1/child-two-page1/child-two-page1.component';

@NgModule({
  declarations: [
    AppComponent,
    Pagina1Component,
    Pagina2Component,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRountingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
