import { Component, OnInit } from '@angular/core';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { LocalStoService } from '../../local-sto.service';

@Component({
  selector: 'app-admin-tabla-producto',
  templateUrl: './admin-tabla-producto.component.html',
  styleUrls: ['./admin-tabla-producto.component.css'],
})
export class AdminTablaProductoComponent implements OnInit {
  constructor(private locaSto: LocalStoService) {}
  faWindowClose = faWindowClose;

  tableData: any;
  tableHead: any;
  tableName = '';

  ngOnInit(): void {
    // Productos
    let data = this.locaSto.traerTablaProductos();
    this.tableData = data[0];
    this.tableHead = data[1];
    this.tableName = data[2];
    console.log(this.tableData);
  }
}
