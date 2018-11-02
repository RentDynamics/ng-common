/* tslint:disable:no-unused-variable */

import { SubstringPipe } from './substring.pipe';

describe('Pipe: Substring', () => {
  it('create an instance', () => {
    let pipe = new SubstringPipe();
    expect(pipe).toBeTruthy();
  });

  it('filters substring properly', () => {
    let pipe = new SubstringPipe();
    let result = pipe.transform('testString', 0, 1);
    expect(result).toEqual('t');
  });
});
