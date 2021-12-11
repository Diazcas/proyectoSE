import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConnectService } from '../../connect.service';

@Component({
  selector: 'app-editar-cuenta',
  templateUrl: './editar-cuenta.component.html',
  styleUrls: ['./editar-cuenta.component.css'],
})
export class EditarCuentaComponent implements OnInit {
  constructor(private connect: ConnectService) {}

  formularioCliente = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    tel: new FormControl('', [Validators.required]),
  });

  async ngOnInit(): Promise<void> {
    let cliente: any = await this.connect.traerCliente(
      localStorage.getItem('idClienteActivo')
    );
    this.formularioCliente.patchValue({
      nombre: cliente.nombre,
      apellido: cliente.apellido,
      email: cliente.email,
      password: cliente.password,
      tel: cliente.tel
    });
  }

  get password() {
    return this.formularioCliente.get('password');
  }
  get email() {
    return this.formularioCliente.get('email');
  }

  actualizar(){
    this.connect.actualizarCliente(this.formularioCliente.value)
  }
}
