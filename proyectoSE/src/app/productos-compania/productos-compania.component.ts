import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productos-compania',
  templateUrl: './productos-compania.component.html',
  styleUrls: ['./productos-compania.component.css']
})
export class ProductosCompaniaComponent implements OnInit {
  @Output() compania = new EventEmitter();
  data:any

  constructor(private _route: ActivatedRoute) {
    this.data = [{
      categoria: this._route.snapshot.paramMap.get('nombreCat'),
      companiaId: (this._route.snapshot.paramMap.get('id'))
    }]
   }

  ngOnInit(): void {
  }

}
