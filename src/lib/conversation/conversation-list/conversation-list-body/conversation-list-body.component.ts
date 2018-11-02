import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ConversationListItemModel} from '../conversation-list-item/conversation-list-item.model';

@Component({
  selector: 'cc-conversation-list-body',
  templateUrl: './conversation-list-body.component.html',
  styleUrls: ['./conversation-list-body.component.scss']
})
export class ConversationListBodyComponent implements OnInit {
  @Input() activeConversation: ConversationListItemModel;
  @Input() conversations: ConversationListItemModel[] = [];
  @Output() setActiveConversation = new EventEmitter<ConversationListItemModel>();

  constructor() { }

  ngOnInit() {
  }

}
