/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InfiniteScrollService } from './infinite-scroll.service';

describe('Service: InfiniteScroll', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InfiniteScrollService]
    });
  });

  it('should ...', inject([InfiniteScrollService], (service: InfiniteScrollService) => {
    expect(service).toBeTruthy();
  }));
});
