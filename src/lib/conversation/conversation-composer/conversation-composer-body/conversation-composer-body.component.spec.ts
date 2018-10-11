import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {NO_ERRORS_SCHEMA, SimpleChange, SimpleChanges} from '@angular/core';
import {inject} from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of as observableOf } from 'rxjs';

import { ConversationComposerBodyComponent } from './conversation-composer-body.component';
import {HttpClient} from '@angular/common/http';
import {ConversationListItemModel} from '../../conversation-list/conversation-list-item/conversation-list-item.model';
import * as moment from 'moment';
import {CoreApiService} from '@rd/core';
import {CoreApiServiceMock} from '@rd/core/testing';

describe('ConversationComposerBodyComponent', () => {
  let component: ConversationComposerBodyComponent;
  let fixture: ComponentFixture<ConversationComposerBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ ConversationComposerBodyComponent ],
      providers: [
        { provide: CoreApiService, useValue: CoreApiServiceMock }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversationComposerBodyComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not invoke getMessages onInit if activeConversation is not defined', inject([HttpClient], (httpClient: HttpClient) => {
    /* Arrange */
    const spy = spyOn(component, 'getMessages').and.callFake(() => {});
    /* Act */
    component.ngOnInit();
    /* Assert */
    expect(spy).not.toHaveBeenCalled();
  }));

  it('should invoke getMessages onInit if activeConversation is defined', inject([HttpClient], (httpClient: HttpClient) => {
    /* Arrange */
    const spy = spyOn(component, 'getMessages').and.callFake(() => {});
    component.activeConversation = new ConversationListItemModel({ id: 100, person:
      {firstName: '', lastName: '', lead: true, resident: false },
      lastMessage: {conversationId: 2, created: moment(), open: false, id: 4, read: true, msg: 'jfsdaklfjsdkal'},
      communityGroup: {id: 2, name: 'dfsa'} });
    /* Act */
    component.ngOnInit();
    /* Assert */
    expect(spy).toHaveBeenCalled();
  }));

  it('should invoke getMessages on ngOnChanges when is not first change', inject([HttpClient], (httpClient: HttpClient) => {
    /* Arrange */
    const spy = spyOn(component, 'getMessages').and.callFake(() => {});
    /* Act */
    component.ngOnChanges({ 'activeConversation': new SimpleChange({id: 1}, {id: 2}, false) });
    /* Assert */
    expect(spy).toHaveBeenCalled();
  }));

  it('should not invoke getMessages on ngOnChanges when is first change', inject([HttpClient], (httpClient: HttpClient) => {
    /* Arrange */
    const spy = spyOn(component, 'getMessages').and.callFake(() => {});
    /* Act */
    component.ngOnChanges({ 'activeConversation': new SimpleChange(1, 0, true) });
    /* Assert */
    expect(spy).not.toHaveBeenCalled();
  }));

  it('getMessages should invoke httpClient get', inject([HttpClient], (httpClient: HttpClient) => {
    /* Arrange */
    const spy = spyOn(httpClient, 'get').and.returnValue(observableOf({ id: 1, data: [] }));
    component.activeConversation = new ConversationListItemModel(100,
      {firstName: '', lastName: '', lead: true, resident: false },
      {conversationId: 2, created: moment(), open: false, id: 4, read: true, msg: 'jfsdaklfjsdkal'},
      {id: 2, name: 'dfsa'});
    /* Act */
    component.getMessages();
    /* Assert */
    expect(spy).toHaveBeenCalled();
  }));
});
