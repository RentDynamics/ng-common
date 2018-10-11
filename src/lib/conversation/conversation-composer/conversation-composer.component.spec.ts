import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversationComposerComponent } from './conversation-composer.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('ConversationComposerComponent', () => {
  let component: ConversationComposerComponent;
  let fixture: ComponentFixture<ConversationComposerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConversationComposerComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversationComposerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
