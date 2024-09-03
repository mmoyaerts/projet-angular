import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AddTaskFormComponent } from './add-task-form/add-task-form.component';
import { MainAddTaskFormComponent } from './main-add-task-form/main-add-task-form.component';
import { SharedModule } from '../shared/shared.module'; // Import du SharedModule
import { AddTaskRoutingModule } from './add-task-routing.module';

@NgModule({
  declarations: [
    AddTaskFormComponent,
    MainAddTaskFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    AddTaskRoutingModule
  ],
  exports: [
    MainAddTaskFormComponent
  ]
})
export class AddTaskFormModule { }
