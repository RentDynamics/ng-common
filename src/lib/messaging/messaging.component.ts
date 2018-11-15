import { Component, OnInit } from '@angular/core';
import { CoreApiService, ApiOldApiService } from '@rd/core';
import { ConversationListItemModel } from '../conversation/conversation-list/conversation-list-item/conversation-list-item.model';

@Component({
  selector: 'rd-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.scss']
})
export class MessagingComponent implements OnInit {

  activeConversation: ConversationListItemModel;
  leadCard: any;

  constructor(private apiOldApiSvc: ApiOldApiService, private coreApiSvc: CoreApiService) { }

  ngOnInit() {
  }

  setActiveConversation(newVal: ConversationListItemModel){
    this.activeConversation = newVal;
  }

}
