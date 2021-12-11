import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faShoppingCart  } from '@fortawesome/free-solid-svg-icons';
import { ConnectService } from '../../../connect.service'

@Component({
  selector: 'app-nav-categorias',
  templateUrl: './nav-categorias.component.html',
  styleUrls: ['./nav-categorias.component.css']
})
export class NavCategoriasComponent implements OnInit {
  @Output() cambiarCategoria = new EventEmitter();
  faShoppingCart = faShoppingCart;
  categorias:any

  constructor(private connectBd: ConnectService) {
  }
  
  async ngOnInit(): Promise<void> {
    this.categorias = await this.connectBd.traerCategorias();
    // console.log(this.categorias);
  }

  mostrarCategoria(categorias:string){
    console.log(categorias)
    this.cambiarCategoria.emit(categorias)
  }
}
