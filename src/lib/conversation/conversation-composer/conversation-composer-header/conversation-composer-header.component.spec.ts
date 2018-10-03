import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversationComposerHeaderComponent } from './conversation-composer-header.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('ConversationComposerHeaderComponent', () => {
  let component: ConversationComposerHeaderComponent;
  let fixture: ComponentFixture<ConversationComposerHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConversationComposerHeaderComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversationComposerHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
