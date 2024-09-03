import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-min-length-field-form',
  template: `
    <div *ngIf="showError" class="error">
      {{ fieldName }} must be at least {{ minLength }} characters long.
    </div>
  `,
  styleUrls: ['./error-min-length-field-form.component.css']
})
export class ErrorMinLengthFieldFormComponent {
  @Input() showError!: boolean;
  @Input() fieldName!: string;
  @Input() minLength!: number;
}
