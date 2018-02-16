import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TextField } from '../../dynamic-form.component';

@Component({
  selector: 'app-text-input',
  template: `


  <ng-container *ngIf="!editing; else editMode">
      <mat-form-field [formGroup]="group">
      <input matInput [placeholder]="config.label" [formControlName]="config.name">
    </mat-form-field>
  </ng-container>

  <ng-template #editMode>
    <div>
      <mat-form-field>
        <input matInput placeholder="Field Name" [value]="config.name">
      </mat-form-field>
      </div>
    <div>
      <mat-form-field>
        <input matInput placeholder="Default Value">
      </mat-form-field>
    </div>
    <div>
    <mat-form-field>
      <mat-select placeholder="Type">
        <mat-option>
          Text
        </mat-option>
        <mat-option>
          Date
        </mat-option>
        <mat-option>
          Numeric
        </mat-option>
      </mat-select>
      </mat-form-field>
    </div>
    <div>
      <mat-slide-toggle>Required</mat-slide-toggle>
    </div>
  </ng-template>
  `,
})
export class FormInputComponent {
  config: TextField;
  group: FormGroup;
  editing = false;

  constructor() {

  }
}
