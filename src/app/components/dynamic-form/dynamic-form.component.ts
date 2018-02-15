import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn } from '@angular/forms';


export interface Field {
  type: string;
  required?: boolean;
  name: string;
  label: string;
}

export interface Section  {
  id: string;
  title?: string;
  standalone?: boolean;
  fields: (TextField | DateField)[];
}

export interface TextField extends Field {
  type: 'text';
  value: string;
}
export interface DateField extends Field {
  type: 'date';
  value: Date;
}

export interface DynamicFormConfig {
  title: string;
  sections: Section[];
  sectionOrder: string[];
}

@Component({
  selector: 'app-dynamic-forms',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class FormBuilderComponent implements OnInit {

  _form: FormGroup;

  _formConfiguration: DynamicFormConfig = {
    title: 'Test Form',
    sectionOrder: ['last', 'first', 'second' ],
    sections: [
      {
        id: 'first',
        standalone: true,
        fields: [
          {
            name: 'invoice',
            type: 'text',
            required: true,
            label: 'Invoice Number',
            value: '1234'
          },
        ]
      },
      {
        id: 'second',
        title: 'ONE',
        fields: [
          {
            name: 'address1',
            type: 'text',
            label: 'Address #1',
            value: '594 Bell Ave'
          },
          {
            name: 'address2',
            type: 'text',
            label: 'Address #2',
            value: 'Apt 122'
          },
          {
            name: 'purchaseDate',
            type: 'date',
            label: 'Purchase Date',
            value: new Date('1/11/1985')
          }
        ]
      },
      {
        id: 'last',
        title: 'License Info',
        fields: [
          {
            name: 'drivers_license',
            type: 'text',
            required: true,
            label: `Driver's License`,
            value: 'SD03982'
          },
        ]
      }
    ]
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this._form = this.buildForm();
  }

  private buildForm() {

    const form = this.fb.group({
    });

    this._formConfiguration.sections.forEach(section => {
      form.addControl(section.id, this.convertFields(section.fields));
    });
    return form;
  }

  private convertFields(fields: (TextField | DateField)[]): FormGroup {
    const group = this.fb.group({});
    fields.forEach(field => {
      group.addControl(field.name, this.fb.control(field.value, this.generateValidators(field)));
    });
    return group;
  }

  _sortSections(config: DynamicFormConfig): Section[] {
    return config.sectionOrder.map(sectionId => {
      return config.sections.find(section => section.id === sectionId);
    });
  }

  private generateValidators(field: Field): ValidatorFn[] {
    const validators = [];
    if (field.required) {
      validators.push(Validators.required);
    }
    return validators;
  }
}
