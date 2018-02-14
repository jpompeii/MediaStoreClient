import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormInputComponent } from './components/text-input/text-input.component';
import { DateInputComponent } from './components/date-input/date-input.component';
import { DynamicFieldDirective } from './directives/dynamic-field.directive';
import { FormBuilderComponent } from './dynamic-form.component';
import { MaterialModule } from '../../shared/material.module';


@NgModule({
  declarations: [
    DateInputComponent,
    DynamicFieldDirective,
    FormBuilderComponent,
    FormInputComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports: [],
  providers: [],
  entryComponents: [
    DateInputComponent,
    FormInputComponent,
  ]
})
export class DynamicFormModule {}
