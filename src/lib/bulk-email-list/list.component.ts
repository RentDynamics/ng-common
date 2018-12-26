
import {switchMap} from 'rxjs/operators';
import { Component, ChangeDetectorRef, OnInit, Inject, Input} from '@angular/core';
import { Observable ,  Observer ,  Subject, Subscription } from 'rxjs';

import { InfiniteScrollService } from '../infinite-scroll';

import { BulkEmailMessageModel } from './bulk-email-message.model';
import { BulkEmailDataService } from './bulk-email-data-service';


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

  constructor(
      private changeDetectorRef: ChangeDetectorRef,
      public infiniteScroll: InfiniteScrollService,
      public bulkEmailDataSvc: BulkEmailDataService) {
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
      return this.bulkEmailDataSvc.getCommunityBulkEmailMessages(this.communityGroupId, this.messagesToDisplay, page);
    })).subscribe((results) => {
        this.messageCount = results.count;
        this.bulkEmailMessages = this.bulkEmailMessages.concat(results.data.map(result => new BulkEmailMessageModel(result)));
        this.loading = false;
        this.changeDetectorRef.detectChanges();
      }, (err) => {
         this.loading = false;
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
