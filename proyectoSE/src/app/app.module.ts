import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClient, HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavCategoriasComponent } from './nav-categorias/nav-categorias.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { AboutComponent } from './about/about.component';
import { TodasCatComponent } from './todas-cat/todas-cat.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { CarritoComponent } from './carrito/carrito.component';
import { LandingComponent } from './landing/landing.component';
import { LocalStoService } from './local-sto.service';
import { ProductosCompaniaComponent } from './productos-compania/productos-compania.component';
import { DriverNavComponent } from './driver-nav/driver-nav.component';
import { DriverHomeComponent } from './driver-home/driver-home.component';
import { DriverMisOrdenesComponent } from './driver-mis-ordenes/driver-mis-ordenes.component';
import { DummyComponentComponent } from './dummy-component/dummy-component.component';
import { CliUbicacionComponent } from './cli-ubicacion/cli-ubicacion.component';
import { CliCrearCuentaComponent } from './cli-crear-cuenta/cli-crear-cuenta.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CliIniciarSesionComponent } from './cli-iniciar-sesion/cli-iniciar-sesion.component';
import { DriverVerOrdenComponent } from './driver-ver-orden/driver-ver-orden.component';
import { CliPagoComponent } from './cli-pago/cli-pago.component';
import { DriverOrdenEntregadaComponent } from './driver-orden-entregada/driver-orden-entregada.component';
import { DriverOrdenDisponibleComponent } from './driver-orden-disponible/driver-orden-disponible.component';
import { HomeComponent } from './admin/home/home.component';
import { AdminNavComponent } from './admin/admin-nav/admin-nav.component';
import { AdminTablaEmpresaComponent } from './admin/admin-tabla-empresa/admin-tabla-empresa.component';
import { AdminTablaProductoComponent } from './admin/admin-tabla-producto/admin-tabla-producto.component';
import { AdminTablaMotoristaComponent } from './admin/admin-tabla-motorista/admin-tabla-motorista.component';
import { AdminTablaOrdenComponent } from './admin/admin-tabla-orden/admin-tabla-orden.component';
import { DriverUbicacionComponent } from './driver-ubicacion/driver-ubicacion.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NavCategoriasComponent,
    CategoriasComponent,
    AboutComponent,
    TodasCatComponent,
    CompanyDetailComponent,
    CarritoComponent,
    LandingComponent,
    ProductosCompaniaComponent,
    DriverNavComponent,
    DriverHomeComponent,
    DriverMisOrdenesComponent,
    DummyComponentComponent,
    CliUbicacionComponent,
    CliCrearCuentaComponent,
    CliIniciarSesionComponent,
    DriverVerOrdenComponent,
    CliPagoComponent,
    DriverOrdenEntregadaComponent,
    DriverOrdenDisponibleComponent,
    HomeComponent,
    AdminNavComponent,
    AdminTablaEmpresaComponent,
    AdminTablaProductoComponent,
    AdminTablaMotoristaComponent,
    AdminTablaOrdenComponent,
    DriverUbicacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [LocalStoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
