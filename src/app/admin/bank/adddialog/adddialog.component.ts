import { Component, OnInit } from '@angular/core';
import { BankService } from 'src/app/services/bank.service';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-adddialog',
  templateUrl: './adddialog.component.html',
  styleUrls: ['./adddialog.component.css']
})
export class AdddialogComponent implements OnInit {
    id:any
    bank_name:any
  constructor(public _bakservice: BankService, public _spiner: SpinnerService) { }

  ngOnInit(): void {
  }
  add_data(data:any){
      this._spiner.spinner.next(true)
      this._bakservice.add(data.bank_name).subscribe(data=>{
           console.log(data)
      },error=>{
         this._spiner.spinner.next(false)
      },()=>{
        this._spiner.spinner.next(false)
        this._bakservice.get().subscribe(data=>{
            this._bakservice.data.next(data)
        })
      })

  }
}
