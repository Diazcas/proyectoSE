import { Component, OnInit, NgModule } from '@angular/core';
import {faWindowClose} from '@fortawesome/free-solid-svg-icons';
import { MapService } from '../map.service';

@Component({
  selector: 'app-cli-ubicacion',
  templateUrl: './cli-ubicacion.component.html',
  styleUrls: ['./cli-ubicacion.component.css']
})
export class CliUbicacionComponent implements OnInit {
  faWindowClose = faWindowClose;
  mapa:any;
  direccion:any;
  interval:any;
  modal = 'false';
  carritoActual:any;

  constructor(private map: MapService) { }

  ngOnInit(): void {

    localStorage.setItem('direccionCambio', '0')

    this.mapa = this.map.buildMap();
    this.map.crearMarcador(this.mapa,-86.5689223,14.0193161)

    this.interval = setInterval(() => {
      this.verificarDireccion()
    }, 500);

    this.carritoActual = JSON.parse(localStorage.getItem('carritoActual')||'')
    console.log(this.carritoActual)
  }
  
  verificarDireccion(){
    if(localStorage.getItem('direccionCambio') == '1'){
      this.direccion = JSON.parse(localStorage.getItem('direccion') || '[]')
      console.log('Esta es: ', this.direccion)
      clearInterval(this.interval)
      this.activarModal()

    } else{
    }
  }
  
  activarModal(){
    this.modal = 'active'
  }

  quitarModal(){
    this.modal = 'false';
    this.interval = setInterval(() => {
      this.verificarDireccion()
    }, 500);
    localStorage.setItem('direccionCambio', '0')
  }

}
