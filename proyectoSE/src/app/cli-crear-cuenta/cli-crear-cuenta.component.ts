import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { LocalStoService } from '../local-sto.service'

@Component({
  selector: 'app-cli-crear-cuenta',
  templateUrl: './cli-crear-cuenta.component.html',
  styleUrls: ['./cli-crear-cuenta.component.css'],
})
export class CliCrearCuentaComponent implements OnInit {
  constructor(private localSto:LocalStoService) {}

  formularioCliente = new FormGroup({
    nombre : new FormControl('', [Validators.required]),
    apellido : new FormControl('', [Validators.required]),
    email : new FormControl('', [Validators.required, Validators.email]),
    contrasenia : new FormControl('', [Validators.required, Validators.minLength(5)]),
    tel : new FormControl('', [Validators.required]),
  });

  formularioRepartidor = new FormGroup({
    pNombre : new FormControl('', [Validators.required]),
    sNombre : new FormControl('', [Validators.required]),
    pApellido : new FormControl('', [Validators.required]),
    sApellido : new FormControl('', [Validators.required]),
    email : new FormControl('', [Validators.required, Validators.email]),
    contrasenia : new FormControl('', [Validators.required, Validators.minLength(5)]),
    tel : new FormControl('', [Validators.required]),
  });

  mostrarRegion = 'cliente';

  ngOnInit(): void {}

  cambiarform(form: string) {
    this.mostrarRegion = form;
  }

  guardarCli(){
    // console.log(this.formularioCliente.value)
    // console.log(this.formularioCliente.valid);
    this.localSto.aniadirCli(this.formularioCliente.value)
  }

  guardarRep(){
    console.log(this.formularioRepartidor.value)
    console.log(this.formularioRepartidor.valid)
  }

  get contrasenia(){
    return this.formularioCliente.get('contrasenia');
  }
}
