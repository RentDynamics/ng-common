/* tslint:disable:no-unused-variable */

import { async, inject } from '@angular/core/testing';
import { FilterPipe } from './filter.pipe';

describe('Pipe: Filter', () => {
  it('create an instance', () => {
    let pipe = new FilterPipe();
    expect(pipe).toBeTruthy();
  });

  it('filters array according to callback function', () => {
    let pipe = new FilterPipe();
    let result = pipe.transform([1, 2, 3], (item) => {
      return item && [1, 3].indexOf(item) > -1;
    });
    expect(result).toEqual([1, 3]);
  });
});
