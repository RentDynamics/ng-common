import { Pipe, PipeTransform } from '@angular/core';
import { OrderByPipe } from '@rd/core';

@Pipe({
  name: 'headerChunk',
  pure: true
})
export class HeaderChunkPipe implements PipeTransform {

  /* STOLEN FROM http://pmosd.blogspot.com/2013/07/headers-in-angularjs-ng-repeats.html */
  transform(sourceAry: any[], isSameHeaderChunk: (a, b) => boolean, getHeaderId: (c) => string | number, orderByFields?: [string]): any {
    if (!(sourceAry instanceof Array)) return sourceAry;
    if (sourceAry.length == 0) return sourceAry;

    /* PLEASE NOTE: THE ORDER MATTERS!! */
    var orderedSourceAry = orderByFields ? new OrderByPipe().transform(sourceAry, orderByFields) : sourceAry;

    var result = [];

    var cur = [];

    var i = 0;
    for (i = 0; i < orderedSourceAry.length; i ++) {
      if (i == 0 || isSameHeaderChunk(orderedSourceAry[i], orderedSourceAry[i-1])) {
        cur.push(orderedSourceAry[i]);
      } else {
        result.push({
          id: getHeaderId(orderedSourceAry[i-1]),
          items: cur
        });

        cur = [orderedSourceAry[i]];
      }
    }

    result.push({
      id: getHeaderId(orderedSourceAry[orderedSourceAry.length - 1]),
      items: cur
    });

    for (i = 0; i < result.length; i ++) {
      result[i].$$hashKey = i;
    }

    return result;
  }

}
