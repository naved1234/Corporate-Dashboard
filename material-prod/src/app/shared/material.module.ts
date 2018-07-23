import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule,
  MatSidenavModule, MatSnackBarModule,
  MatTableModule,
  MatToolbarModule
} from "@angular/material";

const exportedMatModules = [
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatCardModule,
  MatTableModule,
  MatMenuModule,
  MatFormFieldModule,
  MatInputModule,
  MatSnackBarModule
]

@NgModule({
  imports: [
    CommonModule,
    ...exportedMatModules
  ],
  exports: [
    ...exportedMatModules
  ],
  declarations: []
})
export class MaterialModule { }
