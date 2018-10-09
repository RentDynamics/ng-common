import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'textingFormat'
})
export class TextingFormatPipe implements PipeTransform {

  transform(valueMoment: moment.Moment): any {
    if (!valueMoment) return;
    return valueMoment.clone().isSame(new Date(), "day") ?
      valueMoment.format('h:mm a') : 
      valueMoment.format('M/D/YY');
  }

}
