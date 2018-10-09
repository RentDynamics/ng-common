/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { CoreApiService, TextMsgItApiService } from '@rd/core';
import { CoreApiServiceMock } from '@rd/core/testing';

import { PhotosModule } from '../photos.module';
import { ManagePhotoModalComponent } from './manage-photo-modal.component';

describe('ManagePhotoModalComponent', () => {
  let component: ManagePhotoModalComponent;
  let fixture: ComponentFixture<ManagePhotoModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        PhotosModule
      ],
      providers: [
        { provide: CoreApiService, useValue: CoreApiServiceMock },
        { provide: TextMsgItApiService, useValue: CoreApiServiceMock },
        { provide: 'environment', useValue: {} },
      ]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePhotoModalComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});