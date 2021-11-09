import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodasCatComponent } from './todas-cat/todas-cat.component'
import { LandingComponent } from "./landing/landing.component"
import { ProductosCompaniaComponent } from "./productos-compania/productos-compania.component"
import { CarritoComponent } from "./carrito/carrito.component"
import { DriverHomeComponent } from './driver-home/driver-home.component'
import { DriverMisOrdenesComponent } from './driver-mis-ordenes/driver-mis-ordenes.component'
import { CliUbicacionComponent } from './cli-ubicacion/cli-ubicacion.component'
import { CliCrearCuentaComponent } from './cli-crear-cuenta/cli-crear-cuenta.component'

const routes: Routes = [
  {
    path: 'clientes',
    component: LandingComponent
  },
  {
    path: 'clientes/categorias',
    component: TodasCatComponent
  },
  {
    path: 'clientes/categorias/R',
    component: TodasCatComponent
  },
  {
    path: 'clientes/categorias/Fa',
    component: TodasCatComponent
  },
  {
    path: 'clientes/categorias/Fe',
    component: TodasCatComponent
  },
  {
    path: 'clientes/categorias/S',
    component: TodasCatComponent
  },
  {
    path: 'clientes/productos/:nombreCat/:id',
    component: ProductosCompaniaComponent
  },
  {
    path: 'clientes/carrito',
    component: CarritoComponent
  },
  {
    path: 'clientes/registro',
    component: CliCrearCuentaComponent
  },
  {
    path: 'clientes/ubicacion',
    component: CliUbicacionComponent
  },
  {
    path: 'driver',
    component: DriverHomeComponent
  },
  {
    path: 'driver/misOrdenes',
    component: DriverMisOrdenesComponent
  },
  {
    path: 'driver/ordenesEntregadas',
    component: DriverHomeComponent
  },
  {
    path: 'driver/ordenesDisponibles',
    component: DriverHomeComponent
  },
  {
    path: 'DummyComponent',
    component: DriverHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
