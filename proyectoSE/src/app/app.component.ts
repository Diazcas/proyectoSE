import { Component } from '@angular/core';
import companias from '../assets/data/company.json'
import carrito from '../assets/data/carrito.json'
import drivers from '../assets/data/drivers.json'
import cliente from '../assets/data/cliente.json'
import ordenes from '../assets/data/ordenes.json'
import admin from '../assets/data/admin.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  companias = companias;
  carrito = carrito;
  drivers = drivers;
  title = 'proyectoSE';
}

localStorage.setItem('companys', JSON.stringify(companias))
// localStorage.setItem('carritoActual', '[]')
if(!localStorage.getItem('drivers')){
  localStorage.setItem('drivers', JSON.stringify(drivers))
}
localStorage.setItem('idClienteActivo', 'null') 

localStorage.setItem('clientes', JSON.stringify(cliente))
if(!localStorage.getItem('ordenes')){
  localStorage.setItem('ordenes', JSON.stringify(ordenes))
}
localStorage.setItem('driver', '0')
localStorage.setItem('admin', JSON.stringify(admin))

