import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    CliUbicacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [LocalStoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
