import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListingComponent } from './components/todo-listing/todo-listing.component';
import {MaterialModule} from "../shared/material.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  declarations: [TodoListingComponent],
  exports: [TodoListingComponent]
})
export class TodoModule { }
