import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'momentFormat'
})
export class MomentFormatPipe implements PipeTransform {

  transform(newLocalMoment: moment.Moment, format: string = 'MM/DD/YYYY hh:mm a'): string {
    if(!newLocalMoment)
      return '';
    return newLocalMoment.format(format);
  }

}
