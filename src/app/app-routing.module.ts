import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { CreditComponent } from './credit/credit.component';
import { HomeComponent } from './home/home.component';

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
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
