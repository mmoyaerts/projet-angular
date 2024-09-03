import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-delete-task-form',
  templateUrl: './delete-task-form.component.html',
  styleUrls: ['./delete-task-form.component.css']
})
export class DeleteTaskFormComponent implements OnInit {
  deleteTaskForm!: FormGroup;

  @Output() taskDeleted = new EventEmitter<string>(); // Événement émis lors de la suppression d'une tâche

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.deleteTaskForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]]
    });
  }

  onSubmit(): void {
    if (this.deleteTaskForm.valid) {
      const title = this.deleteTaskForm.get('title')?.value;
      this.taskDeleted.emit(title); // Émettre l'événement avec le titre de la tâche à supprimer
      this.deleteTaskForm.reset();
    }
  }
}
