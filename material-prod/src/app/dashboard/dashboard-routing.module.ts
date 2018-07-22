import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainContentComponent} from "./components/main-content/main-content.component";
import {DashboardComponent} from "./dashboard.component";
import {StudentsListingComponent} from "../students/components/students-listing/students-listing.component";
import {TodoListingComponent} from "../todo/components/todo-listing/todo-listing.component";

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
        path: 'todo',
        component: TodoListingComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
