import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DeleteTaskFormComponent } from './delete-task-form/delete-task-form.component';
import { MainDeleteTaskFormComponent } from './main-delete-task-form/main-delete-task-form.component';
import { SharedModule } from '../shared/shared.module'; // Import du SharedModule
import { DeleteTaskRoutingModule } from './delete-task-routing.module';

@NgModule({
  declarations: [
    DeleteTaskFormComponent,
    MainDeleteTaskFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DeleteTaskRoutingModule,
    SharedModule
  ],
  exports: [
    MainDeleteTaskFormComponent
  ]
})
export class DeleteTaskFormModule { }
