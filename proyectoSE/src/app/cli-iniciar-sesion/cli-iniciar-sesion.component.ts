import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { Router } from '@angular/router'
import { LocalStoService } from '../local-sto.service'

@Component({
  selector: 'app-cli-iniciar-sesion',
  templateUrl: './cli-iniciar-sesion.component.html',
  styleUrls: ['./cli-iniciar-sesion.component.css']
})
export class CliIniciarSesionComponent implements OnInit {
  constructor(
    private localSto: LocalStoService,
    private router: Router){ }

  iniciarSesionForm = new FormGroup({
    email : new FormControl('', [Validators.required]),
    password : new FormControl('', [Validators.required])
  })

  ngOnInit(): void {
  }

  iniciarSesion(){
    let clienteEncontrado = this.localSto.buscarCli(this.iniciarSesionForm.value);
    console.log(clienteEncontrado)
    if(clienteEncontrado !== false){
      console.log('Te redirijo')
      this.router.navigate(['/clientes'])
      localStorage.setItem('cuentaActivada','1')
      localStorage.setItem('idClienteActivo', clienteEncontrado)
    }else{
      alert('Error de correo o contraseña')
    }
  }

}
