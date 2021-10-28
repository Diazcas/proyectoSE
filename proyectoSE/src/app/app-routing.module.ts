import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodasCatComponent } from './todas-cat/todas-cat.component'
import { LandingComponent } from "./landing/landing.component"
import { ProductosCompaniaComponent } from "./productos-compania/productos-compania.component"

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'categorias',
    component: TodasCatComponent
  },
  {
    path: 'categorias/R',
    component: TodasCatComponent
  },
  {
    path: 'categorias/Fa',
    component: TodasCatComponent
  },
  {
    path: 'categorias/Fe',
    component: TodasCatComponent
  },
  {
    path: 'categorias/S',
    component: TodasCatComponent
  },
  {
    path: 'productos',
    component: ProductosCompaniaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
