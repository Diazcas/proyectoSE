import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { LocalStoService } from '../../local-sto.service';

@Component({
  selector: 'app-admin-tabla-motorista',
  templateUrl: './admin-tabla-motorista.component.html',
  styleUrls: ['./admin-tabla-motorista.component.css'],
})
export class AdminTablaMotoristaComponent implements OnInit {
  constructor(private locaSto: LocalStoService, private router: Router) {}
  faWindowClose = faWindowClose;

  tableData: any;
  tableHead: any;
  tableName = '';
  ordenSeleccionada: any;

  ngOnInit(): void {
    //Motoristas
    let data = this.locaSto.traerTablaMotorista();
    this.tableData = data[0];
    this.tableHead = data[1];
    this.tableName = data[2];
    console.log(this.tableData);
  }

  cambiarEstadoMotorista(estado: boolean, id: number) {
    console.log(estado, id);
    this.tableData[id].estado = estado;
    console.log(this.tableData);
    localStorage.setItem('drivers', JSON.stringify(this.tableData));
  }
}
