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
  constructor(
    private locaSto: LocalStoService,
    private router: Router) {}
  faWindowClose = faWindowClose;

  visible = 'orden';
  modal = 'false';

  tableData: any;
  tableHead: any;
  tableName = '';
  drivers : any
  ordenSeleccionada: any

  ngOnInit(): void {
    //EMPRESAS
    // let data = this.locaSto.traerTablaEmpresas()
    // this.tableData = data[0]
    // this.tableHead = data[1]
    // this.tableName = data[2]
    // console.log(this.tableData[0])

    //Productos
    // let data = this.locaSto.traerTablaProductos()
    // this.tableData = data[0]
    // this.tableHead = data[1]
    // this.tableName = data[2]
    // console.log(this.tableData)

    //Motoristas
    // let data = this.locaSto.traerTablaMotorista()
    // this.tableData = data[0]
    // this.tableHead = data[1]
    // this.tableName = data[2]
    // console.log(this.tableData)

    //Ordenes
    let data = this.locaSto.traerTablaOrdenes();
    this.tableData = data[0];
    this.tableHead = data[1];
    this.tableName = data[2];
    console.log(this.tableData);

    this.drivers = (this.locaSto.traerDrivers())
  }

  cambiarEstadoMotorista(estado: boolean, id: number) {
    console.log(estado, id);
    this.tableData[id].estado = estado;
    console.log(this.tableData);
    localStorage.setItem('drivers', JSON.stringify(this.tableData));
    this;
  }

  actualizarDriver(id:any) {

    if(this.ordenSeleccionada != null && this.ordenSeleccionada != undefined){
      console.log(id)
      console.log(this.ordenSeleccionada)
      // this.tableData[this.ordenSeleccionada].driverId = id;
      
      let ordenes = (JSON.parse(localStorage.getItem('ordenes')||"{}"))
      ordenes[this.ordenSeleccionada].driverId = id;
      ordenes[this.ordenSeleccionada].estado = 1;
      console.log(ordenes)
      localStorage.setItem('ordenes',JSON.stringify(ordenes))
      let link = ["admin"]
      this.router.navigateByUrl('/clientes/login', {skipLocationChange: true}).then(()=>
      this.router.navigate(link)); 
    }else{ 
      console.log('Una variable no tiene datos')
    }
  }

  activarModal(id:any) {
    this.modal = 'active';
    this.ordenSeleccionada = id;
  }

  quitarModal() {
    this.modal = 'false';
  }
}
