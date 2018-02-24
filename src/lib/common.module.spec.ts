/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';

import { RdAngularCommonModule } from './common.module';

describe('SmsModule', () => {
  let mod;

  beforeEach(() => {
    mod = new RdAngularCommonModule();
  });

  it('should create an instance', () => {
    expect(mod).toBeTruthy();
  })
});
