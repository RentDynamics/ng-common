import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsConversationListComponent } from './sms-conversation-list.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CoreApiService } from '@rd/core';
import { CoreApiServiceMock } from '@rd/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SmsConversationListComponent', () => {
  let component: SmsConversationListComponent;
  let fixture: ComponentFixture<SmsConversationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [ SmsConversationListComponent ],
      providers: [
        { provide: CoreApiService, useValue: CoreApiServiceMock },
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsConversationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
