import { HashLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { CreditComponent } from './credit/credit.component';
import { HomeComponent } from './home/home.component';
import { InstantloanComponent } from './instantloan/instantloan.component';


import { SavingComponent } from './saving/saving.component';

const routes: Routes = [
  {
    path : '',
    component: HomeComponent
 },
 {
   path: 'contact',
   component: ContactComponent
 },
 {
   path: 'credit-card',
   component: CreditComponent
 },
 {
   path: 'saving-account',
   component: SavingComponent
 },
 {
   path: 'loan',
   loadChildren: () => import('./loan/loan.module').then(url => url.LoanModule)
 },
 {
   path: 'instant-loan',
   component: InstantloanComponent
 },
 {
   path: 'investment',
   loadChildren: () => import('./investment/investment.module').then(url=> url.InvestmentModule)
 },
 {
   path: 'admin',
   loadChildren: () => import('./admin/admin.module').then(url=>url.AdminModule)
 }
 
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
