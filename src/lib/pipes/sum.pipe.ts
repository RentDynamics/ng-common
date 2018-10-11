import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sum',
  pure: true
})
export class SumPipe implements PipeTransform {

  transform(items: any[], fieldName: string): number {
    var result = 0;
    items.forEach(item => item[fieldName] ? result += item[fieldName] : null);
    return result;
  }

}
