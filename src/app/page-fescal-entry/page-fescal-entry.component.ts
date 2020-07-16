import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl } from "@angular/forms";
import { Router } from '@angular/router';
import {FestivalcalService} from "../service/festivalcal.service";

@Component({
  selector: 'app-page-fescal-entry',
  templateUrl: './page-fescal-entry.component.html',
  styleUrls: ['./page-fescal-entry.component.css']
})
export class PageFescalEntryComponent implements OnInit {

  constructor(
    private formBuildert: FormBuilder,
    private router: Router,
    private festivalcalService : FestivalcalService,
  ) { }
  transactionForm: FormGroup;
  loading = false;
  submitted = false;

  ngOnInit(): void {
    this.transactionForm = this.formBuildert.group({
      festdt: ['', Validators.required],
      holidayname: ['', Validators.required]
    });
  }
  get fval() { return this.transactionForm.controls; }

  onFormSubmit(){
    this.submitted = true;
    // return for here if form is invalid
    if (this.transactionForm.invalid) {
      return;
    }
    this.loading = true;
    this.festivalcalService.createfestival(this.transactionForm.value).subscribe(
      (data)=>{
        alert('Transaction Registered successfully!!');
     //   this.router.navigate(['/login-page']);
     },
      (error)=>{
        // this.toastr.error(error.error.message, 'Error');
        alert('Transaction Registered Error!!');
        this.loading = false;
      } 
    )

  }

}
