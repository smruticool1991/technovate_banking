import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BankService } from 'src/app/services/bank.service';
import { SpinnerService } from 'src/app/services/spinner.service';
import { AddCreditDialogComponent } from '../add-credit-dialog/add-credit-dialog.component';
import { DialogComponent } from '../dialog/dialog.component';
@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.css']
})
export class CreditComponent implements OnInit {

  dataSource:any
  spinner: any
  displayedColumns: string[] = ['position', 'bank','loan','interest','fee','action'];
  constructor(public _bankService: BankService, public dialog: MatDialog, public _spinner: SpinnerService) { 
       this._spinner.spinner.subscribe((data:any)=>{
          this.spinner = data
       }) 
       this._spinner.header_control.next(false) 
  }

  ngOnInit(): void {
      this._spinner.spinner.next(true)
      this._bankService.get().subscribe(data=>{
         this._bankService.data.next(data)
      },error=>{
        this._spinner.spinner.next(false)
      },()=>{
        this._spinner.spinner.next(false)
      })

      this._bankService.data.subscribe((data:any)=>{
        this.dataSource = data.success
      })
  }
  openDialog(data:any){
      this.dialog.open(DialogComponent, {data: data})
  }
  delete(id:number){
    this._spinner.spinner.next(true)
    this._bankService.delete(id).subscribe(data=>{
       console.log(data)  
    },error=>{
      this._spinner.spinner.next(false)
    },()=>{
      this._spinner.spinner.next(false)
      this._bankService.get().subscribe(data=>{
          this._bankService.data.next(data)
      })
    })
  }
  // add(){
  //   this.dialog.open(AdddialogComponent)
  // }
  credit_dialog(){
     this.dialog.open(AddCreditDialogComponent);
  }
  update_credit_dialog(data:any){
    this.dialog.open(AddCreditDialogComponent, {data: data})
  }

}
