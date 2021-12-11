import { Component, OnInit } from '@angular/core';
import { faWindowClose, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  faTrash = faTrash;
  faWindowClose = faWindowClose;
  modal = 'false';
  precioArticulos: number = 0;
  precioISV: number = 0;
  precioEnvio: number = 0;
  precioTotal: number = 0;
  carritoArray: any;
  carrito: any;
  cuentaTotal: any
  carritoLleno = false;

  constructor() { }

  ngOnInit(): void {
    this.sacarCuenta();
  }

  activarModal() {
    this.modal = 'active'
  }

  quitarModal() {
    this.modal = 'false'
  }

  eliminarProd(i:any) {
    this.carrito.splice(i,1)
    localStorage.setItem('carritoActual', JSON.stringify(this.carrito))
    setTimeout(() => {
      this.sacarCuenta()
    }, 100);
  }

  guardarObjetos() {
    localStorage.setItem('cuentaTotalActual', JSON.stringify(this.cuentaTotal))
  }

  sacarCuenta(){
    this.precioArticulos = 0;
    this.precioEnvio = 0;
    this.precioISV = 0;
    this.precioTotal = 0;
    
    this.carrito = JSON.parse(localStorage.getItem('carritoActual') || "{}");
    if (this.carrito.length > 0) {
      this.carritoLleno = true

      for (let i = 0; i < this.carrito.length; i++) {
        let producto = this.carrito[i];

        this.precioArticulos += producto.precio * producto.cantidad;
        this.precioEnvio += 1 * producto.cantidad;
      }
      this.precioISV = Math.round(((this.precioArticulos * 0.15) + Number.EPSILON) * 100) / 100;
      this.precioTotal = Math.round(((this.precioArticulos + this.precioISV + this.precioEnvio) + Number.EPSILON) * 100) / 100;

      this.cuentaTotal = {
        costePro: this.precioArticulos,
        precioEnv: this.precioEnvio,
        ISV: this.precioISV,
        total: this.precioTotal,
      }
    } else {
      this.carritoLleno = false
    }
  }
}