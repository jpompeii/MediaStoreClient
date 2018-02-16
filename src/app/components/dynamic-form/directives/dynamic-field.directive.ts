import { Directive, Input, ViewContainerRef, ComponentFactoryResolver, OnInit, ComponentRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../dynamic-form.component';
import { FormInputComponent } from '../components/text-input/text-input.component';
import { DateInputComponent } from '../components/date-input/date-input.component';

const components = {
  text: FormInputComponent,
  date: DateInputComponent,
};

@Directive({
  selector: '[appDynamicField]',
})
export class DynamicFieldDirective implements OnInit {
  @Input()
  config: Field;

  @Input()
  group: FormGroup;

  private _editing: boolean;

  @Input()
  set editing(val: boolean) {
    this._editing = val;
    if (this.componentInstance) {
      this.componentInstance.instance.editing = this._editing;
      this.componentInstance.changeDetectorRef.detectChanges();
    }
  }

  private componentInstance: ComponentRef<any>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) {
  }

  ngOnInit() {
    const component = components[this.config.type];
    const factory = this.resolver.resolveComponentFactory<any>(component);
    this.componentInstance = this.container.createComponent(factory);
    this.componentInstance.instance.config = this.config;
    this.componentInstance.instance.group = this.group;
    this.componentInstance.instance.editing = this._editing;
  }
}
