import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMinLengthFieldFormComponent } from './error-min-length-field-form/error-min-length-field-form.component';
import { ErrorMaxLengthFieldFormComponent } from './error-max-length-field-form/error-max-length-field-form.component';
import { ErrorRequiredFieldFormComponent } from './error-required-field-form/error-required-field-form.component';

@NgModule({
  declarations: [
    ErrorMinLengthFieldFormComponent,
    ErrorMaxLengthFieldFormComponent,
    ErrorRequiredFieldFormComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ErrorMinLengthFieldFormComponent,
    ErrorMaxLengthFieldFormComponent,
    ErrorRequiredFieldFormComponent
  ]
})
export class SharedModule { }
