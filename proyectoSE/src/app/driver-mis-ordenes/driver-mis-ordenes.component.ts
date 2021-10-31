import { Component, OnInit } from '@angular/core';
import { faThumbtack, faMotorcycle, faHome } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-driver-mis-ordenes',
  templateUrl: './driver-mis-ordenes.component.html',
  styleUrls: ['./driver-mis-ordenes.component.css']
})
export class DriverMisOrdenesComponent implements OnInit {

  faThumbtack = faThumbtack;
  faMotorcycle = faMotorcycle;
  faHome = faHome;

  constructor() { }

  ngOnInit(): void {
  }

}
