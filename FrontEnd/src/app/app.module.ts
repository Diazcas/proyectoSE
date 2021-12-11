import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './clientes/landing-page/landing-page.component';
import { NavComponent } from './clientes/nav/nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavCategoriasComponent } from './clientes/landing-page/nav-categorias/nav-categorias.component';
import { CategoriasComponent } from './clientes/landing-page/categorias/categorias.component';
import { AcercaComponent } from './clientes/landing-page/acerca/acerca.component';
import { TodasCategoriasComponent } from './clientes/todas-categorias/todas-categorias.component';
import { ProductosCompaniaComponent } from './clientes/productos-compania/productos-compania.component';
import { CompanyDetailComponent } from './clientes/productos-compania/company-detail/company-detail.component';
import { CliIniciarSesionComponent } from './clientes/cli-iniciar-sesion/cli-iniciar-sesion.component';
import { RegistroComponent } from './clientes/registro/registro.component';
import { CarritoComponent } from './clientes/carrito/carrito.component';
import { CliUbicacionComponent } from './clientes/cli-ubicacion/cli-ubicacion.component';
import { CliPagoComponent } from './clientes/cli-pago/cli-pago.component';
import { DriverComponent } from './driver/driver.component';
import { DriverNavComponent } from './driver/driver-nav/driver-nav.component';
import { DriverOrdenDisponibleComponent } from './driver/driver-orden-disponible/driver-orden-disponible.component';
import { DriverOrdenEntregadaComponent } from './driver/driver-orden-entregada/driver-orden-entregada.component';
import { DriverOrdenTomadaComponent } from './driver/driver-orden-tomada/driver-orden-tomada.component';
import { DriverUbicacionComponent } from './driver/driver-ubicacion/driver-ubicacion.component';
import { AdminNavComponent } from './admin/admin-nav/admin-nav.component';
import { AdminTablaEmpresaComponent } from './admin/admin-tabla-empresa/admin-tabla-empresa.component';
import { AdminTablaMotoristaComponent } from './admin/admin-tabla-motorista/admin-tabla-motorista.component';
import { AdminTablaOrdenComponent } from './admin/admin-tabla-orden/admin-tabla-orden.component';
import { AdminTablaProductoComponent } from './admin/admin-tabla-producto/admin-tabla-producto.component';
import { AdminComponent } from './admin/admin.component';
import { EditarCuentaComponent } from './clientes/editar-cuenta/editar-cuenta.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavComponent,
    NavCategoriasComponent,
    CategoriasComponent,
    AcercaComponent,
    TodasCategoriasComponent,
    ProductosCompaniaComponent,
    CompanyDetailComponent,
    CliIniciarSesionComponent,
    RegistroComponent,
    CarritoComponent,
    CliUbicacionComponent,
    CliPagoComponent,
    DriverComponent,
    DriverNavComponent,
    DriverOrdenDisponibleComponent,
    DriverOrdenEntregadaComponent,
    DriverOrdenTomadaComponent,
    DriverUbicacionComponent,
    AdminNavComponent,
    AdminTablaEmpresaComponent,
    AdminTablaMotoristaComponent,
    AdminTablaOrdenComponent,
    AdminTablaProductoComponent,
    AdminComponent,
    EditarCuentaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
