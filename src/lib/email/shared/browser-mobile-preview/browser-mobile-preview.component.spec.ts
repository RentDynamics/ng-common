/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { CoreApiService, TextMsgItApiService } from '@rd/core';
import { CoreApiServiceMock } from '@rd/core/testing';
import { DynamicTypeBuilder } from '@rd/compiler';

// import { BrowserMobilePreviewModule } from './browser-mobile-preview.module';
import { BrowserMobilePreviewComponent } from './browser-mobile-preview.component';
import { RdamlService } from '../../shared/rdaml';

describe('BrowserMobilePreviewComponent', () => {
  let component: BrowserMobilePreviewComponent;
  let fixture: ComponentFixture<BrowserMobilePreviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        BrowserMobilePreviewComponent
      ],
      providers: [
        { provide: DynamicTypeBuilder, useValue: {} },
        { provide: CoreApiService, useValue: CoreApiServiceMock },
        { provide: TextMsgItApiService, useValue: CoreApiServiceMock },
        { provide: RdamlService, useValue: {} }
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowserMobilePreviewComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
