import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentTableBuilderRoutingModule } from './student-table-builder-routing.module';
import { StudentTableBuildComponent } from './student-table-build.component';

@NgModule({
  imports: [
    CommonModule,
    StudentTableBuilderRoutingModule
  ],
  declarations: [StudentTableBuildComponent]
})
export class StudentTableBuilderModule { }
