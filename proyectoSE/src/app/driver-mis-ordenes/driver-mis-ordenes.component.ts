import { Component, OnInit } from '@angular/core';
import {faCheck , faWindowClose ,faThumbtack, faMotorcycle, faHome } from '@fortawesome/free-solid-svg-icons'
import { LocalStoService } from '../local-sto.service'

@Component({
  selector: 'app-driver-mis-ordenes',
  templateUrl: './driver-mis-ordenes.component.html',
  styleUrls: ['./driver-mis-ordenes.component.css']
})
export class DriverMisOrdenesComponent implements OnInit {
  
  modal = 'false';
  faCheck = faCheck;
  faWindowClose = faWindowClose;
  faThumbtack = faThumbtack;
  faMotorcycle = faMotorcycle;
  faHome = faHome;
  ordenesArray:any;
  ordenes:any
  objetos:any
  tieneO = false;

  constructor(private localSto: LocalStoService) { }

  ngOnInit(): void {
    this.ordenesArray = (JSON.parse(localStorage.getItem('ordenes')||""))
    this.ordenes = (this.localSto.traerOrdenesActuales()[0])
    this.tieneO = this.localSto.traerOrdenesActuales()[1]
    console.log(this.tieneO)

    // console.log(this.ordenes)
  }

  abrirOrden(orden:any){
    console.log(orden)
    this.objetos = orden;
    this.modal = 'true'
  }

  quitarModal(){
    this.modal = 'false'
  }

  cambiarEstado(estado:any, orden:any){
    orden.estado = estado;
    this.ordenesArray[orden.id] = orden;
    console.log(this.ordenesArray)
    localStorage.setItem('ordenes',JSON.stringify(this.ordenesArray))
  }
}
