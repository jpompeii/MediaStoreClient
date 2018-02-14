import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


export interface Field {
  type: string;
  name: string;
  label: string;
}

export interface TextField extends Field {
  type: 'text';
  value: string;
}
export interface DateField extends Field {
  type: 'date';
  value: Date;
}

@Component({
  selector: 'app-dynamic-forms',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class FormBuilderComponent implements OnInit {

  _form: FormGroup;

  _formConfiguration: (TextField | DateField)[] = [
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
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this._form = this.buildForm();
  }

  private buildForm() {
    const group = this.fb.group({});
    this._formConfiguration.forEach(control => group.addControl(control.name, this.fb.control(control.value)));
    return group;
  }
}
