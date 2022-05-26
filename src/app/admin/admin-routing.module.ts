import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { BankComponent } from './bank/bank.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from '../auth.guard';
import { LoanComponent } from './loan/loan.component';
import { CreditComponent } from './credit/credit.component';
import { SavingsComponent } from './savings/savings.component';
import { InvestmentComponent } from './investment/investment.component';
import { CryptoComponent } from './crypto/crypto.component';
import { MutualComponent } from './mutual/mutual.component';
import { DematComponent } from './demat/demat.component';
import { FixedComponent } from './fixed/fixed.component';
import { LoanTypeComponent } from './loan-type/loan-type.component';
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: AdminComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'bank',
    component: BankComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'loan',
    component: LoanComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'loan-type',
    component: LoanTypeComponent
  },
  {
    path: 'credit',
    component: CreditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'savings',
    component: SavingsComponent,
    canActivate: [AuthGuard]
  },
    {
      path: 'investment',
      component: InvestmentComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'crypto',
      component: CryptoComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'mutual',
      component: MutualComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'demat',
      component: DematComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'fixed',
      component: FixedComponent,
      canActivate: [AuthGuard]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
