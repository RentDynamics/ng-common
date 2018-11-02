/* tslint:disable:no-unused-variable */
import { TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { FileDropDirective, FileSelectDirective } from 'ng2-file-upload';

import { UploadFileDropZoneComponent } from './upload-file-drop-zone.component';
import { UploadComponent } from '../../upload.component';

let component: UploadFileDropZoneComponent;
let fixture: ComponentFixture<UploadFileDropZoneComponent>;
let debugElem: DebugElement;
let elem: HTMLElement;

describe('Component: UploadFileDropZone', () => {
  // simple style
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FileDropDirective, UploadComponent, UploadFileDropZoneComponent],
      // Provide a test-double instead
      providers: [{
        provide: UploadComponent,
        useValue: {}
      }]
    });

    fixture = TestBed.createComponent(UploadFileDropZoneComponent);
    component = fixture.componentInstance;
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  // it('provider should be defined', () => {
  //   expect(component.elem).toBeTruthy();
  // })
});
