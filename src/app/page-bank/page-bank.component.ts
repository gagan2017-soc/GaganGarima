import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  srno: Number;
   name: string;
   contactno: string;
   address: string;
   website: string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  { srno: 1, name: 'HDFC Bank Ltd',contactno:'020-2755223',address:'Aundh Road',website:'hdfcbank.com'},
  { srno: 2, name: 'ICICI Bank ',contactno:'020-2755223',address:'Aundh Road',website:'icicibank.com'},

  
];
@Component({
  selector: 'app-page-bank',
  templateUrl: './page-bank.component.html',
  styleUrls: ['./page-bank.component.css']
})
export class PageBankComponent implements OnInit {
  //displayedColumns: string[] = ['#', 'Name',Contact Number];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}

