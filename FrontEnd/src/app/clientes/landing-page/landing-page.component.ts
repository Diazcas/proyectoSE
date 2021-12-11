import { Component, OnInit } from '@angular/core';
import { ConnectService } from '../../connect.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private connectDb: ConnectService) {}
  companias: any;
  categoria: string = 'Restaurantes';
  public reset: any[] = [{}];

  async ngOnInit(): Promise<void> {
    this.companias = await this.connectDb.traerEmpresas(
      '61a67f9d4fde0a846065fb84'
    );
  }

  async cambiarCategoria(categoria: string) {
    let companias: any = await this.connectDb.traerEmpresas(categoria);
    this.companias = companias;
    this.categoria = companias[0].nombreCategoria;
    this.onRecreate();
  }

  onRecreate() {
    this.reset[0] = {};
  }
}
