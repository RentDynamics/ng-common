import * as moment from 'moment';

import {ConversationListItem} from './conversation-list-item';

export class ConversationListItemModel implements ConversationListItem {

  taskId?: number;

  constructor(public id: number, public person: { firstName: string, lastName: string, resident: boolean, lead: boolean },
              public lastConversation: { id: number, conversationId?: number, created: moment.Moment, msg: string, read: boolean, open: boolean },
              public community: { id: number, name: string }) {

  }

  get personFullName() {
    return this.person.firstName + ' ' + this.person.lastName;
  }

  // id?: number;
  // lastSms?: Sms;
  // lead?: any;
  // leadId: number;
  // phoneNumber: string;
  // communityGroupId: number;
  // unread: boolean;
  // optedOut: boolean;
  // smsConversationStatusId: number;
  // defaultFromNumber?: string;
  //
  // isTyping?: boolean;
  // isTypingAgent?: string;
  // person?: PersonModel;
  // taskId?: number;
  // task?: Task;

}
