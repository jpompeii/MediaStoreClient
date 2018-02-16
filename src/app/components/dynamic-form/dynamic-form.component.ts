import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn } from '@angular/forms';
import { MatDialog, MatSlideToggleChange } from '@angular/material';


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
  editing?: boolean;
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
export class DynamicFormComponent implements OnInit {

  _form: FormGroup;

  _formConfiguration: DynamicFormConfig = {
    title: 'Test Form',
    sectionOrder: ['first', 'second', 'last' ],
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

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this._form = this.buildForm();
  }

  _sortSections(config: DynamicFormConfig): Section[] {
    return config.sectionOrder.map(sectionId => {
      return config.sections.find(section => section.id === sectionId);
    });
  }

  _sectionUp(sectionId: string) {
    this.moveSection(sectionId, -1);
  }

  _sectionDown(sectionId: string) {
    this.moveSection(sectionId, 1);
  }
  private moveSection(sectionId: string, direction: -1 | 1) {
    const sectionOrder = this._formConfiguration.sectionOrder;
    const index = sectionOrder.findIndex(section => section === sectionId);

    if (direction === -1 && index > 0 || direction === 1 && index < sectionOrder.length - 1) {
      const currentValue = sectionOrder[index + direction];
      sectionOrder[index + direction] = sectionId;
      sectionOrder[index] = currentValue;
    }
  }

  _toggleEdit(sectionId: string) {
    const section = this._formConfiguration.sections
      .find(s => s.id === sectionId);

    if (section) {
      section.editing = !section.editing;
    }
  }

  _toggleEditMode(matSlideToggleChange: MatSlideToggleChange) {
    if (!matSlideToggleChange.checked) {
      this._formConfiguration.sections.forEach(s => s.editing = false);
    }
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

  private generateValidators(field: Field): ValidatorFn[] {
    const validators = [];
    if (field.required) {
      validators.push(Validators.required);
    }
    return validators;
  }
}
