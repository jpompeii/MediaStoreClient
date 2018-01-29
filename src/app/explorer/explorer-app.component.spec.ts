import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExporerAppComponent } from './exporer-app.component';

describe('ExporerAppComponent', () => {
  let component: ExporerAppComponent;
  let fixture: ComponentFixture<ExporerAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExporerAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExporerAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
