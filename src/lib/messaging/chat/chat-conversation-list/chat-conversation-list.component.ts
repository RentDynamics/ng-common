import {Component, Input, OnInit} from '@angular/core';

import {CoreApiService} from '@rd/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { InfiniteScrollService } from '../../../infinite-scroll/infinite-scroll.service';
import { ConversationListComponent } from '../../../conversation/conversation-list/conversation-list.component';
import { ConversationListItemModel } from '../../../conversation/conversation-list/conversation-list-item/conversation-list-item.model';
import {flatMap, map, toArray} from 'rxjs/operators';


@Component({
  selector: 'rd-chat-conversation-list',
  templateUrl: './chat-conversation-list.component.html',
  styleUrls: ['./chat-conversation-list.component.scss'],
  providers: [InfiniteScrollService]
})
export class ChatConversationListComponent extends ConversationListComponent implements OnInit {
  @Input() activeConversation: ConversationListItemModel;
  @Input() conversations: ConversationListItemModel[] = [];
  @Input() communityId = 20;
  @Input() communityGroupId = 20;
  @Input() filter: { openOrClosedFc: boolean } = { openOrClosedFc: true };
  @Input() listName: string = 'Chat';

  constructor(protected coreApiSvc: CoreApiService, protected httpClient: HttpClient, protected infiniteScroll: InfiniteScrollService) {
    super(coreApiSvc, httpClient, infiniteScroll);
  }

  getConversations(openOrClosed): Observable<ConversationListItemModel[]> {
    return this.httpClient.get(`/communities/${this.communityId}/conversations?filters=open=` + openOrClosed).pipe(
      flatMap((results: any[]) => results),
      map((result: any) => {
        return new ConversationListItemModel(result.id, result.person, result.lastConversation, result.community);
      }),
      toArray()
    );
  }

}
