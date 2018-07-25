import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainContentComponent} from "./components/main-content/main-content.component";
import {DashboardComponent} from "./dashboard.component";
import {StudentsListingComponent} from "../students/components/students-listing/students-listing.component";
import {StudentFormComponent} from "../students/components/student-form/student-form.component";
import {AuthGuardService} from "../core/services/auth-guard.service";
import {StudentViewComponent} from "../students/components/student-view/student-view.component";
import {EditStudentResolverService} from "../students/services/edit-student-resolver.service";


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
        canActivateChild: [AuthGuardService],
        resolve: {
          student: EditStudentResolverService
        }
      },
      {
        path: 'students/new',
        component: StudentFormComponent,
        canActivateChild: [AuthGuardService]
      },
      {
        path: 'students/:id/view',
        component: StudentViewComponent,
        canActivateChild: [AuthGuardService],
        resolve: {
          student: EditStudentResolverService
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
