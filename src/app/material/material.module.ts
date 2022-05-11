import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';
import {MatRadioModule} from '@angular/material/radio';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
const Material = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatProgressBarModule,
  MatDividerModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatListModule,
  MatTabsModule,
  MatDialogModule,
  MatRadioModule,
  MatTooltipModule,
  MatSidenavModule,
  MatMenuModule,
  MatTableModule
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Material
  ],
  exports: [
    Material 
  ]
})
export class MaterialModule { }
