import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentTableBuilderRoutingModule } from './student-table-builder-routing.module';
import {StudentTableBuilderComponent} from "./student-table-builder.component";
import { MainContentComponent } from './components/main-content/main-content.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import {MaterialModule} from "../shared/material.module";


@NgModule({
  imports: [
    CommonModule,
    StudentTableBuilderRoutingModule,
    MaterialModule
  ],
  declarations: [StudentTableBuilderComponent, MainContentComponent, SideNavComponent, ToolbarComponent]
})
export class StudentTableBuilderModule { }
