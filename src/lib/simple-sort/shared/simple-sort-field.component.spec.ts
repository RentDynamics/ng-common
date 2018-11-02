/* tslint:disable:no-unused-variable */
import { ElementRef, Inject } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';

import { RdAngularCommonModule } from '../../common.module';
import { SimpleSortDirective } from '../simple-sort.directive';
import { SimpleSortFieldComponent } from './simple-sort-field.component';

let component: SimpleSortFieldComponent;
let fixture: ComponentFixture<SimpleSortFieldComponent>;
let debugElem: DebugElement;
let elem: HTMLElement;

describe('Component: SimpleSortField', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RdAngularCommonModule],
      providers: [
        { provide: ElementRef, useValue: {} },
        { provide: SimpleSortDirective, useValue: {} }
      ]
    });

    fixture = TestBed.createComponent(SimpleSortFieldComponent);
    component = fixture.componentInstance;
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });
});
