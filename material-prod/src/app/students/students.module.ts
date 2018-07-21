import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsListingComponent } from './components/students-listing/students-listing.component';
import {MaterialModule} from "../shared/material.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  declarations: [StudentsListingComponent],
  exports: [StudentsListingComponent]
})
export class StudentsModule { }
