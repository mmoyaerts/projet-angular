import { Component } from '@angular/core';
import { TaskFacade } from '../../show-tasks/task-facade.service'; // Importer le service TaskFacade
import { Task } from '../../models/task';

@Component({
  selector: 'app-main-add-task-form',
  templateUrl: './main-add-task-form.component.html',
  styleUrls: ['./main-add-task-form.component.css']
})
export class MainAddTaskFormComponent {
  constructor(private taskFacade: TaskFacade) {}

  onTaskAdded(newTask: Task): void {
    this.taskFacade.addTask(newTask);
  }
}
