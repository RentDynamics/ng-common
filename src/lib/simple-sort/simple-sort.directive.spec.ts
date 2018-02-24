/* tslint:disable:no-unused-variable */
import { ElementRef, Inject } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';

import {
  async, inject
} from '@angular/core/testing';

import { SimpleSortDirective } from './simple-sort.directive';
import { SimpleSortModule } from './simple-sort.module';

describe('Directive: SimpleSort', () => {
  // simple style
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SimpleSortModule],
      // Provide a test-double instead
      providers: [
        { provide: ElementRef, useValue: {} }
      ]
    });
  });

  it('should create an instance', () => {
    let component = new SimpleSortDirective();
    expect(component).toBeTruthy();
  });
});