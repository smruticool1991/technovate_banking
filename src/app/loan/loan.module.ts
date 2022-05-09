import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanRoutingModule } from './loan-routing.module';
import { MaterialModule } from '../material/material.module';
import { HomeloanComponent } from './homeloan/homeloan.component';
import { PersonalloanComponent } from './personalloan/personalloan.component';
import { BusinessloanComponent } from './businessloan/businessloan.component';
import { CarloanComponent } from './carloan/carloan.component';
import { EducationloanComponent } from './educationloan/educationloan.component';
import { TwowheelerloanComponent } from './twowheelerloan/twowheelerloan.component';
import { UsedcarloanComponent } from './usedcarloan/usedcarloan.component';
import { UnsecuredloanComponent } from './unsecuredloan/unsecuredloan.component';



@NgModule({
  declarations: [
    HomeloanComponent,
    PersonalloanComponent,
    BusinessloanComponent,
    CarloanComponent,
    EducationloanComponent,
    TwowheelerloanComponent,
    UsedcarloanComponent,
    UnsecuredloanComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    LoanRoutingModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})
export class LoanModule { }
