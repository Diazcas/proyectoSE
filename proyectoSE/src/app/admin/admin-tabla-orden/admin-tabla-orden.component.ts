import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faWindowClose, faTrash, faCheck ,faThumbtack, faMotorcycle, faHome  } from '@fortawesome/free-solid-svg-icons';
import { ConnectService } from '../../connect.service';

@Component({
  selector: 'app-admin-tabla-orden',
  templateUrl: './admin-tabla-orden.component.html',
  styleUrls: ['./admin-tabla-orden.component.css'],
})
export class AdminTablaOrdenComponent implements OnInit {
  constructor(private connect: ConnectService, private router: Router) {}
  faWindowClose = faWindowClose;
  faTrash = faTrash;
  faCheck = faCheck
  faThumbtack = faThumbtack
  faMotorcycle = faMotorcycle
  faHome = faHome

  tableData: any;
  tableHead: any;
  tableName = '';
  ordenSeleccionada: any;
  drivers: any;
  modal = 'false';
  bOrden = false;
  sDriver = false;
  confirmacion = false;

  async ngOnInit(): Promise<void> {
    // Ordenes
    let data: any = await this.connect.tablaOrdenes();
    this.tableData = data[0];
    this.tableHead = data[1];
    this.tableName = data[2];
    // console.log(this.tableData);

    data = await this.connect.tablaMotorista();
    this.drivers = data[0];
    // console.log(this.drivers);
  }

  actualizarDriver(driver: any) {
    if (this.ordenSeleccionada != null && this.ordenSeleccionada != undefined) {
      // console.log(driver);
      this.ordenSeleccionada.driverId = driver._id;
      this.ordenSeleccionada.driverNombre =
        driver.pNombre + ' ' + driver.pApellido;
      this.ordenSeleccionada.estado = 0;
      // console.log(this.ordenSeleccionada);

      this.connect.actualizarOrden(this.ordenSeleccionada);

      // let ordenes = JSON.parse(localStorage.getItem('ordenes') || '{}');
      // ordenes[this.ordenSeleccionada].driverId = id;
      // ordenes[this.ordenSeleccionada].estado = 0;
      // console.log(ordenes);
      // localStorage.setItem('ordenes', JSON.stringify(ordenes));

      let link = ['admin'];
      this.router
        .navigateByUrl('/clientes/login', { skipLocationChange: true })
        .then(() => this.router.navigate(link));
    } else {
      // console.log('Una variable no tiene datos');
    }
  }

  activarModal(orden: any) {
    this.sDriver = true;
    this.modal = 'active';
    this.ordenSeleccionada = orden;
  }

  quitarModal() {
    this.modal = 'false';
    this.sDriver = false;
    this.bOrden = false;
  }

  modalEliminarOrden(orden: any) {
    this.modal = 'active';
    this.bOrden = true;
    this.ordenSeleccionada = orden;
  }

  eliminarOrden() {
    this.connect.eliminarOrdenId(this.ordenSeleccionada);
    this.quitarModal();
    let link = ['admin'];
    this.router
      .navigateByUrl('/clientes/login', { skipLocationChange: true })
      .then(() => this.router.navigate(link));
  }
}
