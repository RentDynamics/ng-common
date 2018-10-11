import { Observable } from 'rxjs';

export interface PhotoSelect {
    get(): Observable<any[]>;
    open(): void;
    close(): void;
}
