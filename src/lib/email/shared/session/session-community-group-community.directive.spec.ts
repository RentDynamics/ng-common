/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AfterViewInit, Component, ViewChild, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';

import { CoreApiService, TextMsgItApiService } from '@rd/core';
import { CoreApiServiceMock } from '@rd/core/testing';

import { SessionModule } from './session.module';
import { SessionCommunityGroupCommunityDirective } from './session-community-group-community.directive';

describe('SessionCommunityGroupCommunityDirective', () => {
  let component: MockWrapperComponent;
  let debugElem: DebugElement;
  let directive: SessionCommunityGroupCommunityDirective;
  let fixture: ComponentFixture<MockWrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        MockWrapperComponent,
        SessionCommunityGroupCommunityDirective,
      ],
      providers: [
        { provide: CoreApiService, useValue: CoreApiServiceMock },
        {
          provide: 'SessionService', useValue: {
            getSessionCommunitiesAsQueryable: (selector) => {
              return {
                toArray: () => {
                  return [
                    { id: 1, communityName: 'shallow springs' },
                    { id: 2, communityName: 'waterfall isle' }
                  ];
                }
              }
            }
          }
        },
        { provide: TextMsgItApiService, useValue: CoreApiServiceMock },
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    });
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(MockWrapperComponent);
    component = fixture.componentInstance;
    debugElem = fixture.debugElement;
    //fixture.detectChanges();
  });

  beforeEach(() => {
    /* latest way to access directive that you are testing--works in our tests only */
    //directive = debugElem.query(By.directive(SessionCommunityGroupCommunityDirective)).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create SessionCommunityGroupCommunityDirective', () => {
    expect(component.directive).toBeTruthy();
  });

  it('Get community group communities', () => {
    expect(component.directive.getCommunityGroupCommunities(1)).toBeTruthy();
  });
});

@Component({
  template: `<div rdSessionCommunityGroupCommunity></div>`
})
export class MockWrapperComponent implements AfterViewInit {
  /* alternate way you could access directive 
      @ViewChild()--works in tests and in production */
  /* you would access it this way via component.directive */
  /* not available until afterViewInit() */
  @ViewChild(SessionCommunityGroupCommunityDirective) directive: SessionCommunityGroupCommunityDirective;

  constructor() { }

  ngAfterViewInit() {
    /* directive should be defined after this point */
  }
}