import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faShoppingCart  } from '@fortawesome/free-solid-svg-icons';
import { LocalStoService } from '../local-sto.service';

@Component({
  selector: 'app-nav-categorias',
  templateUrl: './nav-categorias.component.html',
  styleUrls: ['./nav-categorias.component.css']
})
export class NavCategoriasComponent implements OnInit {
  @Output() cambiarCategoria = new EventEmitter();
  faShoppingCart = faShoppingCart;
  categorias:string[] = (this.localSto.traerCategorias())

  constructor(private localSto: LocalStoService) {
  }
  
  ngOnInit(): void {
    // console.log(this.categorias)
  }

  mostrarCategoria(categoria:string){
    this.cambiarCategoria.emit(categoria)
  }

}
