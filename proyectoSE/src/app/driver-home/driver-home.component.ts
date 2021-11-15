import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { LocalStoService } from '../local-sto.service'

@Component({
  selector: 'app-driver-home',
  templateUrl: './driver-home.component.html',
  styleUrls: ['./driver-home.component.css']
})
export class DriverHomeComponent implements OnInit {
  iniciarSesionForm = new FormGroup({
    email : new FormControl('', [Validators.required]),
    password : new FormControl('', [Validators.required])
  })
  
  sesion = localStorage.getItem('driverSesion') || '0';
  error = 0;

  constructor(private localSto:LocalStoService) { }

  ngOnInit(): void {
  }

  iniciarSesion(){
    // console.log(this.iniciarSesionForm.value)
    let driverId = (this.localSto.buscarDri(this.iniciarSesionForm.value))
    console.log(driverId)
    if(driverId !== false){
      this.localSto.actualizarDriver(driverId)
      this.sesion = '1'
      localStorage.setItem('driverSesion', '1');
    } else{
      this.error = 1;
    }
  }

}
