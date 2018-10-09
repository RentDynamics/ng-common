import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'momentHumanizeDurationFormat'
})
export class MomentHumanizeDurationFormatPipe implements PipeTransform {

  transform(durationCount: moment.DurationInputArg1, durationType: moment.DurationInputArg2 = 'seconds') {
    if (!durationCount)
      return null;

    let duration = moment.duration(durationCount, durationType);
    let minute: number = duration.get('minutes');
    let second: number = duration.get('seconds');
    return minute && second ? `${minute}m ${second}s` :
      minute ? `${minute}m` :
      second ? `${second}s` : null;
  }

}
