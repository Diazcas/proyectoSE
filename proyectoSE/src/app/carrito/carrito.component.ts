import { Component, OnInit } from '@angular/core';
import {faWindowClose} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  faWindowClose = faWindowClose;
  
  modalCantidad = 'false'

  
  activarModal(){
    this.modalCantidad = 'active'
  }

  quitarModal(){
    this.modalCantidad = 'false'
  }

  eliminarProd(){
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
