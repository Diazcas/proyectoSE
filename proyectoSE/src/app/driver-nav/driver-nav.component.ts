import { Component, OnInit } from '@angular/core';
import {faSortDown, faTasks } from '@fortawesome/free-solid-svg-icons'
import { LocalStoService } from '../local-sto.service'
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
  nombreDriverActive:string = 'Selecciona un usuario'
  modal = 'none';


  constructor(
    private localSto:LocalStoService,
    private router:Router) { }

  ngOnInit(): void {
    this.drivers = this.localSto.traerDrivers()
    // console.log(this.drivers)
    this.driverActive = this.localSto.driverActive()
    // console.log(this.driverActive)
    this.nombreDriverActive = `${this.driverActive.pNombre} ${this.driverActive.pApellido}`
  }

  cambiarModal(){
    if(this.modal == 'none'){
      this.modal = 'active';
    }else{
      this.modal = 'none';
    }
  }

  cambiarDriver(prueba:any){
    this.localSto.actualizarDriver(prueba)
    let link = ["driver"]
    this.router.navigateByUrl('/clientes', {skipLocationChange: true}).then(()=>
    this.router.navigate(link)); 
    console.log('hola')
  }

  misOrdenes(){
    console.log('hola')
    let link = ["/driver/misOrdenes"]
    this.router.navigateByUrl('/clientes/login', {skipLocationChange: true}).then(()=>
    this.router.navigate(link)); 
  }

}
