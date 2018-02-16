import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormInputComponent } from './components/text-input/text-input.component';
import { DateInputComponent } from './components/date-input/date-input.component';
import { DynamicFieldDirective } from './directives/dynamic-field.directive';
import { DynamicFormComponent } from './dynamic-form.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    DateInputComponent,
    DynamicFieldDirective,
    DynamicFormComponent,
    FormInputComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
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
