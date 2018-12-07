
import {throwError as observableThrowError, Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {URLSearchParams} from '@angular/http';

import {CoreApiService} from '@rd/core';

import {RdamlQueryParams} from './rdaml-query-params';

@Injectable()
export class RdamlService {

  constructor(private coreApiSvc: CoreApiService) {
  }

  parse(queryParams: RdamlQueryParams, messageBody: string) {
    let queryString = [];

    if(!messageBody)
      return observableThrowError('messageBody must be defined');

    for (let prop in queryParams)
      if (queryParams[prop])
        queryString.push(`${prop}=${queryParams[prop]}`);

    let body = {
      body: messageBody
    };
    return this.coreApiSvc.post('/parseRdaml?' + queryString.join('&'), body);
    // .catch(() => Observable.of(null));
  }
}
