import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { ConnectService } from '../connect.service'


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  constructor(private connectDB: ConnectService) {}

  iniciarSesionForm = new FormGroup({
    email : new FormControl('', [Validators.required]),
    password : new FormControl('', [Validators.required])
  })
  
  visible = 'empresas';
  sesion = localStorage.getItem('adminSesion');
  error = 0;


  ngOnInit(): void {
    setInterval(()=>{
      this.sesion = localStorage.getItem('adminSesion') || '0';
    },100)
  }

  cambiarTabla(tabla: string) {
    this.visible = tabla;
  }

  async iniciarSesion(){
    let admin = await this.connectDB.iniciarSesionAdmin(this.iniciarSesionForm.value)
    // console.log(admin)
    if(admin){
      localStorage.setItem('adminSesion', '1');
    } else{
      this.error = 1;
    }

  }
}
