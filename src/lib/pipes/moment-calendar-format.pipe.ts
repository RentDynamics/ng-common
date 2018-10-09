import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'momentCalendarFormat'
})
export class MomentCalendarFormatPipe implements PipeTransform {

  /* https://momentjs.com/docs/#/displaying/calendar-time/ */
  transform(newLocalMoment: moment.Moment, formats?: any): string {
    if(!newLocalMoment)
      return '';
    return newLocalMoment.calendar(null, formats);

  }

}