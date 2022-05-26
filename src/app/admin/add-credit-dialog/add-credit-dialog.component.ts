import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BankService } from 'src/app/services/bank.service';
import { CreditComponent } from '../credit/credit.component';

@Component({
  selector: 'app-add-credit-dialog',
  templateUrl: './add-credit-dialog.component.html',
  styleUrls: ['./add-credit-dialog.component.css']
})
export class AddCreditDialogComponent implements OnInit {
  bank_name:any = ""
  id:any = ""
  title:any
  bank:any
  banks:any
  upload_file:any
  card_type:any
  annual_fee:any
  joining_fee:any
  constructor(public matRef: MatDialogRef<CreditComponent>, @Inject(MAT_DIALOG_DATA) public data:any, public _bank: BankService) { }

  ngOnInit(): void {
    this._bank.get().subscribe((data:any)=>{
       this.banks = data.success
    })
    if(this.data){
      this.bank = this.data.id
    }
  }
  add_data(data:any){

  }
  fileUpload(){

  }
  file_change(data:any){
    let file_name = data.target.files[0].name
    this.upload_file = file_name
  }
}
