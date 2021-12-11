import { Component, OnInit } from '@angular/core';
import { MapService } from '../../map.service';
@Component({
  selector: 'app-driver-ubicacion',
  templateUrl: './driver-ubicacion.component.html',
  styleUrls: ['./driver-ubicacion.component.css']
})
export class DriverUbicacionComponent implements OnInit {

  constructor(private map: MapService) { }

  mapa:any;

  ngOnInit(): void {
    let ubicacion = JSON.parse(localStorage.getItem('driverDir')||'')
    // console.log(ubicacion)
    this.mapa = this.map.buildMap(ubicacion.lng, ubicacion.lat);
    this.map.crearMarcador(this.mapa, ubicacion.lng, ubicacion.lat)
  }

}
