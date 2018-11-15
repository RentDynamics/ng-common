/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';
import {AfterViewInit, Component, ViewChild, DebugElement} from '@angular/core';

import {CoreApiService, TextMsgItApiService} from '@rd/core';
import {CoreApiServiceMock} from '@rd/core/testing';
import {ImmutableService} from '@rd/core';

import {WizardModule} from './wizard.module';
import {WizardDirective} from './wizard.directive';

describe('WizardDirective', () => {
  let component: MockWrapperComponent;
  let debugElem: DebugElement;
  let directive: WizardDirective;
  let fixture: ComponentFixture<MockWrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        MockWrapperComponent
      ],
      imports: [
        WizardModule
      ],
      providers: [
        {provide: CoreApiService, useValue: CoreApiServiceMock},
        {provide: ImmutableService, useValue: {}},
        {provide: TextMsgItApiService, useValue: CoreApiServiceMock},
      ]
    });
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(MockWrapperComponent);
    component = fixture.componentInstance;
    debugElem = fixture.debugElement;
    //fixture.detectChanges();
  });

  beforeEach(() => {
    /* latest way to access directive that you are testing--works in our tests only */
    //directive = debugElem.query(By.directive(WizardDirective)).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create WizardDirective', () => {
    expect(component.directive).toBeTruthy();
  });
});

@Component({
  template: `<div rdWizard></div>`
})
export class MockWrapperComponent implements AfterViewInit {
  /* alternate way you could access directive
    @ViewChild()--works in tests and in production */
  /* you would access it this way via component.directive */
  /* not available until afterViewInit() */
  @ViewChild(WizardDirective) directive: WizardDirective;

  constructor() {
  }

  ngAfterViewInit() {
    /* directive should be defined after this point */
  }
}
