/* tslint:disable:no-unused-variable */
import { Component, ElementRef, Inject } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';

import {
  async, inject
} from '@angular/core/testing';

import { ExpandingListViewComponent } from './expanding-list-view.component';

let component: TestHostComponent;
let fixture: ComponentFixture<TestHostComponent>;
let debugElem: DebugElement;
let elem: HTMLElement;

@Component({
  template: `
<rd-expanding-list-view class="collapse-card card-cross-sell" (toggle)="onToggle($event)" [open]="open">
  <div rd-expanding-list-view-header>
    <b>header content</b>
  </div>
  <div rd-expanding-list-view-body *ngIf="open">
    <b>body content</b>
  </div>
</rd-expanding-list-view>`
})
class TestHostComponent {
  open: boolean = false;
  onToggle($event) { this.open = $event; }
}

describe('Component: ExpandingListView', () => {
  // simple style
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestHostComponent, ExpandingListViewComponent],
      imports: [],
      providers: []
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    debugElem = fixture.debugElement.query(By.css('.collapse-card')); // find
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  // it('provider should be defined', () => {
  //   expect(component.elem).toBeTruthy();
  // })
});
