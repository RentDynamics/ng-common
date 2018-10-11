import * as moment from 'moment';

export class ConversationModel {
  id?: number;
  agentId?: number;
  personId: number;
  person?: { firstName: string, lastName: string, resident?: boolean, residentId?: number, lead?: boolean, leadId?: number };
  communityId?: number;
  community?: { id: number, name: string };
  lastMessageId?: number;
  lastMessage?: { id: number, conversationId?: number, created: moment.Moment, msg: string, read: boolean, open: boolean };
  lead?: any;
  leadId?: number;
  phoneNumber: string;
  communityGroupId: number;
  unread: boolean;
  optedOut: boolean;
  conversationStatusId: number;
  defaultFromNumber?: string;
  isTyping?: boolean;
  isTypingAgent?: string;
  taskId?: number;
  task?: any;

  constructor(protected domainModel) {
    for (const prop in domainModel) {
      if (prop) {
        this[prop] = domainModel[prop];
      }
    }
  }

  get personFullName() {
    return this.person.firstName + ' ' + this.person.lastName;
  }
}
