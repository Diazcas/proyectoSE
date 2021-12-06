import { Component, OnInit } from '@angular/core';
import { faWindowClose, faStar, faStore, faUtensils, faTools, faPrescriptionBottleAlt,} from '@fortawesome/free-solid-svg-icons';
import { ConnectService } from '../connect.service';

@Component({
  selector: 'app-todas-cat',
  templateUrl: './todas-cat.component.html',
  styleUrls: ['./todas-cat.component.css'],
})
export class TodasCatComponent implements OnInit {
  faStar = faStar;
  faStore = faStore;
  faUtensils = faUtensils;
  faTools = faTools;
  faPrescriptionBottleAlt = faPrescriptionBottleAlt;
  movilVisible = 'nada';
  faWindowClose = faWindowClose;
  companias: any;
  categoria: any;
  data: any;
  catActual: string | undefined;

  constructor(
    private connectBd: ConnectService
  ) {}

  async ngOnInit(): Promise<void> {
    this.catActual = localStorage.getItem('categoria') || '{}';
    this.data = await this.connectBd.traerEmpresasNombre(this.catActual);
  }

  mostrarCat() {
    if (this.movilVisible == 'movil') {
      this.movilVisible = 'no';
    } else {
      this.movilVisible = 'movil';
    }
  }

  quitarCat() {
    this.movilVisible = 'no';
  }

  verCat(categoria: string) {
    localStorage.setItem('categoria', categoria);
  }

  selectComp() {
  }
}
