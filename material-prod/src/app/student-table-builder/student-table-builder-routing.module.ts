import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentTableBuilderComponent} from "./student-table-builder.component";

const routes: Routes = [
  {
    path: '',
    component: StudentTableBuilderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentTableBuilderRoutingModule { }
