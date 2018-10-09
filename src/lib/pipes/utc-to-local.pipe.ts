
import {of as observableOf,  Observable } from 'rxjs';

import {map} from 'rxjs/operators';
import { ChangeDetectorRef, Pipe, PipeTransform } from '@angular/core';

import { MomentFormat } from '@rd/core/datetime';
import { CommunityGroupTimezoneService } from '@rd/core/datetime';

// declare var moment;
import * as moment from 'moment';

@Pipe({
  name: 'utcToLocal'
})
export class UtcToLocalPipe implements PipeTransform {

  constructor(private timezoneSvc: CommunityGroupTimezoneService){ }

  transform(utcISOString: string, communityGroupId: number, outputFormat: string = 'MM/DD/YYYY hh:mm a'): any {
    if(!utcISOString || !communityGroupId) {
      console.warn('bad request - UtcToLocalPipe [utcISOString, communityGroupId]', [utcISOString, communityGroupId]);
      return observableOf(null);
    }
    return this.timezoneSvc.getLocalOffset(communityGroupId, utcISOString).pipe(
      map(result => {
        return result || moment.utc(utcISOString);
      }))
      //.do(result => this.changeDetectorRef.detectChanges());
  }
}

