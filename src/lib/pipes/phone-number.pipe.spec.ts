import { TestBed, async } from '@angular/core/testing';
import { PhoneNumberPipe } from './phone-number.pipe';

let pipe;

describe('Pipe: MomentFromNowFormat', () => {

  beforeEach(() => {
    pipe = new PhoneNumberPipe();
  })

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return correct default mask', () => {
    // arrange
    const phone = '3035551555';

    // act
    const result = pipe.transform(phone);

    // assert
    const defaultMaskedPhone = '(303) 555-1555';
    expect(result).toEqual(defaultMaskedPhone);
  });

  it('should return correct default mask when provided a masked phone number', () => {
    // arrange
    const badPhone = '((303)- 555-1555)';

    // act
    const result = pipe.transform(badPhone);

    // assert
    const defaultMaskedPhone = '(303) 555-1555';
    expect(result).toEqual(defaultMaskedPhone);
  });

  it('should return original phone number mask when unable to match default mask', () => {
    // arrange
    const incompatiblePhone = '12345';

    // act
    const result = pipe.transform(incompatiblePhone);

    // assert
    expect(result).toEqual(incompatiblePhone);
  });

  it('should return provided mask when provided compatible phone number', () => {
    // arrange
    const phone = '3035551555';
    const providedMask = '###-###-####';

    // act
    const result = pipe.transform(phone, providedMask);

    // assert
    const maskedPhone = '303-555-1555'
    expect(result).toEqual(maskedPhone);
  });

  it('should return original phone number mask when unable to match provided mask', () => {
    // arrange
    const incompatiblePhone = '01234567890';
    const providedMask = '###-###-####';

    // act
    const result = pipe.transform(incompatiblePhone, providedMask);

    // assert
    expect(result).toEqual(incompatiblePhone);
  });
});
