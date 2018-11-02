import { BulkEmailMessage } from '../bulk-email-message/bulk-email-message';
import { Person } from '../person/person';
import { EMAIL_MESSAGE_STATUS_TYPE } from '../email-message-status-type/email-message-status-type.enum';
import { Community } from '../community/community';
import { EmailMessage } from '../email-message/email-message';

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