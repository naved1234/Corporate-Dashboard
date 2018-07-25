import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsListingComponent } from './components/students-listing/students-listing.component';
import {MaterialModule} from "../shared/material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {StudentService} from "./services/student.service";
import { StudentFormComponent } from './components/student-form/student-form.component';
import { StudentViewComponent } from './components/student-view/student-view.component';
import {RouterModule} from "@angular/router";
import {EditStudentResolverService} from "./services/edit-student-resolver.service";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [StudentsListingComponent, StudentFormComponent, StudentViewComponent],
  exports: [StudentsListingComponent, StudentFormComponent],
  providers: [StudentService, EditStudentResolverService]
})
export class StudentsModule { }
