import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';

import { ConversationListComponent } from './conversation-list.component';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {CoreApiService} from '@rd/core';
import {CoreApiServiceMock} from '@rd/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ConversationListComponent', () => {
  let component: ConversationListComponent;
  let fixture: ComponentFixture<ConversationListComponent>;
  let fb: FormBuilder;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConversationListComponent ],
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule
      ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: FormBuilder, useValue: { group: () => {}  } },
        { provide: CoreApiService, useValue: CoreApiServiceMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(inject([FormBuilder], (fb2) => {
    fixture = TestBed.createComponent(ConversationListComponent);
    component = fixture.componentInstance;
    fb = fb2;
    // fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get conversations onInit', () => {
    /* Arrange */
    /* Act */
    component.ngOnInit();
    /* Assert */
    expect(component.conversations).toBeTruthy();
  });

  it('should set filter on filterChange', () => {
    /* Arrange */
    const mockFilter = {openOrClosedFc: true }
    /* Act */
    component.filterChange(mockFilter);
    /* Assert */
    expect(component.filter).toEqual(mockFilter);
  });

  it('getConversations', () => {
    /* Arrange */
    const mockFilter = {openOrClosedFc: true }
    /* Act */
    component.filterChange(mockFilter);
    /* Assert */
    expect(component.filter).toEqual(mockFilter);
  });
});
