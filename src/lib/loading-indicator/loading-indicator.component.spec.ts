/* tslint:disable:no-unused-variable */
import { ElementRef, Inject } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';

import {
  async, inject
} from '@angular/core/testing';

import { LoadingIndicatorComponent } from './loading-indicator.component';

let component: LoadingIndicatorComponent;
let fixture: ComponentFixture<LoadingIndicatorComponent>;
let debugElem: DebugElement;
let elem: HTMLElement;

describe('Component: LoadingIndicator', () => {
  // simple style
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadingIndicatorComponent],
      // Provide a test-double instead
      providers: []
    });

    fixture = TestBed.createComponent(LoadingIndicatorComponent);
    component = fixture.componentInstance;
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });
});