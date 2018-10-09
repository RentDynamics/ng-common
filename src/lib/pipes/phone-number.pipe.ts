import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumber'
})
export class PhoneNumberPipe implements PipeTransform {

  constructor() { }

  transform(phoneNumber: string, outputFormat: string = '(###) ###-####'): any {
    if (!phoneNumber) return phoneNumber;
    let charCount: number = 0;
    let output: string = '';
    let currentIndex: number = 0;
    let phoneLength: number = 0;
    phoneLength = phoneNumber.length;
    if (outputFormat && outputFormat.indexOf('#') !== -1) {
      for (let c of outputFormat) {
        if (c === '#') {
          if (currentIndex < phoneLength) {
            output += phoneNumber[currentIndex];
            currentIndex++;
          }
          
        }
        else {
          output += c;
        }
      }
    }
    else {
      output = phoneNumber;
    }
    return output;
  }
}