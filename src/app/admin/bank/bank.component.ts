import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BankService } from 'src/app/services/bank.service';
import { SpinnerService } from 'src/app/services/spinner.service';
import { DialogComponent } from '../dialog/dialog.component';
import { AdddialogComponent } from './adddialog/adddialog.component';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})

export class BankComponent implements OnInit {
  dataSource:any
  spinner: any
  displayedColumns: string[] = ['position', 'name','action'];
  constructor(public _bankService: BankService, public dialog: MatDialog, public _spinner: SpinnerService) { 
       this._spinner.spinner.subscribe((data:any)=>{
          this.spinner = data
       })  
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
  add(){
    this.dialog.open(AdddialogComponent)
  }
}
