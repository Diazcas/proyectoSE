import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { ConnectService } from '../../connect.service'

@Component({
  selector: 'app-cli-pago',
  templateUrl: './cli-pago.component.html',
  styleUrls: ['./cli-pago.component.css']
})
export class CliPagoComponent implements OnInit {
  pagoForm = new FormGroup({
    metodo : new FormControl('', [Validators.required]),
    tarjeta : new FormControl('', [Validators.required]),
    codigo : new FormControl('', [Validators.required]),
    fecha : new FormControl('', [Validators.required])
  })

  constructor(private connectDB: ConnectService) { }

  orden: any
//prueba
  ngOnInit(): void {
    let direccion = JSON.parse( localStorage.getItem('direccion')||'')
    let cuenta = JSON.parse( localStorage.getItem('cuentaTotalActual')||'')
    let nombre = `${localStorage.getItem('clienteActivoNom')} ${localStorage.getItem('clienteActivoApe')}`
    let productos = JSON.parse( localStorage.getItem('carritoActual')||'')

    this.orden = {
      "clienteId": localStorage.getItem('idClienteActivo'),
      "clienteNombre": nombre,
      "driverId": null,
      "driverNombre": null,
      "estado": null,
      "direccion": direccion,
      "totalOrden": cuenta.total,
      "costes": cuenta,
      "productos": productos,
      "pago": "Tarjeta"
    }

    // console.log(this.orden)



  }
  
  pagoRealizadoTarjeta(){
    this.connectDB.guardarOrden(this.orden)
    localStorage.removeItem('carritoActual')
  }

  pagoRealizadoEfectivo(){
    this.orden.pago = "Efectivo"
    this.connectDB.guardarOrden(this.orden)
    localStorage.removeItem('carritoActual')
  }


}