import { Component, Input, OnInit } from '@angular/core';
import { faStar  } from '@fortawesome/free-solid-svg-icons';
import { LocalStoService } from '../local-sto.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  @Input() companias:any;
  @Input() categoria:any;
  data:any;
  dataStr:any;
  
  
  faStar = faStar;
  
  constructor(
    private localSto: LocalStoService) { }
  
  ngOnInit(): void {
    this.data = [{
      "companias" : this.companias,
      "categoria" : this.categoria
    }]

    // console.log(this.categoria)
//nada
    // console.log(this.data)
  }

  actualizarCate(){
    this.localSto.subirCatActual(this.categoria)
  }
  
}
