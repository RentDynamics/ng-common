/* tslint:disable:no-unused-variable */
import { ElementRef, Inject } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';

import {
  async, inject
} from '@angular/core/testing';

import { UploadFileQueueComponent } from './upload-file-queue.component';
import { UploadFilePreviewComponent } from '../upload-file-preview/index';
import { UploadComponent } from '../../upload.component';

let component: UploadFileQueueComponent;
let fixture: ComponentFixture<UploadFileQueueComponent>;
let debugElem: DebugElement;
let elem: HTMLElement;

describe('Component: UploadFileQueue', () => {
  // simple style
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploadComponent, UploadFileQueueComponent, UploadFilePreviewComponent],
      // Provide a test-double instead
      providers: [{
        provide: UploadComponent,
        useValue: {}
      }]
    });

    fixture = TestBed.createComponent(UploadFileQueueComponent);
    component = fixture.componentInstance;
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  // it('provider should be defined', () => {
  //   expect(component.elem).toBeTruthy();
  // })
});
