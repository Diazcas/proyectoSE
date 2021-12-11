import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './clientes/landing-page/landing-page.component';
import { TodasCategoriasComponent } from './clientes/todas-categorias/todas-categorias.component';
import { ProductosCompaniaComponent } from './clientes/productos-compania/productos-compania.component';
import { CliIniciarSesionComponent } from './clientes/cli-iniciar-sesion/cli-iniciar-sesion.component'
import { RegistroComponent } from './clientes/registro/registro.component'
import { CarritoComponent } from './clientes/carrito/carrito.component'
import { CliUbicacionComponent } from './clientes/cli-ubicacion/cli-ubicacion.component'
import { CliPagoComponent } from './clientes/cli-pago/cli-pago.component'
import { DriverComponent } from './driver/driver.component'
import { DriverOrdenEntregadaComponent } from './driver/driver-orden-entregada/driver-orden-entregada.component'
import { DriverOrdenDisponibleComponent } from './driver/driver-orden-disponible/driver-orden-disponible.component'
import { DriverOrdenTomadaComponent } from './driver/driver-orden-tomada/driver-orden-tomada.component'
import { DriverUbicacionComponent } from './driver/driver-ubicacion/driver-ubicacion.component'
import { AdminComponent } from './admin/admin.component'
import { EditarCuentaComponent } from './clientes/editar-cuenta/editar-cuenta.component'

const routes: Routes = [
  {
    path: 'clientes',
    component: LandingPageComponent,
  },
  {
    path: 'clientes/categorias',
    component: TodasCategoriasComponent,
  },
  {
    path: 'clientes/categorias/R',
    component: TodasCategoriasComponent,
  },
  {
    path: 'clientes/categorias/Fa',
    component: TodasCategoriasComponent,
  },
  {
    path: 'clientes/categorias/Fe',
    component: TodasCategoriasComponent,
  },
  {
    path: 'clientes/categorias/S',
    component: TodasCategoriasComponent,
  },
  {
    path: 'clientes/productos/:nombreCat/:id',
    component: ProductosCompaniaComponent,
  },
  {
    path: 'clientes/carrito',
    component: CarritoComponent,
  },
  {
    path: 'clientes/login',
    component: CliIniciarSesionComponent,
  },
  {
    path: 'clientes/registro',
    component: RegistroComponent,
  },
  {
    path: 'clientes/ubicacion',
    component: CliUbicacionComponent
  },
  {
    path: 'clientes/pago',
    component: CliPagoComponent
  },
  {
    path: 'clientes/eCuenta',
    component: EditarCuentaComponent
  },
  {
    path: 'driver',
    component: DriverComponent
  },
  {
    path: 'driver/misOrdenes',
    component: DriverOrdenTomadaComponent
  },
  {
    path: 'driver/ordenesEntregadas',
    component: DriverOrdenEntregadaComponent
  },
  {
    path: 'driver/ordenesDisponibles',
    component: DriverOrdenDisponibleComponent
  },
  {
    path: 'driver/ordenUbicacion',
    component: DriverUbicacionComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
