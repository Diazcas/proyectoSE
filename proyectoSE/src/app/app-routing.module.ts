import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodasCatComponent } from './todas-cat/todas-cat.component'
import { LandingComponent } from "./landing/landing.component"

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'categorias',
    component: TodasCatComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
