import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  regionVisible = '';
  navbar = false;
  sesion: string = '';
  nombreCliente = localStorage.getItem('clienteActivoNom');
  productosCarrito = JSON.parse(localStorage.getItem('carritoActual') || '[]')
    .length;
  res: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.sesion = localStorage.getItem('cuentaActivada') || '0';
    setInterval(() => {
      this.productosCarrito = JSON.parse(
        localStorage.getItem('carritoActual') || '[]'
      ).length;
    }, 500);

    setInterval(() => {
      this.res = window.innerWidth;
      if (this.res > 769) {
        this.navbar = true;
      }
    }, 100);
  }

  cambiarPant() {
    this.router.navigateByUrl('/clientes');
  }

  verModal() {
    this.regionVisible = 'modal';
  }

  quitarModal() {
    this.regionVisible = '';
  }

  cerrarSesion() {
    localStorage.removeItem('clienteActivoNom');
    localStorage.removeItem('clienteActivoApe');
    localStorage.removeItem('cuentaActivada');
    localStorage.removeItem('cuentaTotalActual');
    localStorage.removeItem('direccion');
    localStorage.setItem('cuentaActivada', '0');
    localStorage.removeItem('idClienteActivo');
    localStorage.removeItem('carritoActual');
    let link = ['clientes'];
    this.router
      .navigateByUrl('/clientes/login', { skipLocationChange: true })
      .then(() => this.router.navigate(link));
  }

  mostrarNav() {
    if (this.navbar == false) {
      this.navbar = true;
    } else {
      this.navbar = false;
    }
  }
}
