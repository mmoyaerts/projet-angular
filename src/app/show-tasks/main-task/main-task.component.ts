import { Component, OnInit, OnDestroy } from '@angular/core';
import { Task } from '../../models/task';
import { TaskFacade } from '../task-facade.service';
import { State } from '../../models/state';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-main-task',
  templateUrl: './main-task.component.html',
  styleUrls: ['./main-task.component.css']
})
export class MainTaskComponent implements OnInit, OnDestroy {
  currentTask!: Task[];
  selectedState: State = State.A_FAIRE;
  private destroy$ = new Subject<void>();

  constructor(private taskFacade: TaskFacade) {}

  ngOnInit(): void {
    this.taskFacade.getTasks()
      .pipe(takeUntil(this.destroy$))
      .subscribe(tasks => {
        this.currentTask = tasks;
      });

    this.loadTasksByState(this.selectedState);
  }

  loadTasksByState(state: State): void {
    this.taskFacade.getTasksByState(state)
      .pipe(takeUntil(this.destroy$))
      .subscribe(tasks => {
        this.currentTask = tasks;
      });
  }

  onStateChange(): void {
    this.loadTasksByState(this.selectedState);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
