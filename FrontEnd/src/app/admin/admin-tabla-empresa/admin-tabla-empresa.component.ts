import { Component, OnInit } from '@angular/core';
import { faWindowClose, faStar } from '@fortawesome/free-solid-svg-icons';
import { ConnectService } from '../../connect.service'
@Component({
  selector: 'app-admin-tabla-empresa',
  templateUrl: './admin-tabla-empresa.component.html',
  styleUrls: ['./admin-tabla-empresa.component.css']
})
export class AdminTablaEmpresaComponent implements OnInit {
  constructor(private connect: ConnectService) {}
  faStar = faStar
  faWindowClose = faWindowClose;

  tableData: any;
  tableHead: any;
  tableName = '';
  drivers: any;
  ordenSeleccionada: any;

  async ngOnInit(): Promise<void> {
    //EMPRESAS
    let data:any = await this.connect.tablaEmpresas();
    // console.log(data[0])
    this.tableData = data[0];
    this.tableHead = data[1];
    this.tableName = data[2];
    // console.log(this.tableData[0]);
  }
}