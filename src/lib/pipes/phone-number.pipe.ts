import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumber'
})
export class PhoneNumberPipe implements PipeTransform {

  badCharacters: RegExp = /[()-\s]/g;

  transform(phoneNumber: string, outputFormat: string = '(###) ###-####'): string {
    if ( !phoneNumber || !outputFormat ) return phoneNumber;

    const rawPhone = phoneNumber.replace(this.badCharacters, '');

    const maskDigitCount = outputFormat.match(/#/g).length;
    if (rawPhone.length !== maskDigitCount) return phoneNumber;

    let output = outputFormat;
    rawPhone.match(/[0-9]/g).forEach((digit) => output = output.replace(/#/, digit));

    return output;
  }

}
