import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskComponent } from './show-tasks/task/task.component';
import { MainTaskComponent } from "./show-tasks/main-task/main-task.component";
import { ShowTasksModule } from './show-tasks/show-tasks.module';
import { AddTaskFormModule } from './add-task-form/add-task-form.module';
import { DeleteTaskFormModule } from './delete-task-form/delete-task-form.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ShowTasksModule, AddTaskFormModule, DeleteTaskFormModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'task-manager';
}

