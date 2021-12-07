import { Component, OnInit } from '@angular/core';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { LocalStoService } from 'src/app/local-sto.service'

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
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

  constructor(private localSto: LocalStoService) { }

  ngOnInit(): void {
    // this.carritoArray = this.localSto.traerCarrito(0).productos;
    // this.carrito = [{}]

    this.carrito = JSON.parse(localStorage.getItem('carritoActual') || "{}");
    if (this.carrito.length > 0) {
      this.carritoLleno = true
      // console.log(this.carrito)

      for (let i = 0; i < this.carrito.length; i++) {
        let producto = this.carrito[i];
        // console.log(producto)

        this.precioArticulos += producto.precio * producto.cantidad;
        this.precioEnvio += 1 * producto.cantidad;
      }



      this.precioISV = Math.round(((this.precioArticulos * 0.15) + Number.EPSILON) * 100) / 100;
      this.precioTotal = Math.round(((this.precioArticulos + this.precioISV + this.precioEnvio) + Number.EPSILON) * 100) / 100;
      // console.log(this.precioArticulos)

      // console.log(this.carritoArray)

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

  activarModal() {
    this.modal = 'active'
  }

  quitarModal() {
    this.modal = 'false'
  }

  eliminarProd() {

  }

  guardarObjetos() {
    // console.log(this.carrito)
    // console.log(this.cuentaTotal)
    localStorage.setItem('cuentaTotalActual', JSON.stringify(this.cuentaTotal))
  }
}
