import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'momentFromNowFormat'
})
export class MomentFromNowFormatPipe implements PipeTransform {

  transform(newLocalMoment: moment.Moment, formats?: any): string {
    if(!newLocalMoment)
      return '';
    return newLocalMoment.fromNow();
  }

}
