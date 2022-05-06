import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanRoutingModule } from './loan-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input'; 
import {MatFormField} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MaterialModule } from '../material/material.module';
import { HomeloanComponent } from './homeloan/homeloan.component';
import { PersonalloanComponent } from './personalloan/personalloan.component';
import { BusinessloanComponent } from './businessloan/businessloan.component';
import { CarloanComponent } from './carloan/carloan.component';
import { EducationloanComponent } from './educationloan/educationloan.component';
import { TwowheelerloanComponent } from './twowheelerloan/twowheelerloan.component';
import { UsedcarloanComponent } from './usedcarloan/usedcarloan.component';
import { UnsecuredloanComponent } from './unsecuredloan/unsecuredloan.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';
import {MatRadioModule} from '@angular/material/radio';


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
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressBarModule,
    MatDividerModule,
    MatInputModule,
    MatFormField,
    MatSelectModule,
    MatListModule,
    MatTabsModule,
    MatDialogModule,
    MatRadioModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})
export class LoanModule { }
