
import {switchMap} from 'rxjs/operators';
import { Component, ChangeDetectorRef, OnInit, Inject, Input} from '@angular/core';
import { Observable ,  Observer ,  Subject, Subscription } from 'rxjs';

import { CoreApiService, CoreApiSelector } from '@rd/core';
import { InfiniteScrollService } from '../infinite-scroll';

import { BulkEmailMessageModel } from './bulk-email-message.model';

@Component({
  selector: 'rd-bulk-email-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less'],
  providers: [InfiniteScrollService]
})
export class ListComponent implements OnInit {
  @Input() communityGroupId: number;

  bulkEmailMessages: BulkEmailMessageModel[] = [];
  messageCount: number;
  messagesToDisplay = 10;
  messageModalActive = false;

  activeMessage: any;
  loading = true;

  constructor(private coreApiSvc: CoreApiService,
    private changeDetectorRef: ChangeDetectorRef,
    public infiniteScroll: InfiniteScrollService
  ) {
      this.infiniteScroll.pageSize = 4;
  }

  ngOnInit() {
    this.getBulkMessages();
  }

  refreshRecords(newVal) {
    this.messagesToDisplay = newVal.target.value;
    this.reset();
  }

  getBulkMessages() {
    this.loading = true;
    return this.infiniteScroll.currentPage$.pipe(switchMap(page => {
      return this.coreApiSvc.get(this.getSelector(page).stringify());
    })).subscribe((results) => {
        this.messageCount = results.count;
        this.bulkEmailMessages = this.bulkEmailMessages.concat(results.data.map(result => new BulkEmailMessageModel(result)));
        this.loading = false;
        this.changeDetectorRef.detectChanges();
      }, (err) => {
         this.loading = false;
      });
  }

  getSelector(page?: number) {
    return new CoreApiSelector({
      endpoint: `/communityGroups/${this.communityGroupId}/bulkEmailMessages`,
      page: page,
      pageSize: this.messagesToDisplay,
      orderBy: '-created',
      include: [
        'sent',
        'opened',
        'clicked',
        'pending',
        'failed',
        'unsubscribed'
      ]
    });
  }

  nextPage() {
    this.loading = true;
    this.infiniteScroll.nextPage();
  }

  reset() {
    this.loading = true;
    this.bulkEmailMessages = [];
    /* infiniteScroll.reset() triggers another local get() request
    via infinitieScroll.page$.next(null) and the listener above */
    this.infiniteScroll.reset();
  }

  openMessageModal(message: any) {
    this.messageModalActive = true;
    this.activeMessage = message;
  }
}
