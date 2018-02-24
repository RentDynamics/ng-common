/* tslint:disable:no-unused-variable */
import { ElementRef, Inject } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';

import {
  async, inject
} from '@angular/core/testing';

import { UploadFileProgressBarComponent } from './upload-file-progress-bar.component';
import { UploadComponent } from '../../upload.component';

let component: UploadFileProgressBarComponent;
let fixture: ComponentFixture<UploadFileProgressBarComponent>;
let debugElem: DebugElement;
let elem: HTMLElement;

describe('Component: UploadFileProgressBar', () => {
  // simple style
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploadComponent, UploadFileProgressBarComponent],
      // Provide a test-double instead
      providers: [{
        provide: UploadComponent,
        useValue: {}
      }]
    });

    fixture = TestBed.createComponent(UploadFileProgressBarComponent);
    component = fixture.componentInstance;
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  // it('provider should be defined', () => {
  //   expect(component.elem).toBeTruthy();
  // })
});
