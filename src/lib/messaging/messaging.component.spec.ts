import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { of as observableOf } from 'rxjs';

import { MessagingComponent } from './messaging.component';
import { ApiOldApiService, CoreApiService } from '@rd/core';
import { CoreApiServiceMock } from '@rd/core/testing';
import {LocalStorage} from '@ngx-pwa/local-storage';
import {ConversationListItemModel} from '../conversation/conversation-list/conversation-list-item/conversation-list-item.model';
import * as moment from 'moment';

describe('MessagingComponent', () => {
  let component: MessagingComponent;
  let fixture: ComponentFixture<MessagingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagingComponent ],
      providers: [
        { provide: ApiOldApiService, useValue: CoreApiServiceMock },
        { provide: CoreApiService, useValue: CoreApiServiceMock },
        { provide: LocalStorage, useValue: { getItem: () => {}, setItem: () => {} } },
      ],
      schemas: [ NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagingComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getItem onInit', inject([LocalStorage], (localStorage: LocalStorage) => {
    const mockValue = {id: 1};
    const spyLocalStorage = spyOn(localStorage, 'getItem').and.callFake(() => observableOf(mockValue));
    /* Act */
    component.ngOnInit();
    /* Assert */
    expect(spyLocalStorage).toHaveBeenCalled();
  }));

  it('should set leadCard to mockValue onInit', inject([LocalStorage], (localStorage: LocalStorage) => {
    const mockValue = {id: 1};
    const spyLocalStorage = spyOn(localStorage, 'getItem').and.returnValue(observableOf(mockValue));
    /* Act */
    component.ngOnInit();
    /* Assert */
    expect(component.leadCard).toEqual(mockValue);
  }));

  it('should invoke setItem on localStorage when onLeadCardChanged is invoked', inject([LocalStorage], (localStorage: LocalStorage) => {
    const mockValue = {id: 3};
    const spyLocalStorage = spyOn(localStorage, 'setItem').and.returnValue(observableOf(mockValue));
    /* Act */
    component.onLeadCardChange(mockValue);
    /* Assert */
    expect(component.leadCard).toEqual(mockValue);
  }));

  it('should set activeConversation on setActiveConversation', inject([LocalStorage], (localStorage: LocalStorage) => {
    const mockValue = new ConversationListItemModel({ id: 100, person:
      {firstName: '', lastName: '', lead: true, resident: false },
      lastMessage: {conversationId: 2, created: moment(), open: false, id: 4, read: true, msg: 'jfsdaklfjsdkal'},
      communityGroup: {id: 2, name: 'dfsa'} });
    const spyLocalStorage = spyOn(localStorage, 'setItem').and.returnValue(observableOf(mockValue));
    /* Act */
    component.setActiveConversation(mockValue);
    /* Assert */
    expect(component.activeConversation).toEqual(mockValue);
  }));
});
