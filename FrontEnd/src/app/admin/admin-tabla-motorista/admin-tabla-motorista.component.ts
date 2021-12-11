import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faWindowClose, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ConnectService } from '../../connect.service';
@Component({
  selector: 'app-admin-tabla-motorista',
  templateUrl: './admin-tabla-motorista.component.html',
  styleUrls: ['./admin-tabla-motorista.component.css']
})
export class AdminTablaMotoristaComponent implements OnInit {
  constructor(private connect: ConnectService, private router: Router) {}
  faWindowClose = faWindowClose;
  faTrash = faTrash;

  tableData: any;
  tableHead: any;
  tableName = '';
  modal = false;
  driverSeleccionado:any

  async ngOnInit(): Promise<void> {
    //Motoristas
    let data: any = await this.connect.tablaMotorista();
    this.tableData = data[0];
    this.tableHead = data[1];
    this.tableName = data[2];
    // console.log(this.tableData);
  }

  cambiarEstadoMotorista(estado: boolean, driver: any) {
    driver.estado = estado;
    // console.log(estado, driver);
    this.connect.actualizarDriver(driver);
  }

  quitarModal() {
    this.modal = false;
  }

  modalEliminarDriver(driver: any) {
    this.modal = true;
    this.driverSeleccionado = driver;
  }

  eliminarMoto(){
    this.connect.eliminarDriverId(this.driverSeleccionado);
    this.quitarModal();
    let link = ['admin'];
    this.router
      .navigateByUrl('/clientes/login', { skipLocationChange: true })
      .then(() => this.router.navigate(link));
  }
}

