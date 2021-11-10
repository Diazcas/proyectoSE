import { Component, OnInit } from '@angular/core';
import { faWindowClose ,faThumbtack, faMotorcycle, faHome } from '@fortawesome/free-solid-svg-icons'
import { LocalStoService } from '../local-sto.service'

@Component({
  selector: 'app-driver-mis-ordenes',
  templateUrl: './driver-mis-ordenes.component.html',
  styleUrls: ['./driver-mis-ordenes.component.css']
})
export class DriverMisOrdenesComponent implements OnInit {
  
  modal = 'false';
  
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
    this.ordenes  = ['[]']
    this.ordenesArray = (JSON.parse(localStorage.getItem('ordenes')||""))

    this.ordenesArray.forEach((element:any) => {

      if(element.driverId == localStorage.getItem('driver')){
        this.tieneO = true
        if(this.ordenes[0] == '[]'){
          if(element.driverId != null){
            this.ordenes[0] = element;
          }
        } else{
          if(element.driverId != null){
            this.ordenes.push(element)
          }
        }
      }
    });

    console.log(this.ordenes)
  }

  abrirOrden(orden:any){
    console.log(orden)
    this.objetos = orden;
    this.modal = 'true'
  }

  quitarModal(){
    this.modal = 'false'
  }
}
