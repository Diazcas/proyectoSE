import { Component, OnInit } from '@angular/core';
import { faStar  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  faStar = faStar;

  constructor() { }

  ngOnInit(): void {
  }

}
