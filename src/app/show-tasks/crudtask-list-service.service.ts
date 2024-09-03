import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../models/task';
import { State } from '../models/state';

@Injectable({
  providedIn: 'root',
})
export class CRUDTaskListService {
  private tasksSubject: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>([
    { id: 1, title: 'Task 1', description: 'First task', date: new Date(), state: State.A_FAIRE },
    { id: 2, title: 'Task 2', description: 'Second task', date: new Date(), state: State.EN_COURS },
    { id: 3, title: 'Task 3', description: 'Third task', date: new Date(), state: State.TERMINEE },

  ]);

  constructor() {}

  getTasks(): Observable<Task[]> {
    return this.tasksSubject.asObservable();
  }

  addTask(task: Task): void {
    const tasks = this.tasksSubject.getValue();
    task.id = tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1;
    tasks.push(task);
    this.tasksSubject.next(tasks);
  }

  updateTask(updatedTask: Task): void {
    const tasks = this.tasksSubject.getValue();
    const index = tasks.findIndex(t => t.id === updatedTask.id);
    if (index !== -1) {
      tasks[index] = updatedTask;
      this.tasksSubject.next(tasks);
    }
  }

  // Supprimer une tâche
  deleteTask(id: number): void {
    let tasks = this.tasksSubject.getValue();
    tasks = tasks.filter(t => t.id !== id);
    this.tasksSubject.next(tasks);
  }
}
