import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainContentComponent} from "./components/main-content/main-content.component";
import {DashboardComponent} from "./dashboard.component";
import {StudentsListingComponent} from "../students/components/students-listing/students-listing.component";
import {StudentFormComponent} from "../students/components/student-form/student-form.component";
import {AuthGuardService} from "../core/services/auth-guard.service";


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        component: MainContentComponent,
        canActivateChild: [AuthGuardService]
      },
      {
        path: 'students',
        component: StudentsListingComponent,
        canActivateChild: [AuthGuardService]
      },
      {
        path: 'students/:id',
        component: StudentFormComponent,
        canActivateChild: [AuthGuardService]
      },
      {
        path: 'students/new',
        component: StudentFormComponent,
        canActivateChild: [AuthGuardService]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
