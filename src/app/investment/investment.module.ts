import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvestmentRoutingModule } from './investment-routing.module';
import { MutualfundComponent } from './mutualfund/mutualfund.component';
import { DematComponent } from './demat/demat.component';
import { FixeddepositComponent } from './fixeddeposit/fixeddeposit.component';
import { CryptoComponent } from './crypto/crypto.component';


@NgModule({
  declarations: [
    MutualfundComponent,
    DematComponent,
    FixeddepositComponent,
    CryptoComponent
  ],
  imports: [
    CommonModule,
    InvestmentRoutingModule
  ]
})
export class InvestmentModule { }
