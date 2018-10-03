import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ConversationListItemModel} from '../../conversation-list/conversation-list-item/conversation-list-item.model';

@Component({
  selector: 'cc-conversation-composer-header',
  templateUrl: './conversation-composer-header.component.html',
  styleUrls: ['./conversation-composer-header.component.scss']
})
export class ConversationComposerHeaderComponent implements OnInit {
  @Input() activeConversation: ConversationListItemModel;
  @Output() openConversation = new EventEmitter<boolean>();
  @Output() closeConversation = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

}
