import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { faCoffee, faWindowClose, faBars  } from '@fortawesome/free-solid-svg-icons';
import { LocalStoService } from '../local-sto.service'
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  faCoffee = faCoffee;
  faBars = faBars;
  regionVisible = '';
  faWindowClose = faWindowClose;
  navbar = 'false'
  sesion:string = '';
  nombreCliente = localStorage.getItem('idClienteActivoNombre')
  productosCarrito = JSON.parse(localStorage.getItem('carritoActual') || '[]').length

  constructor(
    private router: Router,
    private localSto:LocalStoService) { }

  ngOnInit(): void {
    this.sesion = localStorage.getItem('cuentaActivada') || ''
    setInterval(() =>{
      this.productosCarrito = JSON.parse(localStorage.getItem('carritoActual') || '[]').length }, 500);
  }

  cambiarPant(){
    this.router.navigateByUrl('/clientes')
  }

  verModal(){
    this.regionVisible = "modal";
  }

  quitarModal(){
    this.regionVisible = "";
  }

  cerrarSesion(){
    localStorage.setItem('cuentaActivada','0');
    localStorage.setItem('idClienteActivo', 'null')
    localStorage.removeItem('carritoActual')
    let link = ["clientes"]
    this.router.navigateByUrl('/clientes/login', {skipLocationChange: true}).then(()=>
    this.router.navigate(link)); 
  }

  configCuenta(){
    
  }

  mostrarNav(){
    if(this.navbar == 'false'){
      this.navbar = 'active'
    } else{
      this.navbar = 'false'
    }
  }
}
