/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StoredProcedureService } from './stored-procedure.service';

import { CoreApiService } from '@rd/core';
import { CoreApiServiceMock } from '@rd/core/testing';

describe('Service: StoredProcedure', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        StoredProcedureService,
        {
          provide: CoreApiService, useValue: CoreApiServiceMock
        }
      ]
    });
  });

  it('should ...', inject([StoredProcedureService], (service: StoredProcedureService) => {
    expect(service).toBeTruthy();
  }));
});
