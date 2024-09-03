import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-required-field-form',
  template: `
    <div *ngIf="showError" class="error">
      {{ fieldName }} is required.
    </div>
  `,
  styleUrls: ['./error-required-field-form.component.css']
})
export class ErrorRequiredFieldFormComponent {
  @Input() showError!: boolean;
  @Input() fieldName!: string;
}
