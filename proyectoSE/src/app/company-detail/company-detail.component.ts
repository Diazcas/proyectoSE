import { Component, Input, OnInit } from '@angular/core';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { LocalStoService } from '../local-sto.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConnectService } from '../connect.service';

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

  constructor(
    private localSto: LocalStoService,
    private connectBd: ConnectService
  ) {}

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
    this.compania = await this.connectBd.traerEmpresaId(this.info.companiaId);
    this.productos = await this.connectBd.traerProductosPorIdCate(
      this.info.companiaId
    );
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
        this.localSto.agregarProdCarrito(producto);
        this.error = 0;
        this.productoAgregado = true;
        setTimeout(() => {
          this.quitarModal();
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
}
