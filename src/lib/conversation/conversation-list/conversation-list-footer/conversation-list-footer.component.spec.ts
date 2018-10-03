import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversationListFooterComponent } from './conversation-list-footer.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('ConversationListFooterComponent', () => {
  let component: ConversationListFooterComponent;
  let fixture: ComponentFixture<ConversationListFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConversationListFooterComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversationListFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
