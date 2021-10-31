import { Component, Input, OnInit } from '@angular/core';
import {faWindowClose} from '@fortawesome/free-solid-svg-icons';
import { LocalStoService } from '../local-sto.service';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {
  @Input() data = '';
  info:any
  compania:any
  faWindowClose = faWindowClose;
  modalCantidad = 'false'

  constructor(private localSto: LocalStoService) { }

  ngOnInit(): void {
    this.info = (this.data[0])
    this.compania = this.localSto.verCompaniaActual(this.info.categoria, this.info.companiaId)
    console.log(this.compania)
  }

  activarModal(){
    this.modalCantidad = 'active'
  }

  quitarModal(){
    this.modalCantidad = 'false'
  }

}
