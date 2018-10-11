import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import { ConversationListItemModel } from './conversation-list-item.model';

@Component({
  selector: 'cc-conversation-list-item',
  templateUrl: './conversation-list-item.component.html',
  styleUrls: ['./conversation-list-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ConversationListItemComponent implements OnInit {
  @Input() listItem: ConversationListItemModel;

  constructor() { }

  ngOnInit() {
  }

}
