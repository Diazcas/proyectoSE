import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import * as mapboxgl from 'mapbox-gl';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  mapbox = (mapboxgl as typeof mapboxgl);
  map: mapboxgl.Map | undefined;
  style = `mapbox://styles/mapbox/streets-v11`;
  // Coordenadas de la localización donde queremos centrar el mapa
  lat = 14.0193161
  lng = -86.5689223
  zoom = 16.6;
  constructor() {
    // Asignamos el token desde las variables de entorno
    this.mapbox.accessToken = environment.mapBoxToken;
  }
  buildMap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: this.zoom,
      center: [this.lng, this.lat]
    });
    this.map.addControl(new mapboxgl.NavigationControl());

    return this.map;
  }

  crearMarcador(map:mapboxgl.Map, lng:number, lat:number){
    const marker = new mapboxgl.Marker({
      draggable: true
    })
    .setLngLat([this.lng,this.lat])
    .addTo(map)
    let direccion;

    marker.on('dragend', () => {
      // console.log(marker.getLngLat())
      direccion = marker.getLngLat()
      localStorage.setItem('direccion', JSON.stringify(direccion))
      localStorage.setItem('direccionCambio', '1')
    })
  }
}
