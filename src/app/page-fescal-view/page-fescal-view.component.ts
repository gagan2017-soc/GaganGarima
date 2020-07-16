import { Component, OnInit } from '@angular/core';
import {FestivalcalService} from "../service/festivalcal.service";

@Component({
  selector: 'app-page-fescal-view',
  templateUrl: './page-fescal-view.component.html',
  styleUrls: ['./page-fescal-view.component.css']
})
export class PageFescalViewComponent implements OnInit {
  TransData: any = [];
  dataSource = this.TransData;

  constructor(private festivalcalservice:FestivalcalService) { 
    this.readtransactions();
  }

  ngOnInit(): void {
  }
  
  readtransactions(){
    this.festivalcalservice.getAll().subscribe((data) => {
      this.TransData = data;
      console.log(this.TransData);
     })    
  }

}
