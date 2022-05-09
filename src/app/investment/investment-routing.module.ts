import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CryptoComponent } from './crypto/crypto.component';
import { DematComponent } from './demat/demat.component';
import { FixeddepositComponent } from './fixeddeposit/fixeddeposit.component';
import { MutualfundComponent } from './mutualfund/mutualfund.component';
const routes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvestmentRoutingModule { }
