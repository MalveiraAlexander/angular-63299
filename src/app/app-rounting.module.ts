import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Pagina1Component } from './pages/pagina1/pagina1.component';
import { Pagina2Component } from './pages/pagina2/pagina2.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'pagina1', title: 'Pagina 1 - Clase2', children: [
    { path: 'child1', loadChildren: () => import('./pages/pagina1/child-one-page1/child-one-page1.module').then(m => m.ChildOnePage1Module) },
    { path: 'child2', loadChildren: () => import('./pages/pagina1/child-two-page1/child-two-page1.module').then(m => m.ChildTwoPage1Module) },
    { path: '', component: Pagina1Component, title: 'Pagina 1 - Clase2' },
  ] },
  { path: 'pagina2/:id', component: Pagina2Component, title: 'Pagina 2 - Clase2', data: {alumno: 'Sebastian', alumno2: 'Mauricio'}, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'pagina1', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRountingModule { }
