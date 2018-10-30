/* tslint:disable:no-unused-variable */
import {
  async,
  ComponentFixture,
  inject,
  TestBed
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import {
  AfterViewInit,
  Component,
  ViewChild,
  DebugElement
} from '@angular/core';

import { CoreApiService, TextMsgItApiService } from '@rd/core';
import { CoreApiServiceMock } from '@rd/core/testing';

// import { BulkEmailNewModule } from '../../../new.module';
import {
  CheckboxGroupDirective,
  CheckboxGroupOptionDirective
} from './checkbox-group.directive';

describe('CheckboxGroupDirective', () => {
  let component: MockWrapperComponent;
  let debugElem: DebugElement;
  let directive: CheckboxGroupDirective;
  let fixture: ComponentFixture<MockWrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        CheckboxGroupDirective,
        CheckboxGroupOptionDirective,
        MockWrapperComponent
      ],
      providers: [
        { provide: CoreApiService, useValue: CoreApiServiceMock },
        { provide: TextMsgItApiService, useValue: CoreApiServiceMock }
      ]
    });
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(MockWrapperComponent);
    component = fixture.componentInstance;
    debugElem = fixture.debugElement;
    fixture.detectChanges();
  });

  beforeEach(() => {
    /* latest way to access directive that you are testing--works in our tests only */
    //directive = debugElem.query(By.directive(CheckboxGroupDirective)).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create CheckboxGroupDirective', () => {
    expect(component.directive).toBeTruthy();
  });

  it('checkboxGroup values should be [0]', () => {
    expect(component.directive.values).toEqual('0');
  });

  it('CheckboxGroupOption value should be 0', () => {
    expect(component.checkboxGroupOptionDirective.value).toEqual(0);
  });

  it('CheckboxGroupOption checked should be true', () => {
    expect(component.checkboxGroupOptionDirective.checked).toBeTruthy();
  });
});

@Component({
  template: `<div rdCheckboxGroup [values]="values">
    <input type='checkbox' rdCheckboxGroupOption [value]='0' />
  </div>`
})
export class MockWrapperComponent implements AfterViewInit {
  /* alternate way you could access directive
      @ViewChild()--works in tests and in production */
  /* you would access it this way via component.directive */
  /* not available until afterViewInit() */
  @ViewChild(CheckboxGroupDirective)
  directive: CheckboxGroupDirective;
  @ViewChild(CheckboxGroupOptionDirective)
  checkboxGroupOptionDirective: CheckboxGroupOptionDirective;
  values: string = '0';
  constructor() {}

  ngAfterViewInit() {
    /* directive should be defined after this point */
  }
}
