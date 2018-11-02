/* tslint:disable:no-unused-variable */
import { ElementRef, Inject, ChangeDetectorRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { DomSanitizer } from '@angular/platform-browser';

import {
  async, inject
} from '@angular/core/testing';

import { CoreApiService } from '@rd/core';
import { CoreApiServiceMock } from '@rd/core/testing';

import { IFrameModule } from './iframe.module';
import { IframeHtmlDirective } from './iframe-html.directive';

describe('Directive: IframeHtml', () => {
  // simple style
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IFrameModule],
      // Provide a test-double instead
      providers: [
        { provide: CoreApiService, useValue: CoreApiServiceMock },
        { provide: DomSanitizer, useValue: {} },
        { provide: ElementRef, useValue: {} }
      ]
    });
  });

  it('should create an instance', inject([DomSanitizer, ElementRef], (domSanitizer, elementRef) => {
    let directive = new IframeHtmlDirective(domSanitizer, elementRef);
    expect(directive).toBeTruthy();
  }));
});
