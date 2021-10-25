import { Component, OnInit } from '@angular/core';
import {faWindowClose, faStar , faStore , faUtensils, faTools, faPrescriptionBottleAlt,  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {
  faWindowClose = faWindowClose;
  modalCantidad = 'false'

  constructor() { }

  ngOnInit(): void {
  }

  activarModal(){
    this.modalCantidad = 'active'
  }

  quitarModal(){
    this.modalCantidad = 'false'
  }

}
