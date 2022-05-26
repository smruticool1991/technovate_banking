import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoanComponent } from '../loan/loan.component';

@Component({
  selector: 'app-add-loan-dialog',
  templateUrl: './add-loan-dialog.component.html',
  styleUrls: ['./add-loan-dialog.component.css']
})
export class AddLoanDialogComponent implements OnInit {
 id:any
 title:any
 bank:any
 banks:any
 loan_type:any
 interest_rate:any
 processing_fee:any
 tenure_range:any
 upload_file:any
 save_btn:boolean = true
 update_btn:boolean = false
  constructor(public matRef:MatDialogRef<LoanComponent>, @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    if(this.data){
       this.save_btn = false
       this.update_btn = true 
    }
  }
  file_change(data:any){

  }
  add_data(data:any){

  }
  update_data(data:any){

  }
}
