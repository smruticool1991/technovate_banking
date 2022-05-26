import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SavingComponent } from 'src/app/saving/saving.component';

@Component({
  selector: 'app-add-savings-dialog',
  templateUrl: './add-savings-dialog.component.html',
  styleUrls: ['./add-savings-dialog.component.css']
})
export class AddSavingsDialogComponent implements OnInit {
  id:any
  title:any
  bank:any
  opening_charge:any
  minimum_bal:any
  interest_rate:any
  upload_file:any
  banks:any
  update_button:boolean = false
  save_button:boolean = true
  constructor(public matRef: MatDialogRef<SavingComponent>, @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    if(this.data){
      this.bank = this.data.id
      this.update_button = true
      this.save_button = false
    }
  }
  file_change(data:any){

  }
  add_data(data:any){

  }
  update_data(data:any){

  }
}
