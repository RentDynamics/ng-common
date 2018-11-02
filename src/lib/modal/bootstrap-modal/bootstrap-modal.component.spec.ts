/* tslint:disable:no-unused-variable */
import { ElementRef, Inject } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';

import { ModalComponent } from '../modal.component';
import { BootstrapModalComponent } from './bootstrap-modal.component';

let component: BootstrapModalComponent;
let fixture: ComponentFixture<BootstrapModalComponent>;
let debugElem: DebugElement;
let elem: HTMLElement;

describe('Component: BootstrapModal', () => {
  // simple style
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalComponent, BootstrapModalComponent],
      // Provide a test-double instead
      providers: [{ provide: ElementRef, useValue: {} }]
    });

    fixture = TestBed.createComponent(BootstrapModalComponent);
    component = fixture.componentInstance;
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  it('show() method should be defined', () => {
    expect(component.show).toBeTruthy();
  });
});
