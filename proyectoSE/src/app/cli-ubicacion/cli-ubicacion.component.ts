import { Component, OnInit, NgModule } from '@angular/core';
import { MapService } from '../map.service';

@Component({
  selector: 'app-cli-ubicacion',
  templateUrl: './cli-ubicacion.component.html',
  styleUrls: ['./cli-ubicacion.component.css']
})
export class CliUbicacionComponent implements OnInit {

  constructor(private map: MapService) { }

  ngOnInit(): void {
    this.map.buildMap();
  }

}
