/* tslint:disable:no-unused-variable */
import { ElementRef, Inject } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';

import { ModalComponent } from './modal.component';

let component: ModalComponent;
let fixture: ComponentFixture<ModalComponent>;
let debugElem: DebugElement;
let elem: HTMLElement;

describe('Component: Modal', () => {
  // simple style
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalComponent],
      // Provide a test-double instead
      providers: [{ provide: ElementRef, useValue: {} }]
    });

    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  it('provider should be defined', () => {
    expect(component.elem).toBeTruthy();
  })
});

  // // asynch beforeEach
  // beforeEach( async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [ DashboardHeroComponent ],
  //   })
  //   .compileComponents(); // compile template and css
  // }));
