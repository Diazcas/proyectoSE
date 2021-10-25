import { Component, OnInit } from '@angular/core';
import { faStar , faStore , faUtensils, faTools, faPrescriptionBottleAlt,  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {
  faStar = faStar;
  faStore = faStore;
  faUtensils = faUtensils;
  faTools = faTools;
  faPrescriptionBottleAlt = faPrescriptionBottleAlt;

  constructor() { }

  ngOnInit(): void {
  }

}
