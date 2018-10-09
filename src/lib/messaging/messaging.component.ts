import { Component, OnInit } from '@angular/core';
import { CoreApiService, ApiOldApiService } from '@rd/core';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { ConversationListItemModel } from '../conversation/conversation-list/conversation-list-item/conversation-list-item.model';

@Component({
  selector: 'rd-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.scss']
})
export class MessagingComponent implements OnInit {

  activeConversation: ConversationListItemModel;
  leadCard: any;

  constructor(private apiOldApiSvc: ApiOldApiService, private coreApiSvc: CoreApiService,
              private localStorage: LocalStorage) { }

  ngOnInit() {
    this.localStorage.getItem('lead-card').subscribe((newVal) => {
      this.leadCard = newVal;
    });
  }

  onLeadCardChange(event) {
    this.localStorage.setItem('lead-card', event).subscribe(() => {
      this.leadCard = event;
    });
  }

  setActiveConversation(newVal: ConversationListItemModel){
    this.activeConversation = newVal;
  }

}
