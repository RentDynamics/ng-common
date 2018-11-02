/* tslint:disable:no-unused-variable */
import { TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';

import { TabComponent } from './tab.component';
import { TabsetComponent } from '../tabset.component';

let component: TabComponent;
let fixture: ComponentFixture<TabComponent>;
let debugElem: DebugElement;
let elem: HTMLElement;

describe('Component: Tab', () => {
  // simple style
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabsetComponent, TabComponent],
      // Provide a test-double instead
      providers: [{
        provide: TabsetComponent,
        useValue: {
          addTab: () => { }
        }
      }]
    });

    fixture = TestBed.createComponent(TabComponent);
    component = fixture.componentInstance;
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  // it('provider should be defined', () => {
  //   expect(component.elem).toBeTruthy();
  // })
});
