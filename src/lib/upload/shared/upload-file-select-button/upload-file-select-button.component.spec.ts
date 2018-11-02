/* tslint:disable:no-unused-variable */
import { TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';

import { FileDropDirective, FileSelectDirective } from 'ng2-file-upload';

import { UploadFileSelectButtonComponent } from './upload-file-select-button.component';
import { UploadComponent } from '../../upload.component';

let component: UploadFileSelectButtonComponent;
let fixture: ComponentFixture<UploadFileSelectButtonComponent>;
let debugElem: DebugElement;
let elem: HTMLElement;

describe('Component: UploadFileSelectButton', () => {
  // simple style
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploadComponent, UploadFileSelectButtonComponent, FileSelectDirective],
      // Provide a test-double instead
      providers: [{
        provide: UploadComponent,
        useValue: {}
      }]
    });

    fixture = TestBed.createComponent(UploadFileSelectButtonComponent);
    component = fixture.componentInstance;
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  // it('provider should be defined', () => {
  //   expect(component.elem).toBeTruthy();
  // })
});
