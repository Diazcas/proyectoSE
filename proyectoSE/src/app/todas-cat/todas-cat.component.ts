import { Component, OnInit } from '@angular/core';
import {faWindowClose, faStar , faStore , faUtensils, faTools, faPrescriptionBottleAlt,  } from '@fortawesome/free-solid-svg-icons';
import { LocalStoService } from '../local-sto.service';
import { ActivatedRoute } from '@angular/router'


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
  faWindowClose = faWindowClose;
  companias:any
  categoria:any
  data: any;
  dataStr:any;
  catActual: string | undefined;
  
  constructor(
    private localSto: LocalStoService,
    private _route: ActivatedRoute) {}
  
  ngOnInit(): void {
    this.catActual = (this.localSto.verCatActual())
    console.log(this.catActual)
    this.data = (this.localSto.traerCompanias(this.catActual))
    console.log(this.data)
  }


  mostrarCat(){
    this.movilVisible = 'movil'
  }

  quitarCat(){
    this.movilVisible = 'no'
  }

  verCat(categoria:string){
    this.localSto.subirCatActual(categoria)
  }

}
