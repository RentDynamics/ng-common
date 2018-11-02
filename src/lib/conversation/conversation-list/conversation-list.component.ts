import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ConversationListItemModel} from './conversation-list-item/conversation-list-item.model';
import {CoreApiService} from '@rd/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {of as observableOf} from 'rxjs';
import { InfiniteScrollService } from '../../infinite-scroll/infinite-scroll.service';

@Component({
  selector: 'cc-conversation-list',
  templateUrl: './conversation-list.component.html',
  styleUrls: ['./conversation-list.component.scss'],
  providers: [InfiniteScrollService]
})
export class ConversationListComponent implements OnInit {
  @Input() activeConversation: ConversationListItemModel;
  @Input() conversations: ConversationListItemModel[] = [];
  @Input() communityId = 20;
  @Input() communityGroupId = 20;
  @Input() filter: { openOrClosedFc: boolean } = { openOrClosedFc: true };
  @Input() listName: string = 'Chat';
  @Output() setActiveConversation = new EventEmitter<ConversationListItemModel>();

  constructor(protected coreApiSvc: CoreApiService, protected httpClient: HttpClient,
              protected infiniteScroll: InfiniteScrollService) {
  }

  ngOnInit() {
    this.getConversations(this.filter.openOrClosedFc).subscribe((results) => {
      this.conversations = results;
    });
  }

  getConversations(openOrClosed): Observable<ConversationListItemModel[]> {
    return observableOf([]);
  }

  filterChange(newVal) {
    this.filter = newVal;
    this.getConversations(this.filter.openOrClosedFc).subscribe((results) => {
      this.conversations = results;
    });
  }

}
