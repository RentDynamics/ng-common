import {switchMap} from 'rxjs/operators';

import { Component, ChangeDetectorRef, OnInit, Input } from '@angular/core';
import { Observable ,  Observer ,  Subject, Subscription } from 'rxjs';

import { CoreApiService, CoreApiSelector } from '@rd/core';
import { InfiniteScrollService } from '../../../infinite-scroll/infinite-scroll.service';

import { EMAIL_MESSAGE_STATUS_TYPE } from '../../email-message-status-type.enum';

@Component({
  selector: 'rd-recipient-status-list',
  templateUrl: './recipient-status-list.component.html',
  styleUrls: ['./recipient-status-list.component.less'],
  providers: [InfiniteScrollService]
})
export class RecipientStatusListComponent implements OnInit {
  @Input() bulkMessageId: number;
  @Input() status: string;

  recipients: any[] = [];
  recipientCount: number;
  recipientsToDisplay: number = 10;
  loading = false;

  constructor(private coreApiSvc: CoreApiService, public infiniteScroll: InfiniteScrollService, private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    if(this.bulkMessageId && this.status)
      this.get();
  }

  get() {
    this.loading = true;
    return this.infiniteScroll.currentPage$.pipe(switchMap(page => {
      return this.coreApiSvc.get(this.getSelector(page).stringify())
    })).subscribe((results) => {
        this.recipientCount = results.count;
        this.recipients = this.recipients.concat(results.data);
        this.loading = false;
        this.changeDetectorRef.detectChanges();
      }, (err) => {
         this.loading = false;
      });
  }

  getSelector(page?: number){
    let filters = {};
    let filterArr = this.status.split(',');

    filters['status'] = null;

    if(parseInt(filterArr[0]) != EMAIL_MESSAGE_STATUS_TYPE.SENT){
      filters['status'] = filterArr;
    }

    return new CoreApiSelector(
      {
        endpoint: `/bulkEmailMessages/${this.bulkMessageId}/personBulkEmailMessages`,
        page: page,
        pageSize: this.recipientsToDisplay,
        filters: filters,
        include: [
          'person',
          'person__email_address',
          'email_message'
        ],
      });
  }

  nextPage() {
    this.loading = true;
    this.infiniteScroll.nextPage();
  }

  refreshRecords($event){
    this.recipientsToDisplay = $event.target.value;
    this.reset();
  }

  reset(){
    this.loading = true;
    this.recipients = [];
    /* infiniteScroll.reset() triggers another local get() request
    via infinitieScroll.page$.next(null) and the listener above */
    this.infiniteScroll.reset();
  }
}
