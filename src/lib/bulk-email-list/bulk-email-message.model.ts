import { BulkEmailMessage } from './bulk-email-message';

export class BulkEmailMessageModel implements BulkEmailMessage {

  body: string;
  clicked: number;
  communityGroupId: number;
  communityPersons: string;
  created: string;
  createdById: number;
  failed: number;
  id: number;
  opened: number;
  pending: number;
  sent: number;
  subject: string;
  unsubscribed: number;

  get persons() {
    return this.communityPersons.split(/\,/)
      .map((communityPerson: string) => {
        const communityPersonAry: string[] = communityPerson.split(':');
        return {
          id: +communityPersonAry[1],
          communityId: +communityPersonAry[0]
        };
      });
  }

  constructor(args: any) {
    for (const prop in args) {
      this[prop] = args[prop];
    }
  }
}