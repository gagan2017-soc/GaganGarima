import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
   name: string;
   contactno: string;
   address: string;
   category: string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'DAV Public School',contactno:'020 - 25890380',address:'Aundh',category:'CBSE nur-12'},
  { name: 'City International ',contactno:'020-222222',address:'Aundh, ',category:'CBSE nur-12'},

  
];
@Component({
  selector: 'app-page-school',
  templateUrl: './page-school.component.html',
  styleUrls: ['./page-school.component.css']
})
export class PageSchoolComponent implements OnInit {
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
