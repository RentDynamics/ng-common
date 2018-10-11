import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import * as moment from 'moment';
import { ConversationListItemModel } from '../../conversation-list/conversation-list-item/conversation-list-item.model';
import { HttpClient } from '@angular/common/http';
import { CoreApiService } from '@rd/core';

@Component({
  selector: 'cc-conversation-composer-body',
  templateUrl: './conversation-composer-body.component.html',
  styleUrls: ['./conversation-composer-body.component.scss']
})
export class ConversationComposerBodyComponent implements OnInit, OnChanges {
  @Input() activeConversation: ConversationListItemModel;
  @Input() communityId = 20;

  messages: { id: number, type: 'incoming' | 'outgoing', msg: string, created: moment.Moment }[] = [];

  constructor(private coreApiSvc: CoreApiService, private httpClient: HttpClient) {
  }

  ngOnInit() {
    if (this.activeConversation && this.activeConversation.lastMessage) {
      this.getMessages();
    }
  }

  ngOnChanges(newVals: SimpleChanges) {
    const activeConversationChange: SimpleChange = newVals['activeConversation'];
    if (activeConversationChange && !activeConversationChange.isFirstChange() && activeConversationChange.currentValue) {
      this.getMessages();
    }
  }

  getMessages() {
    if (this.activeConversation && this.activeConversation.lastMessage) {
      this.httpClient.get(`/communities/${this.communityId}/conversations/${this.activeConversation.lastMessage.id}/messages`)
        .subscribe((results: any[]) => {
          console.log('fake chat results!!', results);
          /* todo: map to view model */
          this.messages = results;
        });
    }
  }

}
