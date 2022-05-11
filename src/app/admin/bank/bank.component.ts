import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BankService } from 'src/app/services/bank.service';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }
export class BankComponent implements OnInit {
  dataSource:any
  // ELEMENT_DATA:any = [
  //   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  //   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  //   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  //   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  //   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  //   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  //   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  //   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  //   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  //   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  // ];
  displayedColumns: string[] = ['position', 'name','action'];
  // dataSource = this.ELEMENT_DATA;
  constructor(public _bankService: BankService, public dialog: MatDialog) { }

  ngOnInit(): void {
      this._bankService.get().subscribe(data => {
        let res:any = data
         this.dataSource = res.success;
      })
  }
  openDialog(){
      this.dialog.open(DialogComponent)
  }

}
