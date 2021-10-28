import { NgAnalyzedFileWithInjectables } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {LocalStoService} from '../local-sto.service'

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private localSto: LocalStoService) { }
  companias = this.localSto.traerCompanias('Restaurantes');
  categoria:string = 'Restaurantes';
  public reset: any[] = [{}];

  ngOnInit(): void {
  }

  cambiarCategoria(categoria:string){
    // console.log(categoria)
    let companias = this.localSto.traerCompanias(categoria)
    // console.log(companias);
    this.companias = companias;
    this.categoria = categoria;
    this.onRecreate();
  }

  onRecreate(){
    this.reset[0] = {};
  }

}
