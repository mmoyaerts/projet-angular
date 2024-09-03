import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Task } from '../models/task';
import { State } from '../models/state';
import { CRUDTaskListService } from './crudtask-list-service.service';

@Injectable({
  providedIn: 'root',
})
export class TaskFacade {
  constructor(private crudTaskListService: CRUDTaskListService) {}

  getTasks(): Observable<Task[]> {
    return this.crudTaskListService.getTasks();
  }

  addTask(task: Task): void {
    this.crudTaskListService.addTask(task);
  }

  updateTask(task: Task): void {
    this.crudTaskListService.updateTask(task);
  }

  deleteTask(id: number): void {
    this.crudTaskListService.deleteTask(id);
  }

  getTasksByState(state: State): Observable<Task[]> {
    return this.crudTaskListService.getTasks().pipe(
      map(tasks => tasks.filter(task => task.state === state))
    );
  }
}
