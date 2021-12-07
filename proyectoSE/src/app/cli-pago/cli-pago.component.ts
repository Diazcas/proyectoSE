import { Component, OnInit } from '@angular/core';
import { LocalStoService } from '../local-sto.service'
import {FormGroup, FormControl} from '@angular/forms'
import { ConnectService } from '../connect.service'

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

  constructor(private localSto: LocalStoService, private connectDB: ConnectService) { }

  orden: any

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
      "productos": productos
    }

    // console.log(this.orden)



  }
  
  pagoRealizado(){
    // console.log(this.orden)
    this.connectDB.guardarOrden(this.orden)
    localStorage.removeItem('carritoActual')
    // this.localSto.agregarOrden(this.orden);
  }


}
