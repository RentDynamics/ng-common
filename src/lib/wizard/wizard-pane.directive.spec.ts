/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { AfterViewInit, Component, ViewChild, DebugElement } from '@angular/core';

import { CoreApiService, TextMsgItApiService } from '@rd/core';
import { CoreApiServiceMock } from '@rd/core/testing';

import { WizardModule } from './wizard.module';
import { WizardPaneDirective } from './wizard-pane.directive';

describe('WizardPaneDirective', () => {
  let component: MockWrapperComponent;
  let debugElem: DebugElement;
  let directive: WizardPaneDirective;
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
    //directive = debugElem.query(By.directive(WizardPaneDirective)).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create WizardPaneDirective', () => {
    expect(component.directive).toBeTruthy();
  });
});

@Component({
  template: `<div rdWizardPane [title]="'Review'"></div>`
})
export class MockWrapperComponent implements AfterViewInit {
    /* alternate way you could access directive
      @ViewChild()--works in tests and in production */
    /* you would access it this way via component.directive */
    /* not available until afterViewInit() */
    @ViewChild(WizardPaneDirective) directive: WizardPaneDirective;

    constructor() { }

    ngAfterViewInit() {
      /* directive should be defined after this point */
    }
}
