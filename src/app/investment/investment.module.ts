import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvestmentRoutingModule } from './investment-routing.module';
import { MutualfundComponent } from './mutualfund/mutualfund.component';
import { DematComponent } from './demat/demat.component';
import { FixeddepositComponent } from './fixeddeposit/fixeddeposit.component';
import { CryptoComponent } from './crypto/crypto.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    MutualfundComponent,
    DematComponent,
    FixeddepositComponent,
    CryptoComponent
  ],
  imports: [
    CommonModule,
    InvestmentRoutingModule,
    MaterialModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})
export class InvestmentModule { }
