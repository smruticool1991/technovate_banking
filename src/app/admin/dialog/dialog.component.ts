import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BankService } from 'src/app/services/bank.service';
import { SpinnerService } from 'src/app/services/spinner.service';
import { BankComponent } from '../bank/bank.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  bank_name:any
  id:any
  constructor(public matRef: MatDialogRef<BankComponent>, @Inject(MAT_DIALOG_DATA) public data: any, public _spinner: SpinnerService, private _bank: BankService) {
      this.bank_name = data.bank_name
      this.id = data.id
   }

  ngOnInit(): void {
  }
  update_data(data:any){
     console.log(data)
     this._spinner.spinner.next(true)
     this._bank.update(data.id, data).subscribe((data)=>{
         
     },error=>{
      this._spinner.spinner.next(false)
     },()=>{
      this._spinner.spinner.next(false)
      this._bank.get().subscribe(data=>{
        this._bank.data.next(data)
     })
     })

  }
}
