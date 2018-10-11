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

export interface Message {
  id: number;
  leadId?: number;
  residentId?: number;
  conversationStatusId: number;
  taskId: number;
  optedOut?: boolean;
  communityGroupId: number;
  unread: boolean;
  optedIn?: boolean;
  lastMessageId?: number;
  lastMessage: Sms;
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

  constructor(protected coreApiSvc: CoreApiService, protected httpClient: HttpClient, public infiniteScroll: InfiniteScrollService) {
    super(coreApiSvc, httpClient, infiniteScroll);
    this.infiniteScroll.pageSize = 25;
  }

  getSelector(page: number, filters?: any) {
    return new CoreApiSelector({
      endpoint: `/communityGroups/${this.communityGroupId}/smsConversations`,
      page: page,
      pageSize: 25,
      include: ['default_from_number', 'last_sms', 'lead__person'],
      filters: filters || {},
      orderBy: '-last_sms__sent_received_time'
    });
  }

  // "{"defaultFromNumber":"9162627149","lead":null,"id":92,"optedIn":false,"lastSms":null,"optedOut":false,"taskId":null,"leadId":null,"phoneNumber":"9162627149","communityGroupId":20,"smsConversationStatusId":1,"lastSmsId":null,"unread":true}"
  // "{"defaultFromNumber":"9162627149","lead":{"modified":null,"created":"2017-02-23T21:31:25.907Z","id":919083,"unqualifiedReasonTypeId":null,"person":{"middleName":null,"id":1301618,"maidenName":null,"created":"2017-02-23T21:34:46.237Z","firstName":"Sainth","lastName":"Largo"},"communityId":20,"phaseGroupId":20,"noAppointmentReasonTypeId":null,"createdById":3190,"personId":1301618,"modifiedById":null},"id":698,"optedIn":false,"lastSms":null,"optedOut":false,"taskId":null,"leadId":919083,"phoneNumber":"9168072572","communityGroupId":20,"smsConversationStatusId":1,"lastSmsId":null,"unread":true}"

  getConversations(openOrClosed): Observable<ConversationListItemModel[]> {
    return this.coreApiSvc.get(
      `/communityGroups/${this.communityGroupId}/smsConversations?include=lead__person, last_sms, default_from_number, community_group`
      ).pipe(
      flatMap((results: Sms[]) => results),
      map((result: any) => {
        console.log('result', result);
        return new ConversationListItemModel({ id: result.id, person: result.lead ? result.lead.person : null,
          lastMessage: result.lastSms, communityGroup: { id: result.communityGroupId, name: 'Aztec Springs'},
          conversationStatusId: result.smsConversationStatusId });
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
