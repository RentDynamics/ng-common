import * as moment from 'moment';
import { Observable } from 'rxjs';
import { Person } from '../../../../shared/person/person';


export interface Recipient {
    personId: number;
    communityId: number;
    communityName: string;
    emailAddress?: string;
    name: string;
    unit?: string;
    lastContact?: moment.Moment;
    person?: Person;
}

export interface RecipientResult {
    communityPersons$?: Observable<string[]>;
    recipientCount: number;
    recipients: Recipient[];
}
