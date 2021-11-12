import { Component, Input, OnInit } from '@angular/core';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { LocalStoService } from '../local-sto.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css'],
})
export class CompanyDetailComponent implements OnInit {
  @Input() data = '';
  cantidadForm = new FormGroup({
    cantidad: new FormControl(''),
  });

  info: any;
  compania: any;
  faWindowClose = faWindowClose;
  modalCantidad = 'false';
  productoActual: any;

  constructor(
    private localSto: LocalStoService,
    private router: Router) {}

  ngOnInit(): void {
    this.info = this.data[0];
    this.compania = this.localSto.verCompaniaActual(
      this.info.categoria,
      this.info.companiaId
    );
    console.log(this.compania);
  }

  activarModal(producto: any) {
    this.modalCantidad = 'active';
    this.productoActual = producto;
  }

  quitarModal() {
    this.modalCantidad = 'false';
  }

  agregarProducto() {
    if (localStorage.getItem('idClienteActivo') != 'null') {
      console.log(this.productoActual);
      console.log(this.cantidadForm.value);
      let producto = this.arreglarProducto();
      this.localSto.agregarProdCarrito(producto);
      this.quitarModal();
    } else {
      alert('Inicia sesion primero!');
    }
  }

  arreglarProducto() {
    let arreglo1 = JSON.stringify(this.cantidadForm.value).replace('{', ',');
    let arreglo2 = JSON.stringify(this.productoActual).replace('}', arreglo1);
    let productoF = JSON.parse(arreglo2);
    return productoF;
  }
}
