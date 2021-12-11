import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ConnectService } from '../connect.service';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {
  constructor(private connect: ConnectService) {}
  iniciarSesionForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  sesion = localStorage.getItem('driverSesion') || '0';
  error = 0;
  backendHost = 'http://localhost:8888';

  ngOnInit(): void {
    // this.httpClient.get(`${this.backendHost}/driver`)
    // .subscribe(res => {
    //   console.log(res)
    // })
  }

  async iniciarSesion() {
    this.error = 0;
    let driver = this.iniciarSesionForm.value;
    let estado = await this.connect.verificarDriver(driver);
    // console.log(estado)
    if (estado) {
      this.sesion = '1';
      localStorage.setItem('driverSesion', '1');
      localStorage.setItem('driverSesion_id', estado[1]);
      localStorage.setItem('driverSesion_nombre', estado[2]);
    } else {
      this.error = 1;
    }
  }
}