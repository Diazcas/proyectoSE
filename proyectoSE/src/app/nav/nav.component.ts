import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { faCoffee, faWindowClose, faBars  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  faCoffee = faCoffee;
  faBars = faBars;
  regionVisible = '';
  faWindowClose = faWindowClose;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  cambiarPant(){
    this.router.navigateByUrl('/')
  }

  verModal(){
    this.regionVisible = "modal";
  }

  quitarModal(){
    this.regionVisible = "";
  }

}
