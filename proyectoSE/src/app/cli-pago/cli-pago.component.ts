import { Component, OnInit } from '@angular/core';
import { LocalStoService } from '../local-sto.service'

@Component({
  selector: 'app-cli-pago',
  templateUrl: './cli-pago.component.html',
  styleUrls: ['./cli-pago.component.css']
})
export class CliPagoComponent implements OnInit {

  constructor(private localSto: LocalStoService) { }

  orden: any

  ngOnInit(): void {
    let direccion = JSON.parse( localStorage.getItem('direccion')||'')
    let cuenta = JSON.parse( localStorage.getItem('cuentaTotalActual')||'')
    let nombre = this.localSto.buscarCliId(localStorage.getItem('idClienteActivo'))
    let productos = JSON.parse( localStorage.getItem('carritoActual')||'')

    this.orden = {
      "id": JSON.parse(localStorage.getItem('ordenes')||'').length,
      "clienteNombre": nombre,
      "driverId": null,
      "estado": null,
      "direccion": direccion,
      "totalOrden": 50,
      "costes": cuenta,
      "productos": productos
    }

  }
  
  pagoRealizado(){
    console.log(this.orden)
    this.localSto.agregarOrden(this.orden);
  }


}
