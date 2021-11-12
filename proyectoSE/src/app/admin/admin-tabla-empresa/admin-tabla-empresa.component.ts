import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { LocalStoService } from '../../local-sto.service';

@Component({
  selector: 'app-admin-tabla-empresa',
  templateUrl: './admin-tabla-empresa.component.html',
  styleUrls: ['./admin-tabla-empresa.component.css'],
})
export class AdminTablaEmpresaComponent implements OnInit {
  constructor(private locaSto: LocalStoService, private router: Router) {}
  faWindowClose = faWindowClose;

  tableData: any;
  tableHead: any;
  tableName = '';
  drivers: any;
  ordenSeleccionada: any;

  ngOnInit(): void {
    //EMPRESAS
    let data = this.locaSto.traerTablaEmpresas();
    this.tableData = data[0];
    this.tableHead = data[1];
    this.tableName = data[2];
    console.log(this.tableData[0]);
  }
}
