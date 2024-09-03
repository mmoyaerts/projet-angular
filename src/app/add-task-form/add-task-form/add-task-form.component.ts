import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from '../../models/task';
import { State } from '../../models/state';

@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.css']
})
export class AddTaskFormComponent implements OnInit {
  addTaskForm!: FormGroup;
  states = Object.values(State);

  @Output() taskAdded = new EventEmitter<Task>();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.addTaskForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      description: ['', [Validators.minLength(10), Validators.maxLength(200)]],
      date: ['', Validators.required],
      state: [State.A_FAIRE, Validators.required]
    });
  }

  onSubmit(): void {
    if (this.addTaskForm.valid) {
      const newTask: Task = {
        id: 0,
        title: this.addTaskForm.get('title')?.value,
        description: this.addTaskForm.get('description')?.value,
        date: new Date(this.addTaskForm.get('date')?.value),
        state: this.addTaskForm.get('state')?.value,
      };
      this.taskAdded.emit(newTask);
      this.addTaskForm.reset({ state: State.A_FAIRE });
    }
  }
}
