import { Component, Input, OnInit } from '@angular/core';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConnectService } from '../../../connect.service';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css'],
})
export class CompanyDetailComponent implements OnInit {
  @Input() data = '';
  cantidadForm = new FormGroup({
    cantidad: new FormControl('', [Validators.required, Validators.min(1)]),
  });

  constructor(private connectBd: ConnectService) {}

  error = 0;
  info: any;
  compania: any = {
    banner: 'espere.jpg',
  };
  productos: any = [];
  faWindowClose = faWindowClose;
  modalCantidad = 'false';
  productoActual: any;
  productoAgregado = false;

  async ngOnInit(): Promise<void> {
    this.info = this.data[0];
    console.log(this.info.companiaId)
    this.compania = await this.connectBd.traerEmpresaId(this.info.companiaId);
    this.productos = await this.connectBd.traerProductosPorIdCate(
      this.info.companiaId
    );

    console.log(this.compania)
    console.log(this.productos)
  }

  activarModal(producto: any) {
    this.modalCantidad = 'active';
    this.productoActual = producto;
  }

  quitarModal() {
    this.modalCantidad = 'false';
  }

  agregarProducto() {
    if (
      localStorage.getItem('idClienteActivo') &&
      localStorage.getItem('idClienteActivo') != 'null'
    ) {
      if (this.cantidadForm.valid) {
        let producto = this.arreglarProducto();
        this.agregarProdCarrito(producto);
        this.error = 0;
        this.productoAgregado = true;
        setTimeout(() => {
          this.quitarModal();
          this.productoAgregado = false;
        }, 1500);
      } else {
        this.error = 2;
      }
    } else {
      this.error = 1;
    }
  }

  arreglarProducto() {
    let arreglo1 = JSON.stringify(this.cantidadForm.value).replace('{', ',');
    let arreglo2 = JSON.stringify(this.productoActual).replace('}', arreglo1);
    let productoF = JSON.parse(arreglo2);
    return productoF;
  }

  agregarProdCarrito(prod: any) {
    let carrito = localStorage.getItem('carritoActual') || '[]';
    if (JSON.parse(carrito).length == 0) {
      carrito = carrito.replace(']', `${JSON.stringify(prod)}]`);
      localStorage.setItem('carritoActual', carrito);
    } else {
      carrito = carrito.replace(']', `,${JSON.stringify(prod)}]`);
      localStorage.setItem('carritoActual', carrito);
    }
  }
}
