import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowTasksRoutingModule } from './show-tasks-routing.module';
import { MainTaskComponent } from './main-task/main-task.component';
import { TaskComponent } from './task/task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { FormatDatePipe } from './format-date.pipe';
import { TaskStatusColorDirective } from './task-status-color.directive';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AddTaskFormModule } from '../add-task-form/add-task-form.module';
import { DeleteTaskFormModule } from '../delete-task-form/delete-task-form.module';


@NgModule({
  declarations: [MainTaskComponent, TaskComponent, TaskListComponent, FormatDatePipe, TaskStatusColorDirective],
  imports: [
    CommonModule,
    ShowTasksRoutingModule,
    FormsModule,
    AddTaskFormModule,
    DeleteTaskFormModule
  ]
})
export class ShowTasksModule { }
