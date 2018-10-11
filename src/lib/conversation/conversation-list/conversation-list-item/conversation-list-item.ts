import * as moment from 'moment';

export interface ConversationListItem {
  id: number;
  taskId?: number;
  person: { firstName: string, lastName: string, resident: boolean, lead: boolean };
  lastConversation: { created: moment.Moment, msg: string, read: boolean, open: boolean };
  community: { id: number, name: string };
}
