import { Component, OnInit } from '@angular/core';
import { faShoppingCart  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-categorias',
  templateUrl: './nav-categorias.component.html',
  styleUrls: ['./nav-categorias.component.css']
})
export class NavCategoriasComponent implements OnInit {
  faShoppingCart = faShoppingCart;

  constructor() { }

  ngOnInit(): void {
  }

}
