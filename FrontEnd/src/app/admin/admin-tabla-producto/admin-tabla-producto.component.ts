import { Component, OnInit } from '@angular/core';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { ConnectService } from '../../connect.service'

@Component({
  selector: 'app-admin-tabla-producto',
  templateUrl: './admin-tabla-producto.component.html',
  styleUrls: ['./admin-tabla-producto.component.css']
})
export class AdminTablaProductoComponent implements OnInit {
  constructor(private connect: ConnectService) {}
  faWindowClose = faWindowClose;

  tableData: any;
  tableHead: any;
  tableName = '';

  async ngOnInit(): Promise<void> {
    // Productos
    let data:any = await this.connect.tablaProductos();
    this.tableData = data[0];
    this.tableHead = data[1];
    this.tableName = data[2];
    // console.log(this.tableData);
  }
}