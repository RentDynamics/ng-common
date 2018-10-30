import { BulkEmailMessage } from '../bulk-email-message';
import { Person } from '../person';
import { EMAIL_MESSAGE_STATUS_TYPE } from '../email-message-status-type';
import { Community } from '../community';
import { EmailMessage } from '../email-message';

export interface PersonBulkEmailMessage {
    id: number;
    bulkEmailMessage: BulkEmailMessage;
    personId: number;
    person: Person;
    status: EMAIL_MESSAGE_STATUS_TYPE;
    communityId: number;
    community?: Community;
    emailMessage?: EmailMessage;
    created: string;
}