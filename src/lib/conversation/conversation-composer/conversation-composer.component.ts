import {Component, Input, OnInit} from '@angular/core';
import {ConversationListItemModel} from '../conversation-list/conversation-list-item/conversation-list-item.model';

@Component({
  selector: 'cc-conversation-composer',
  templateUrl: './conversation-composer.component.html',
  styleUrls: ['./conversation-composer.component.scss']
})
export class ConversationComposerComponent implements OnInit {
  @Input() activeConversation: ConversationListItemModel;

  constructor() { }

  ngOnInit() {
  }

}
