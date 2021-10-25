import { Component, OnInit } from '@angular/core';
import { faStar , faStore , faUtensils, faTools, faPrescriptionBottleAlt,  } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-todas-cat',
  templateUrl: './todas-cat.component.html',
  styleUrls: ['./todas-cat.component.css']
})
export class TodasCatComponent implements OnInit {
  faStar = faStar;
  faStore = faStore;
  faUtensils = faUtensils;
  faTools = faTools;
  faPrescriptionBottleAlt = faPrescriptionBottleAlt;
  movilVisible = 'nada';

  constructor() { }

  ngOnInit(): void {
  }

  mostrarCat(){
    this.movilVisible = 'movil'
  }

  quitarCat(){
    this.movilVisible = 'no'
  }

  verCat(){
    console.log(this)
    this.movilVisible = 'movil'
  }

}
