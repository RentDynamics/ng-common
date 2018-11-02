/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { AfterViewInit, Component, ViewChild, DebugElement } from '@angular/core';

import { CoreApiService, TextMsgItApiService } from '@rd/core';
import { CoreApiServiceMock } from '@rd/core/testing';

import { FullcalendarModule } from './fullcalendar.module';
import { FullcalendarDirective } from './fullcalendar.directive';

describe('FullcalendarDirective', () => {
  let component: MockWrapperComponent;
  let debugElem: DebugElement;
  let directive: FullcalendarDirective;
  let fixture: ComponentFixture<MockWrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        MockWrapperComponent
      ],
      imports: [
        FullcalendarModule
      ],
      providers: [
        { provide: CoreApiService, useValue: CoreApiServiceMock },
        { provide: TextMsgItApiService, useValue: CoreApiServiceMock },
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
    //directive = debugElem.query(By.directive(FullcalendarDirective)).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create FullcalendarDirective', () => {
    expect(component.directive).toBeTruthy();
  });
});

@Component({
  template: `<div rdFullcalendar></div>`
})
export class MockWrapperComponent implements AfterViewInit {
    /* alternate way you could access directive
      @ViewChild()--works in tests and in production */
    /* you would access it this way via component.directive */
    /* not available until afterViewInit() */
    @ViewChild(FullcalendarDirective) directive: FullcalendarDirective;

    constructor() { }

    ngAfterViewInit() {
      /* directive should be defined after this point */
    }
}
