import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {faCheck , faWindowClose ,faThumbtack, faMotorcycle, faHome } from '@fortawesome/free-solid-svg-icons'
import { ConnectService } from '../connect.service'

@Component({
  selector: 'app-driver-orden-disponible',
  templateUrl: './driver-orden-disponible.component.html',
  styleUrls: ['./driver-orden-disponible.component.css']
})
export class DriverOrdenDisponibleComponent implements OnInit {
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
    this.ordenes = await this.connectDb.traerOrdenDisponible()
    this.cargando = false

    if(this.ordenes.length > 0){
      this.tieneO = true
    }

    // console.log(this.tieneO)
  }

  abrirOrden(orden:any){
    // console.log(orden)
    this.objetos = orden;
    this.modal = 'true'
  }

  quitarModal(){
    this.modal = 'false'
  }

  cambiarEstado(estado:any, orden:any){
    // console.log(orden)
    orden.estado = estado;
    orden.driverId = localStorage.getItem('driverSesion_id')
    orden.driverNombre = localStorage.getItem('driverSesion_nombre')
    this.connectDb.actualizarOrden(orden);

    let link = ["/driver/ordenesDisponibles"]
    this.router.navigateByUrl('/clientes/login', {skipLocationChange: true}).then(()=>
    this.router.navigate(link)); 
  }

  verMapa(dir:any){
    // console.log(dir)
    localStorage.setItem('driverDir',JSON.stringify(dir))
    this.router.navigate(['driver/ordenUbicacion'])
  }
}
