import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/dialog/dialog.component';
import { AddCreditDialogComponent } from '../add-credit-dialog/add-credit-dialog.component';
import { AddLoanDialogComponent } from '../add-loan-dialog/add-loan-dialog.component';
import { AddSavingsDialogComponent } from '../add-savings-dialog/add-savings-dialog.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  isLogedin:boolean = true
  constructor(public Dialog: MatDialog) { }

  ngOnInit(): void {
  }
  open_credit_dialog(){
      this.Dialog.open(AddCreditDialogComponent)
  }
  saving_dialog(){
    this.Dialog.open(AddSavingsDialogComponent)
  }
  open_loan_dialog(){
    this.Dialog.open(AddLoanDialogComponent)
  }
}
