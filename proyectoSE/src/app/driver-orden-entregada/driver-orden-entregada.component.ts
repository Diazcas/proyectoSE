import { Component, OnInit } from '@angular/core';
import {faCheck , faWindowClose ,faThumbtack, faMotorcycle, faHome } from '@fortawesome/free-solid-svg-icons'
import { LocalStoService } from '../local-sto.service'

@Component({
  selector: 'app-driver-orden-entregada',
  templateUrl: './driver-orden-entregada.component.html',
  styleUrls: ['./driver-orden-entregada.component.css']
})
export class DriverOrdenEntregadaComponent implements OnInit {

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
    this.ordenes = (this.localSto.traerOrdenesEntregadas()[0])
    this.tieneO = this.localSto.traerOrdenesEntregadas()[1]
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
    // console.log(this.ordenesArray)
    // localStorage.setItem('ordenes',JSON.stringify(this.ordenesArray))
  }
}
