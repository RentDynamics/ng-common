/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ImgixService } from './imgix.service';

describe('Service: Imgix', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImgixService]
    });
  });

  it('should ...', inject([ImgixService], (service: ImgixService) => {
    expect(service).toBeTruthy();
  }));
});
