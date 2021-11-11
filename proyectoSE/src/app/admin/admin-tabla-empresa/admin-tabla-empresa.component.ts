import { Component, OnInit } from '@angular/core';
import { LocalStoService } from '../../local-sto.service';


@Component({
  selector: 'app-admin-tabla-empresa',
  templateUrl: './admin-tabla-empresa.component.html',
  styleUrls: ['./admin-tabla-empresa.component.css']
})
export class AdminTablaEmpresaComponent implements OnInit {

  constructor( private locaSto:LocalStoService) { }

  visible = 'productos'

    tableData:any
    tableHead:any
    tableName = ''

  ngOnInit(): void {
    //EMPRESAS
    // let data = this.locaSto.traerTablaEmpresas()
    // this.tableData = data[0]
    // this.tableHead = data[1]
    // this.tableName = data[2]
    // console.log(this.tableData[0])
    
    //Productos
    let data = this.locaSto.traerTablaProductos()
    this.tableData = data[0]
    this.tableHead = data[1]
    this.tableName = data[2]
    console.log(this.tableData)

  }

  
  

}
