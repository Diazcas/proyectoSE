import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { LocalStoService } from '../../local-sto.service';

@Component({
  selector: 'app-admin-tabla-orden',
  templateUrl: './admin-tabla-orden.component.html',
  styleUrls: ['./admin-tabla-orden.component.css'],
})
export class AdminTablaOrdenComponent implements OnInit {
  constructor(private locaSto: LocalStoService, private router: Router) {}
  faWindowClose = faWindowClose;

  tableData: any;
  tableHead: any;
  tableName = '';
  ordenSeleccionada: any;
  drivers: any;
  modal = 'false';

  ngOnInit(): void {
    // Ordenes
    let data = this.locaSto.traerTablaOrdenes();
    this.tableData = data[0];
    this.tableHead = data[1];
    this.tableName = data[2];
    console.log(this.tableData);

    this.drivers = this.locaSto.traerDrivers();
  }

  actualizarDriver(id: any) {
    if (this.ordenSeleccionada != null && this.ordenSeleccionada != undefined) {
      console.log(id);
      console.log(this.ordenSeleccionada);
      // this.tableData[this.ordenSeleccionada].driverId = id;

      let ordenes = JSON.parse(localStorage.getItem('ordenes') || '{}');
      ordenes[this.ordenSeleccionada].driverId = id;
      ordenes[this.ordenSeleccionada].estado = 0;
      console.log(ordenes);
      localStorage.setItem('ordenes', JSON.stringify(ordenes));
      let link = ['admin'];
      this.router
        .navigateByUrl('/clientes/login', { skipLocationChange: true })
        .then(() => this.router.navigate(link));
    } else {
      console.log('Una variable no tiene datos');
    }
  }

  activarModal(id: any) {
    this.modal = 'active';
    this.ordenSeleccionada = id;
  }

  quitarModal() {
    this.modal = 'false';
  }
}
