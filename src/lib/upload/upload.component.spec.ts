/* tslint:disable:no-unused-variable */
import { TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';

import { UploadComponent } from './upload.component';

let component: UploadComponent;
let fixture: ComponentFixture<UploadComponent>;
let debugElem: DebugElement;
let elem: HTMLElement;

describe('Component: Upload', () => {
  // simple style
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploadComponent],
    });

    fixture = TestBed.createComponent(UploadComponent);
    component = fixture.componentInstance;
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  // it('provider should be defined', () => {
  //   expect(component.elem).toBeTruthy();
  // })
});
