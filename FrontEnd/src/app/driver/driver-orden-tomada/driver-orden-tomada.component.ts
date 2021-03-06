import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {faCheck , faWindowClose ,faThumbtack, faMotorcycle, faHome } from '@fortawesome/free-solid-svg-icons'
import { ConnectService } from '../../connect.service'
@Component({
  selector: 'app-driver-orden-tomada',
  templateUrl: './driver-orden-tomada.component.html',
  styleUrls: ['./driver-orden-tomada.component.css']
})
export class DriverOrdenTomadaComponent implements OnInit {
  
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
  detalle = false;
  ordenSelec: any
  finalizada = false;

  constructor(private connectDb: ConnectService, private router: Router) { }

  async ngOnInit(): Promise<void> {
    this.ordenes = await this.connectDb.traerOrdenSeguimiento(localStorage.getItem('driverSesion_id'))
    this.cargando = false
    if(this.ordenes.length > 0){
      this.tieneO = true
    }
    // console.log(this.tieneO)

    // console.log(this.ordenes)
  }

  abrirOrden(orden:any){
    // console.log(orden)
    this.detalle = false;
    this.objetos = orden;
    this.modal = 'true'
  }

  quitarModal(){
    this.modal = 'false'
  }

  cambiarEstado(i:any,estado:any, orden:any){
    this.ordenSelec = [i,orden]
    if(estado == 3){
      this.modal = 'true';
      this.detalle = true;
    }else{
      orden.estado = estado;
      this.connectDb.actualizarOrden(orden);
    }
  }

  finalizarOrden(){
    this.ordenes.splice(this.ordenSelec[0],1)
    this.ordenSelec[1].estado = '3'
    this.connectDb.actualizarOrden(this.ordenSelec[1]);
    this.finalizada = true 
    setTimeout(() => {
      this.quitarModal()
      this.finalizada = false 
    }, 1000);
  }

  verMapa(dir:any){
    // console.log(dir)
    localStorage.setItem('driverDir',JSON.stringify(dir))
    this.router.navigate(['driver/ordenUbicacion'])
  }
}
