
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

  pythonTest() {
    // email_body = "Hello %[Recipient-FirstName] %[Recipient-LastName], Nice to meet you. - %[Community-Name]"

    // body = {
    //   'body': email_body
    // }

    // url = '/parseRdaml?communityId={0}&residentId={1}&senderId={2}'.format(community.id, resident.id, agent.id)
    // headers = self.get_headers(url, body = body)

    // # act
    // result = self.api_client.post(url, body, format = 'json', **headers)
  }

}
