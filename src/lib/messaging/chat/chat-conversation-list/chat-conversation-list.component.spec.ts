import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatConversationListComponent } from './chat-conversation-list.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CoreApiService } from '@rd/core';
import { CoreApiServiceMock } from '@rd/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ChatConversationListComponent', () => {
  let component: ChatConversationListComponent;
  let fixture: ComponentFixture<ChatConversationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatConversationListComponent ],
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        { provide: CoreApiService, useValue: CoreApiServiceMock }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatConversationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
