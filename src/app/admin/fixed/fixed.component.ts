import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BankService } from 'src/app/services/bank.service';
import { SpinnerService } from 'src/app/services/spinner.service';
import { DialogComponent } from '../dialog/dialog.component';
@Component({
  selector: 'app-fixed',
  templateUrl: './fixed.component.html',
  styleUrls: ['./fixed.component.css']
})
export class FixedComponent implements OnInit {

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

}
