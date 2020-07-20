import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
   name: string;
   address: string;
   phonenumber: string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'MediPoint Hospital', address:'241, 1, New DP Rd, Oriental Gold Society, Aundh, Pune,',phonenumber: ' 020 6764 3200'},
  { name: 'Aundh Institute of Medical Sciences',address:'Survey No 154, AIMS Rd, Near AIMS Square, Aundh, Pune, Maharashtra 411007', phonenumber: '020 6740 0100'},
   
];
@Component({
  selector: 'app-page-hospital',
  templateUrl: './page-hospital.component.html',
  styleUrls: ['./page-hospital.component.css']
})
export class PageHospitalComponent implements OnInit {
  displayedColumns: string[] = ['Name', 'Address','Phone Number'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
