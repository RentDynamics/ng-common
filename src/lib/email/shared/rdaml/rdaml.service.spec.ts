/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CoreApiService } from '@rd/core';
import { CoreApiServiceMock } from '@rd/core/testing';


import { RdamlService } from './rdaml.service';

describe('Service: Rdaml', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RdamlService,
        {
          provide: CoreApiService, useValue: CoreApiServiceMock
        }
      ]
    });
  });

  it('should ...', inject([RdamlService], (service: RdamlService) => {
    expect(service).toBeTruthy();
  }));
});
