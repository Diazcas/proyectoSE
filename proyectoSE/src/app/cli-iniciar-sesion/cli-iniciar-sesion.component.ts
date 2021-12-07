import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { Router } from '@angular/router'
import { LocalStoService } from '../local-sto.service'
import { ConnectService } from '../connect.service'

@Component({
  selector: 'app-cli-iniciar-sesion',
  templateUrl: './cli-iniciar-sesion.component.html',
  styleUrls: ['./cli-iniciar-sesion.component.css']
})
export class CliIniciarSesionComponent implements OnInit {
  constructor(
    private localSto: LocalStoService,
    private router: Router,
    private connectDB: ConnectService){ }

  iniciarSesionForm = new FormGroup({
    email : new FormControl('', [Validators.required]),
    password : new FormControl('', [Validators.required])
  })
  error = 0;

  ngOnInit(): void {
  }

  async iniciarSesion(){

    let clienteEncontrado:any =  await this.connectDB.iniciarSesionCliente(this.iniciarSesionForm.value)
    // console.log(this.iniciarSesionForm.value)
    // console.log(clienteEncontrado)

    if(clienteEncontrado[0] !== false){
      // console.log('Te redirijo')
      this.router.navigate(['/clientes'])
      localStorage.setItem('cuentaActivada','1')
      localStorage.setItem('idClienteActivo', clienteEncontrado[1])
      localStorage.setItem('clienteActivoNom', clienteEncontrado[2])
      localStorage.setItem('clienteActivoApe', clienteEncontrado[3])
    }else{
      this.error = 1;
    }
  }

}
