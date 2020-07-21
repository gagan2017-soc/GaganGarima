import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  contactno: string;
  address: string;
  comment: string;
 
}

const ELEMENT_DATA: PeriodicElement[] = [
 { name: 'Montvert prestine',contactno:'020 - 222225890380',address:'Aundh Road',comment:''},
 { name: 'Laboni Tower ',contactno:'020-222222',address:'Aundh Road, ',comment:''},

 
];
@Component({
  selector: 'app-page-near-soc',
  templateUrl: './page-near-soc.component.html',
  styleUrls: ['./page-near-soc.component.css']
})
export class PageNearSocComponent implements OnInit {
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {

  }

}
