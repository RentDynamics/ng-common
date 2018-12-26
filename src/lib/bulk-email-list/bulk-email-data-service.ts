import { Injectable } from '@angular/core';
import { Observable, of as observableOf} from 'rxjs';
import { BulkEmailMessage } from './bulk-email-message';

export interface BulkEmailMessageResponse {
    data: BulkEmailMessage[];
    count: number;
}

@Injectable()
export class BulkEmailDataService {

    getCommunityBulkEmailMessages(
        communityId: number,
        pageSize: number,
        page?: number
    ): Observable<BulkEmailMessageResponse> {
        return observableOf({data: [], count: null});
    }

    getPersonBulkEmailMessages(
        bulkMessageId: number,
        pageSize: number,
        page?: number,
        filters?: any,
        includes?: string[]
    ): Observable<BulkEmailMessageResponse> {
        return observableOf({data: [], count: null});
    }

}
