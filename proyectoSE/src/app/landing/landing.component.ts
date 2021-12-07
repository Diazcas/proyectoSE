import { NgAnalyzedFileWithInjectables } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { LocalStoService } from '../local-sto.service';
import { ConnectService } from '../connect.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  constructor(
    private localSto: LocalStoService,
    private connectDb: ConnectService
  ) {}
  companias: any;
  categoria: string = 'Restaurantes';
  public reset: any[] = [{}];

  async ngOnInit(): Promise<void> {
    this.companias = await this.connectDb.traerEmpresas(
      '61a67f9d4fde0a846065fb84'
    );
  }

  async cambiarCategoria(categoria: string) {
    // console.log(categoria);
    // let companias = this.localSto.traerCompanias(categoria)
    let companias: any = await this.connectDb.traerEmpresas(categoria);
    // console.log(companias);
    this.companias = companias;
    this.categoria = companias[0].nombreCategoria;
    this.onRecreate();
  }

  onRecreate() {
    this.reset[0] = {};
  }
}
