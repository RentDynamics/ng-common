import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversationListBodyComponent } from './conversation-list-body.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('ConversationListBodyComponent', () => {
  let component: ConversationListBodyComponent;
  let fixture: ComponentFixture<ConversationListBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConversationListBodyComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversationListBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
