import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from '../material/material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { AdminComponent } from './admin.component';
import {FormsModule} from '@angular/forms';
import { BankComponent } from './bank/bank.component';
import { DialogComponent } from './dialog/dialog.component';
import { AdddialogComponent } from './bank/adddialog/adddialog.component';
import { InterestComponent } from './bank/interest/interest.component';
@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    AdminComponent,
    BankComponent,
    DialogComponent,
    AdddialogComponent,
    InterestComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    FormsModule
  ],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
