import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { State } from '../../models/state';
import { TaskStatusColorDirective } from '../task-status-color.directive';
import { formatDate } from '@angular/common';
import { FormatDatePipe } from '../format-date.pipe';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent{
  @Input() currentTaskComponent !: Task ;
}
