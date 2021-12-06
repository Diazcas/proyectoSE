import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private router: Router,
    private localSto: LocalStoService) { }
  
  ngOnInit(): void {
    this.data = [{
      "companias" : this.companias,
      "categoria" : this.categoria
    }]

    console.log(this.categoria)

    // console.log(this.data)
  }

  actualizarCate(){
    this.localSto.subirCatActual(this.categoria)
  }
  
}
