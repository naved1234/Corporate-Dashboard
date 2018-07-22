import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainContentComponent } from './components/main-content/main-content.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import {MaterialModule} from "../shared/material.module";
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {DashboardComponent} from "./dashboard.component";
import {StudentsModule} from "../students/students.module";
import {TodoModule} from "../todo/todo.module";


@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    StudentsModule
  ],
  declarations: [DashboardComponent, MainContentComponent, SideNavComponent, ToolbarComponent]
})
export class DashboardModule { }
