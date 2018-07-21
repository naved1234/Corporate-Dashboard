import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentTableBuilderRoutingModule } from './student-table-builder-routing.module';
import {StudentTableBuilderComponent} from "./student-table-builder.component";


@NgModule({
  imports: [
    CommonModule,
    StudentTableBuilderRoutingModule
  ],
  declarations: [StudentTableBuilderComponent]
})
export class StudentTableBuilderModule { }
