/* tslint:disable:no-unused-variable */
import { async, inject, TestBed } from '@angular/core/testing';

import { Toast } from './toast';

describe('Service: Toastr', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        Toast,
      ]
    });
  });

  it('should be defined',
    inject([Toast],
      (service: Toast) => {
        expect(service).toBeTruthy();
      }));

  it('should have "success()" method',
    inject([Toast],
      (service: Toast) => {
        expect(service.success).toBeTruthy();
      }));

  
  it('should have "error()" method',
    inject([Toast],
      (service: Toast) => {
        expect(service.error).toBeTruthy();
      }));

  it('should have "warn()" method',
    inject([Toast],
      (service: Toast) => {
        expect(service.warn).toBeTruthy();
      }));
});
