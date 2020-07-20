import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
   phonenumber: string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Pune Traffic Police Control Room', phonenumber: '020-26208225, 020-26122000 020-26120054'},
  { name: 'SMS helpline - Pune Traffic Police', phonenumber: '8888004455'},
  { name: 'Police control room, Pune city', phonenumber: '020-26126296, 020-2612288, 020-26122202, 020-26208250, 100'},
  { name: 'HPCL, Pune', phonenumber: '020-26213104, +91 9961023456'},

  
];
@Component({
  selector: 'app-page-emerg-number',
  templateUrl: './page-emerg-number.component.html',
  styleUrls: ['./page-emerg-number.component.css']
})
export class PageEmergNumberComponent implements OnInit {
  displayedColumns: string[] = ['Name', 'Phone Number'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
