import { Component } from '@angular/core';
import info from '../assets/data/company.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  info = info;
  title = 'proyectoSE';
}

localStorage.setItem('companys', JSON.stringify(info))