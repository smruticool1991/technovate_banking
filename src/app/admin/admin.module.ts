import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from '../material/material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { AdminComponent } from './admin.component';
import {FormsModule} from '@angular/forms';
import { BankComponent } from './bank/bank.component';
import { DialogComponent } from './dialog/dialog.component';
import { AdddialogComponent } from './bank/adddialog/adddialog.component';
import { InterestComponent } from './bank/interest/interest.component';
import { Config } from '../config/config';
import { AuthGuard } from '../auth.guard';
import { LoanComponent } from './loan/loan.component';
import { CreditComponent } from './credit/credit.component';
import { SavingsComponent } from './savings/savings.component';
import { InvestmentComponent } from './investment/investment.component';
import { MutualComponent } from './mutual/mutual.component';
import { DematComponent } from './demat/demat.component';
import { CryptoComponent } from './crypto/crypto.component';
import { FixedComponent } from './fixed/fixed.component';
import { AddCreditDialogComponent } from './add-credit-dialog/add-credit-dialog.component';
import { AddSavingsDialogComponent } from './add-savings-dialog/add-savings-dialog.component';
import { AddLoanDialogComponent } from './add-loan-dialog/add-loan-dialog.component';
import { AddLoanTypeDialogComponent } from './add-loan-type-dialog/add-loan-type-dialog.component';
import { LoanTypeComponent } from './loan-type/loan-type.component';
@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    AdminComponent,
    BankComponent,
    DialogComponent,
    AdddialogComponent,
    InterestComponent,
    LoanComponent,
    CreditComponent,
    SavingsComponent,
    InvestmentComponent,
    MutualComponent,
    DematComponent,
    CryptoComponent,
    FixedComponent,
    AddCreditDialogComponent,
    AddSavingsDialogComponent,
    AddLoanDialogComponent,
    AddLoanTypeDialogComponent,
    LoanTypeComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    FormsModule,
  ],
  providers: [AuthGuard, Config],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
