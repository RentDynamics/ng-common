/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AfterViewInit, Component, ViewChild, DebugElement } from '@angular/core';

import { CoreApiService, TextMsgItApiService } from '@rd/core';
import { CoreApiServiceMock } from '@rd/core/testing';

import { RdAngularMaskModule } from './mask.module';
import { TextUnmaskDirective } from './text-unmask.directive';
import { REGEX_MASK } from './regex-mask';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms/src/model';


describe('TextUnmaskDirective', () => {
   let component: MockWrapperComponent;
   let debugElem: DebugElement;
   let directive: TextUnmaskDirective;
   let fixture: ComponentFixture<MockWrapperComponent>;

   beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        MockWrapperComponent
      ],
      imports: [
        ReactiveFormsModule,
        RdAngularMaskModule
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
    //directive = debugElem.query(By.directive(TextUnmaskDirective)).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create TextUnmaskDirective', () => {
    expect(component.directive).toBeTruthy();
  });

  describe('valueChange()', () => {
    beforeEach(() => {

    })
    it('should find #inputElem', () => {
      expect(component.inputElem).toBeTruthy();
    });
  });
});

@Component({
  template: `
  <form [formGroup]="form">
    <input #inputElem [textMask]="{ mask: REGEX.PRICE_MASK }" [rdTextUnmask]="REGEX.PRICE_UNMASK" [formControlName]="'maxPrice'" />
  </form>
  `
})
export class MockWrapperComponent implements AfterViewInit {
    /* alternate way you could access directive 
       @ViewChild()--works in tests and in production */
    /* you would access it this way via component.directive */
    /* not available until afterViewInit() */
    @ViewChild('inputElem') inputElem: HTMLInputElement;
    @ViewChild(TextUnmaskDirective) directive: TextUnmaskDirective;
    readonly REGEX = REGEX_MASK;
    form: FormGroup = new FormGroup({});

    constructor() { }

    ngAfterViewInit() {
      /* directive should be defined after this point */
    }
}
