import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TextField } from '../../dynamic-form.component';

@Component({
  selector: 'app-text-input',
  template: `
    <mat-form-field [formGroup]="group">
      <input matInput [placeholder]="config.label" [formControlName]="config.name">
    </mat-form-field>
  `,
})
export class FormInputComponent {
  config: TextField;
  group: FormGroup;

  constructor() {

  }
}
