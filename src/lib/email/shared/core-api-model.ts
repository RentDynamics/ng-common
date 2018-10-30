import { Observable } from 'rxjs';

import { CoreApiSelector } from '@rd/core';

export interface CoreApiModel {
    endpoint: string;
    getSelector?();
    get(selector: CoreApiSelector): Observable<any>;
}