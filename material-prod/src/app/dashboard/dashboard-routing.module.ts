import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainContentComponent} from "./components/main-content/main-content.component";
import {DashboardComponent} from "./dashboard.component";
import {StudentsListingComponent} from "../students/components/students-listing/students-listing.component";
import {StudentFormComponent} from "../students/components/student-form/student-form.component";


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: MainContentComponent
      },
      {
        path: 'students',
        component: StudentsListingComponent
      },
      {
        path: 'students/new',
        component: StudentFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
