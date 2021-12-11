import { Component, OnInit } from '@angular/core';
import { faWindowClose, faStar, faStore, faUtensils, faTools, faPrescriptionBottleAlt,} from '@fortawesome/free-solid-svg-icons';
import { ConnectService } from '../../connect.service';


@Component({
  selector: 'app-todas-categorias',
  templateUrl: './todas-categorias.component.html',
  styleUrls: ['./todas-categorias.component.css']
})
export class TodasCategoriasComponent implements OnInit {
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
    console.log(this.data)
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
