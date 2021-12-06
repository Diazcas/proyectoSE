import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {faCheck , faWindowClose ,faThumbtack, faMotorcycle, faHome } from '@fortawesome/free-solid-svg-icons'
import { ConnectService } from '../connect.service'

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
  cargando = true;

  constructor(private connectDb: ConnectService, private router: Router) { }

  async ngOnInit(): Promise<void> {
    this.ordenes = await this.connectDb.traerOrdenFinalizadas(localStorage.getItem('driverSesion_id'))
    this.cargando = false
    if(this.ordenes.length > 0){
      this.tieneO = true
    }

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

  verMapa(dir:any){
    console.log(dir)
    localStorage.setItem('driverDir',JSON.stringify(dir))
    this.router.navigate(['driver/ordenUbicacion'])
  }
}
