import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { CreditComponent } from './credit/credit.component';
import { HomeComponent } from './home/home.component';
import { InstantloanComponent } from './instantloan/instantloan.component';
import { CryptoComponent } from './investment/crypto/crypto.component';
import { DematComponent } from './investment/demat/demat.component';
import { FixeddepositComponent } from './investment/fixeddeposit/fixeddeposit.component';
import { MutualfundComponent } from './investment/mutualfund/mutualfund.component';

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
   children: [
     {
       path: 'mutual-fund',
       component: MutualfundComponent
     },
     {
       path: 'demat',
       component: DematComponent
     },
     {
       path: 'fixed-deposits',
       component: FixeddepositComponent
     },
     {
       path: 'crypto',
       component: CryptoComponent
     }
   ]

 }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
