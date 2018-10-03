import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ConversationListItemModel} from './conversation-list-item/conversation-list-item.model';
import * as moment from 'moment';
import {CoreApiService} from '@rd/core';
import {flatMap, map, toArray} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'cc-conversation-list',
  templateUrl: './conversation-list.component.html',
  styleUrls: ['./conversation-list.component.scss']
})
export class ConversationListComponent implements OnInit {
  @Input() activeConversation: ConversationListItemModel;
  @Input() conversations: ConversationListItemModel[] = [];
  @Input() communityId = 20;
  @Input() filter: { openOrClosedFc: boolean } = { openOrClosedFc: true };
  @Output() setActiveConversation = new EventEmitter<ConversationListItemModel>();

  constructor(private coreApiSvc: CoreApiService, private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.getConversations(this.filter.openOrClosedFc).subscribe((results) => {
      this.conversations = results;
    });
  }

  getConversations(openOrClosed): Observable<any> {
    return this.httpClient.get(`/communities/${this.communityId}/conversations?filters=open=` + openOrClosed).pipe(
      flatMap((results: any[]) => results),
      map((result: any) => {
        return new ConversationListItemModel(result.id, result.person, result.lastConversation, result.community);
      }),
      toArray()
    );
  }

  filterChange(newVal) {
    this.filter = newVal;
    this.getConversations(this.filter.openOrClosedFc).subscribe((results) => {
      this.conversations = results;
    });
  }

}
