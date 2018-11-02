/* tslint:disable:no-unused-variable */
import { TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';

import { TabNavComponent } from './tab-nav.component';
import { TabsetComponent } from '../tabset.component';

let component: TabNavComponent;
let fixture: ComponentFixture<TabNavComponent>;
let debugElem: DebugElement;
let elem: HTMLElement;

describe('Component: TabNav', () => {
  // simple style
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabsetComponent, TabNavComponent],
      // Provide a test-double instead
      providers: [{
        provide: TabsetComponent,
        useValue: {
          addTab: () => { }
        }
      }]
    });

    fixture = TestBed.createComponent(TabNavComponent);
    component = fixture.componentInstance;
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  // it('provider should be defined', () => {
  //   expect(component.elem).toBeTruthy();
  // })
});
