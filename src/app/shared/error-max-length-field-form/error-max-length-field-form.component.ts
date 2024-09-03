import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-max-length-field-form',
  template: `
    <div *ngIf="showError" class="error">
      {{ fieldName }} must be no more than {{ maxLength }} characters long.
    </div>
  `,
  styleUrls: ['./error-max-length-field-form.component.css']
})
export class ErrorMaxLengthFieldFormComponent {
  @Input() showError!: boolean;
  @Input() fieldName!: string;
  @Input() maxLength!: number;
}
