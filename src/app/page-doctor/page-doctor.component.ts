import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  srno: Number;
   name: string;
   contactno: string;
   address: string;
   specality: string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  { srno: 1, name: 'Dr. Granthi',contactno:'020 - 25890380',address:'Aundh',specality:'Skin Specialist'},
  { srno: 2, name: 'Dr Sagar Tuse ',contactno:'9421581728',address:'Ojas Ayurved Chikitsalaya, B Wing Sunshine Greens 2, Khadki Railway Station Road, Khadki, ',specality:'Ayurvedic Doctors'},

  
];
@Component({
  selector: 'app-page-doctor',
  templateUrl: './page-doctor.component.html',
  styleUrls: ['./page-doctor.component.css']
})
export class PageDoctorComponent implements OnInit {
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
