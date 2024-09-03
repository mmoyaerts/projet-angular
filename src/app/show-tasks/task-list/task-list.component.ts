import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { State } from '../../models/state';
import { TaskFacade } from '../task-facade.service'; // Importer le service TaskFacade

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  @Input() tasks!: Task[];
  newTask: Task = {
    id: 0,
    title: '',
    description: '',
    date: new Date(),
    state: State.A_FAIRE,
  };
  State = State;
  selectedState: State = State.A_FAIRE;

  constructor(private taskFacade: TaskFacade) {} // Injection du service TaskFacade

  ngOnInit(): void {
    this.taskFacade.getTasksByState(this.selectedState).subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  onStateChange(): void {
    this.taskFacade.getTasksByState(this.selectedState).subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  addNewTask(): void {
    const taskToAdd: Task = {
      ...this.newTask,
      id: this.tasks.length > 0 ? Math.max(...this.tasks.map(t => t.id)) + 1 : 1,
      date: new Date(this.newTask.date),
    };
    this.taskFacade.addTask(taskToAdd);
    this.resetForm();
  }

  updateTask(task: Task): void {
    this.taskFacade.updateTask(task);
  }

  deleteTask(id: number): void {
    this.taskFacade.deleteTask(id);
  }

  toggleTaskState(task: Task): void {
    const updatedState = this.getNextState(task.state);
    this.updateTask({ ...task, state: updatedState });
  }

  private getNextState(currentState: State): State {
    switch (currentState) {
      case State.A_FAIRE:
        return State.EN_COURS;
      case State.EN_COURS:
        return State.TERMINEE;
      case State.TERMINEE:
        return State.A_FAIRE;
      default:
        return State.A_FAIRE;
    }
  }

  private resetForm(): void {
    this.newTask = {
      id: 0,
      title: '',
      description: '',
      date: new Date(),
      state: State.A_FAIRE,
    };
  }
}
