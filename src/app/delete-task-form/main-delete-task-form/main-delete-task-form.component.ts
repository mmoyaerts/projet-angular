import { Component } from '@angular/core';
import { TaskFacade } from '../../show-tasks/task-facade.service'; // Importer le service TaskFacade

@Component({
  selector: 'app-main-delete-task-form',
  templateUrl: './main-delete-task-form.component.html',
  styleUrls: ['./main-delete-task-form.component.css']
})
export class MainDeleteTaskFormComponent {
  constructor(private taskFacade: TaskFacade) {}

  onTaskDeleted(title: string): void {
    this.taskFacade.getTasks().subscribe(tasks => {
      const task = tasks.find(t => t.title === title);
      if (task) {
        this.taskFacade.deleteTask(task.id);
      } else {
        console.error(`Task with title "${title}" not found.`);
      }
    });
  }
}
