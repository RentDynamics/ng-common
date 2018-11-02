/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';

import { CoreApiService, TextMsgItApiService } from '@rd/core';
import { CoreApiServiceMock } from '@rd/core/testing';

import { CommunityGroupTimezoneService } from '@rd/core/datetime';
import { UtcToLocalPipe } from './utc-to-local.pipe';

describe('Pipe: UtcToLocal', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CommunityGroupTimezoneService,
        { provide: CoreApiService, useValue: CoreApiServiceMock },
        { provide: TextMsgItApiService, useValue: CoreApiServiceMock },
      ]
    })
  });

  it('create an instance', inject([CommunityGroupTimezoneService], (timezoneSvc) => {
    let pipe = new UtcToLocalPipe(timezoneSvc);
    expect(pipe).toBeTruthy();
  }));
});
