import { Recipient } from './recipient';
import * as moment from 'moment';

export class RecipientModel implements Recipient {
    personId: number;
    communityId: number;
    communityName: string;
    emailAddress?: string;
    firstName?: string;
    lastName?: string;
    unitNumber?: string;
    lastContact?: moment.Moment;

    get name(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}
