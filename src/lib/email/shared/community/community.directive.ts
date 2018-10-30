
import {of as observableOf,  Observable } from 'rxjs';

import {tap, catchError} from 'rxjs/operators';
import { Directive, Input, Output, EventEmitter, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

import { CoreApiService, CoreApiSelector, CoreApiSelectorFilter } from '@rd/core';

@Directive({
  selector: '[rdCommunity]',
  exportAs: 'rdCommunity'
})
export class CommunityDirective {
  @Input() clientId: number;

  constructor(private coreApiSvc: CoreApiService) { }

  query$: Observable<any[]> = observableOf([]);

  ngOnChanges(newVal: SimpleChanges) {
    let clientIdChange = newVal['clientId'];
    if (clientIdChange && clientIdChange.currentValue){
      console.log('clientIdChange.currentValue', clientIdChange.currentValue);
      this.query$ = this.coreApiSvc.get(`/clients/${clientIdChange.currentValue}/communities?orderBy=name`).pipe(catchError((err) => observableOf([]).pipe(tap(() => console.error(err)))));
    }
  }
}
