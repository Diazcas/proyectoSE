import { Component, OnInit } from '@angular/core';
import { faCoffee, faBars  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  faCoffee = faCoffee;
  faBars = faBars;

  constructor() { }

  ngOnInit(): void {
  }

}
