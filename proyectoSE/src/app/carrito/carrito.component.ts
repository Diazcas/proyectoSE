import { Component, OnInit } from '@angular/core';
import {faWindowClose} from '@fortawesome/free-solid-svg-icons';
import { LocalStoService } from 'src/app/local-sto.service'

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  faWindowClose = faWindowClose;
  modal = 'false';
  precioArticulos:number = 0;
  precioISV:number = 0;
  precioEnvio:number = 0;
  precioTotal:number = 0;
  carritoArray:any;
  carrito:any;

  constructor(private localSto:LocalStoService) { }

  ngOnInit(): void {
    this.carritoArray = this.localSto.traerCarrito(0).productos;
    this.carrito = [{}]
    for(let i = 0; i < this.carritoArray.length; i++){
      let producto = this.localSto.traerProducto(this.carritoArray[i].categoria,this.carritoArray[i].compania,this.carritoArray[i].idProducto)
      if(i != 0){
        this.carrito.push(producto)
      } else{
        this.carrito[0] = producto;
      }
      this.precioArticulos += producto.precio * this.carritoArray[i].cantidad;
      this.precioEnvio += 1.5 * this.carritoArray[i].cantidad;
    }
    this.precioISV = Math.round(((this.precioArticulos * 0.15) + Number.EPSILON) * 100) /100;
    this.precioTotal = Math.round(((this.precioArticulos + this.precioISV + this.precioEnvio) + Number.EPSILON) * 100) /100;
    console.log(this.precioArticulos)

    console.log(this.carritoArray)
  }
  
  activarModal(){
    this.modal = 'active'
  }

  quitarModal(){
    this.modal = 'false'
  }

  eliminarProd(){
    
  }

  agregarProd(){
    console.log(this.carritoArray)
    localStorage.setItem('carritoActual', JSON.stringify(this.carritoArray));
  }



}
