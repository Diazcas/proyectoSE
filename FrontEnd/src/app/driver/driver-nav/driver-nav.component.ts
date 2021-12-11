import { Component, OnInit } from '@angular/core';
import {faSortDown, faTasks } from '@fortawesome/free-solid-svg-icons'
import { Router } from '@angular/router'

@Component({
  selector: 'app-driver-nav',
  templateUrl: './driver-nav.component.html',
  styleUrls: ['./driver-nav.component.css']
})
export class DriverNavComponent implements OnInit {
  
  faSortDown = faSortDown;
  faTasks = faTasks;

  drivers:any;
  driverActive:any
  nombreDriverActive:string = localStorage.getItem('driverSesion_nombre') || 'Selecciona un usuario'
  modal = 'none';


  constructor(private router:Router) { }

  ngOnInit(): void {
    this.drivers = JSON.parse(localStorage.getItem('drivers') || '{}')
    // console.log(this.drivers)
    let driver = JSON.parse(localStorage.getItem('driver') || '{}');
    let driverActive = JSON.parse(localStorage.getItem('drivers') || '{}')[
      driver
    ];
    this.driverActive = driverActive;
    // console.log(this.driverActive)
  }

  cambiarModal(){
    if(this.modal == 'none'){
      this.modal = 'active';
    }else{
      this.modal = 'none';
    }
  }

  cambiarDriver(prueba:any){
    localStorage.setItem('driver', prueba);
    let link = ["driver"]
    this.router.navigateByUrl('/clientes', {skipLocationChange: true}).then(()=>
    this.router.navigate(link)); 
  }

  misOrdenes(){
    // console.log('hola')
    let link = ["/driver/misOrdenes"]
    this.router.navigateByUrl('/clientes/login', {skipLocationChange: true}).then(()=>
    this.router.navigate(link)); 
  }

  cerrarSesion(){
    localStorage.setItem('driverSesion', '0')
    localStorage.removeItem('driverSesion_nombre')
    let link = ["/driver"]
    this.router.navigateByUrl('/clientes/login', {skipLocationChange: true}).then(()=>
    this.router.navigate(link)); 


  }

}