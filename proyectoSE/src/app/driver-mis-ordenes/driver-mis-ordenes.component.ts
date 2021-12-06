import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {faCheck , faWindowClose ,faThumbtack, faMotorcycle, faHome } from '@fortawesome/free-solid-svg-icons'
import { ConnectService } from '../connect.service'

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
  ordenes:any
  objetos:any
  tieneO = false;
  cargando = true;

  constructor(private connectDb: ConnectService, private router: Router) { }

  async ngOnInit(): Promise<void> {
    this.ordenes = await this.connectDb.traerOrdenSeguimiento(localStorage.getItem('driverSesion_id'))
    this.cargando = false
    if(this.ordenes.length > 0){
      this.tieneO = true
    }
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
    this.connectDb.actualizarOrden(orden);
  }

  verMapa(dir:any){
    console.log(dir)
    localStorage.setItem('driverDir',JSON.stringify(dir))
    this.router.navigate(['driver/ordenUbicacion'])
  }
}
