import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
@Component({
  selector: 'app-instantloan',
  templateUrl: './instantloan.component.html',
  styleUrls: ['./instantloan.component.css']
})

export class InstantloanComponent implements OnInit {
  
  constructor(public dialog: MatDialog) { }
  openDialog(){
    this.dialog.open(DialogComponent, {width: '55vw'});
  }
  ngOnInit(): void {
  }
  

}
