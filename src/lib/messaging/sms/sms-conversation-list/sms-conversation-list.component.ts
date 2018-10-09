import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {flatMap, map, toArray, switchMap, tap, catchError} from 'rxjs/operators';
// import {ConversationListComponent, ConversationListItemModel, InfiniteScrollService} from '@rd/common';
import { InfiniteScrollService } from '../../../infinite-scroll/infinite-scroll.service';
import { ConversationListComponent } from '../../../conversation/conversation-list/conversation-list.component';
import { ConversationListItemModel } from '../../../conversation/conversation-list/conversation-list-item/conversation-list-item.model';
import {CoreApiSelector, CoreApiService} from '@rd/core';

export interface Sms {
  unread: boolean; optedIn: boolean;
            phoneNumber: string; smsConversationStatusId: number;
            taskId: number; lastSmsId: number; optedOut: boolean; communityGroupId: number;
            id: number; leadId: number;
}

@Component({
  selector: 'rd-sms-conversation-list',
  templateUrl: './sms-conversation-list.component.html',
  styleUrls: ['./sms-conversation-list.component.scss'],
  providers: [InfiniteScrollService]
})
export class SmsConversationListComponent extends ConversationListComponent implements OnInit {
  @Input() activeConversation: ConversationListItemModel;
  @Input() conversations: ConversationListItemModel[] = [];
  @Input() communityId = 20;
  @Input() communityGroupId = 20;
  @Input() filter: { openOrClosedFc: boolean } = { openOrClosedFc: true };
  @Input() listName: string = 'Sms';

  constructor(protected coreApiSvc: CoreApiService, protected httpClient: HttpClient, protected infiniteScroll: InfiniteScrollService) {
    super(coreApiSvc, httpClient, infiniteScroll);
    this.infiniteScroll.pageSize = 100;
  }

  getSelector(page: number) {
    return new CoreApiSelector({
      endpoint: `/communityGroups/${this.communityGroupId}/smsConversations`,
      page: page,
      pageSize: this.infiniteScroll.pageSize,
      include: ['default_from_number', 'last_sms', 'lead__person'],
      filters: this.filter,
      orderBy: '-last_sms__sent_received_time'
    });
  }


  getConversations(openOrClosed): Observable<ConversationListItemModel[]> {
    return this.coreApiSvc.get(`/communityGroups/${this.communityGroupId}/smsConversations`).pipe(
      flatMap((results: Sms[]) => results),
      map((result: any) => {
        return result; // new ConversationListItemModel(result.id, result.person, result.lastConversation, result.community);
      }),
      toArray()
    );
  }

  // getConversations(openOrClosed): Observable<any[]> {
  //   // return this.httpClient.get(`/communities/${this.communityId}/conversations?filters=open=` + openOrClosed)
  //   return this.infiniteScroll.currentPage$.pipe(switchMap(page => {
  //     return this.coreApiSvc.get(`/communityGroups/${this.communityGroupId}/smsConversations`)
  //   }),
  //     // .pipe(
  //         flatMap((results: {unread: boolean, optedIn: boolean,
  //           phoneNumber: string, smsConversationStatusId: number,
  //           taskId: number, lastSmsId: number, optedOut: boolean, communityGroupId: number,
  //           id: number, leadId: number}[]) => results),
  //         map((result: any) => {
  //           return result; // new ConversationListItemModel(result.id, result.person, result.lastConversation, result.community);
  //         }),
  //         toArray(),
  //         // tap((results) => {
  //         //   this.conversations = results;
  //         // }),
  //         catchError((err => {
  //           console.warn(err);
  //           return of([]);
  //         }))
  //     );
  // }

  nextPage(){
    
  }

}
