import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { LocalStoService } from '../local-sto.service'
import { ConnectService } from '../connect.service'

@Component({
  selector: 'app-cli-crear-cuenta',
  templateUrl: './cli-crear-cuenta.component.html',
  styleUrls: ['./cli-crear-cuenta.component.css'],
})
export class CliCrearCuentaComponent implements OnInit {
  constructor(private localSto:LocalStoService, private connectDB: ConnectService) {}

  formularioCliente = new FormGroup({
    nombre : new FormControl('', [Validators.required]),
    apellido : new FormControl('', [Validators.required]),
    email : new FormControl('', [Validators.required, Validators.email]),
    password : new FormControl('', [Validators.required, Validators.minLength(5)]),
    tel : new FormControl('', [Validators.required]),
  });

  formularioRepartidor = new FormGroup({
    pNombre : new FormControl('', [Validators.required]),
    sNombre : new FormControl('', [Validators.required]),
    pApellido : new FormControl('', [Validators.required]),
    sApellido : new FormControl('', [Validators.required]),
    email : new FormControl('', [Validators.required, Validators.email]),
    password : new FormControl('', [Validators.required, Validators.minLength(5)]),
    tel : new FormControl('', [Validators.required]),
    estado : new FormControl(false)
  });

  mostrarRegion = 'cliente';

  ngOnInit(): void {}

  cambiarform(form: string) {
    this.mostrarRegion = form;
  }

  guardarCli(){
    if(this.formularioCliente.valid){
      this.connectDB.guardarCliente(this.formularioCliente.value)
    } else{
      alert("Error en los datos")
    }
  }

  guardarRep(){
    if(this.formularioRepartidor.valid){
      this.connectDB.guardarDriver(this.formularioRepartidor.value)
    } else{
      alert("Error en los datos")
    }
  }

  get password(){
    if(this.mostrarRegion == 'repartidor'){
      return this.formularioRepartidor.get('password');
    }else{
      return this.formularioCliente.get('password');
    }
  }
  get email(){
    if(this.mostrarRegion == 'repartidor'){
      return this.formularioRepartidor.get('email');
    }else{
      return this.formularioCliente.get('email');
    }
  }



}
