import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { Router } from '@angular/router'
import { LocalStoService } from '../../local-sto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private localSto:LocalStoService) {}

  iniciarSesionForm = new FormGroup({
    email : new FormControl('', [Validators.required]),
    password : new FormControl('', [Validators.required])
  })
  visible = 'empresas';
  sesion = localStorage.getItem('adminSesion') || '0';
  error = 0;


  ngOnInit(): void {}

  cambiarTabla(tabla: string) {
    this.visible = tabla;
  }

  iniciarSesion(){
    let adminId = (this.localSto.buscarAdmin(this.iniciarSesionForm.value))
    console.log(adminId)
    if(adminId !== false){
      this.localSto.actualizarDriver(adminId)
      this.sesion = '1'
      localStorage.setItem('adminSesion', '1');
    } else{
      this.error = 1;
    }

  }
}
