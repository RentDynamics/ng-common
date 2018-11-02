
import {of as observableOf,  Observable } from 'rxjs';

import {catchError} from 'rxjs/operators';
import { Injectable } from '@angular/core';

import { CoreApiService } from '@rd/core';

import { StoredProcedure } from './stored-procedure';

@Injectable()
export class StoredProcedureService {

  constructor(private coreApiSvc: CoreApiService) { }

  post(body: StoredProcedure | any, catchResult: any = []) {
    return this.coreApiSvc.post('/storedProcedures', body).pipe(
      catchError((err: any, caught: Observable<any>) => {
        console.debug('*** error w/stored procedure ***', [body.spName, err]);
        return observableOf(catchResult);
      }));
  }

}
