import { Component, OnInit } from '@angular/core';
import { LocalStoService } from '../local-sto.service'
import {FormGroup, FormControl} from '@angular/forms'

@Component({
  selector: 'app-cli-pago',
  templateUrl: './cli-pago.component.html',
  styleUrls: ['./cli-pago.component.css']
})
export class CliPagoComponent implements OnInit {
  pagoForm = new FormGroup({
    metodo : new FormControl(''),
    tarjeta : new FormControl(''),
    codigo : new FormControl(''),
    fecha : new FormControl('')
  })

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
      "totalOrden": cuenta.total,
      "costes": cuenta,
      "productos": productos
    }



  }
  
  pagoRealizado(){
    console.log(this.orden)
    this.localSto.agregarOrden(this.orden);
  }


}
