import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessloanComponent } from './businessloan/businessloan.component';
import { CarloanComponent } from './carloan/carloan.component';
import { EducationloanComponent } from './educationloan/educationloan.component';
import { HomeloanComponent } from './homeloan/homeloan.component';
import { PersonalloanComponent } from './personalloan/personalloan.component';
import { TwowheelerloanComponent } from './twowheelerloan/twowheelerloan.component';
import { UnsecuredloanComponent } from './unsecuredloan/unsecuredloan.component';
import { UsedcarloanComponent } from './usedcarloan/usedcarloan.component';
const routes: Routes = [
  {
    path: 'home-loan',
    component: HomeloanComponent
  },
  {
   path: 'personal-loan',
   component: PersonalloanComponent
 },
 {
   path: 'business-loan',
   component: BusinessloanComponent
 },
 {
   path: 'car-loan',
   component: CarloanComponent
 },
 {
   path: 'education-loan',
   component: EducationloanComponent
 },
 {
   path: 'twowheeler-loan',
   component: TwowheelerloanComponent
 },
 {
   path: 'usedcar-loan',
   component: UsedcarloanComponent
 },
 {
   path: 'unsecured-loan',
   component: UnsecuredloanComponent
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoanRoutingModule { }
