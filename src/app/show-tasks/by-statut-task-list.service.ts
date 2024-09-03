import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Task } from '../models/task';
import { State } from '../models/state';
import { CRUDTaskListService } from './crudtask-list-service.service';
import { ByStatusTaskListInterface } from './interfaces/by-status-task-list-interface';

@Injectable({
  providedIn: 'root',
})
export class ByStatutTaskListService implements ByStatusTaskListInterface{
  constructor(private crudTaskListService: CRUDTaskListService) {}

  getTasksByState(state: State): Observable<Task[]> {
    return this.crudTaskListService.getTasks().pipe(
      map(tasks => tasks.filter(task => task.state === state))
    );
  }
}
