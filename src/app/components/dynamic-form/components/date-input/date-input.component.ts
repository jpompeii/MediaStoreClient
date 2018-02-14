import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DateField } from '../../dynamic-form.component';

@Component({
  selector: 'app-date-input',
  template: `
    <mat-form-field [formGroup]="group">
      <input matInput [placeholder]="config.label" [matDatepicker]="myDatepicker" [formControlName]="config.name">
      <mat-datepicker #myDatepicker ></mat-datepicker>
    </mat-form-field>
    <mat-datepicker-toggle [for]="myDatepicker"></mat-datepicker-toggle>
  `,
})
export class DateInputComponent {
  config: DateField;
  group: FormGroup;

  constructor() {

  }
}
