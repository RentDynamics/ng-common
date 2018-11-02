/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { DebugElement, NO_ERRORS_SCHEMA, Directive } from '@angular/core';

import { CoreApiService, TextMsgItApiService } from '@rd/core';
import { CoreApiServiceMock } from '@rd/core/testing';

import { MessageComponent } from './message.component';
import { PhotosService } from '../../../../photos/photos.service';
import { ImgixService } from '../../../../imgix/imgix.service';
import { NgFormStubDirective } from '../../../shared/test-stubs/ng-form-stub';

import { ImageUrlUtilityService } from '../../../../imgix/image-url-utility.service';
import { SessionCommunityGroupCommunityDirective } from '../../../shared/session';

describe('MessageComponent', () => {
  let component: MessageComponent;
  let fixture: ComponentFixture<MessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        MessageComponent,
        NgFormStubDirective,
        SessionCommunityGroupCommunityDirective,
      ],
      providers: [
        { provide: ImageUrlUtilityService, useValue: {} },
        { provide: 'SessionService', useValue: {} },
        { provide: 'CacheService', useValue: {} },
        { provide: CoreApiService, useValue: CoreApiServiceMock },
        { provide: ImgixService, useValue: {} },
        { provide: TextMsgItApiService, useValue: CoreApiServiceMock },
        { provide: PhotosService, useValue: {} }
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
