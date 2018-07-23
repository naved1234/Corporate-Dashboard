import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsListingComponent } from './components/students-listing/students-listing.component';
import {MaterialModule} from "../shared/material.module";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {StudentService} from "./services/student.service";
import { StudentFormComponent } from './components/student-form/student-form.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [StudentsListingComponent, StudentFormComponent],
  exports: [StudentsListingComponent, StudentFormComponent],
  providers: [StudentService]
})
export class StudentsModule { }
