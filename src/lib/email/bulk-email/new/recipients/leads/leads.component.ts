
import {of as observableOf,  Observable ,  Observer ,  Subject } from 'rxjs';

import {toArray, mergeMap, debounceTime, tap, switchMap, catchError, map} from 'rxjs/operators';
import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ChangeDetectorRef } from '@angular/core';
import * as moment from 'moment';

import { CoreApiService, CoreApiSelector } from '@rd/core';


import { InfiniteScrollService } from '../../../../../infinite-scroll/infinite-scroll.service';
import { WORKFLOW_ENUM } from '../../../../shared/workflow/workflow.enum';
import { Lead } from '../../../../shared/lead/lead';
import { BulkEmailBuilderService } from '../../shared/bulk-email-builder.service';
import { FilterGroupDirective } from '../../shared/recipient-filters/filter-group.directive';
import { RecipientModel } from '../shared/recipient.model';
import { Recipient, RecipientResult } from '../shared/recipient';

@Component({
  selector: 'rd-bulk-email-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.less'],
  providers: [InfiniteScrollService]
})
export class LeadsComponent implements OnInit {
  @Input() communityGroupId: number;
  @Input() filters: any = {};
  @Output() onFiltersChange = new EventEmitter();
  @Output() onRecipientsChange = new EventEmitter<RecipientResult>();
  @ViewChild(FilterGroupDirective) filterGroup: FilterGroupDirective;

  WORKFLOW_ENUM = WORKFLOW_ENUM;

  initialLoad: boolean = true;
  isLoading: boolean = true;
  recipientCount: number;
  recipients: Recipient[] = [];

  constructor(private changeDetectorRef: ChangeDetectorRef, public coreApiSvc: CoreApiService, public infiniteScroll: InfiniteScrollService) {
    this.infiniteScroll.pageSize = 20;
  }

  ngOnInit() {
    let self = this;

    // clear global recipients on load
    this.onRecipientsChange.emit({
      recipients: [],
      recipientCount: 0,
      communityPersons$: observableOf([])
    });

    if (!this.communityGroupId)
      return;

    /* todo: filter on residents with valid email addresses */
    this.get().subscribe((results) => {
      this.recipients = this.recipients.concat(results || []);
      let communityPersons$ = self.getCommunityPersons(self.filters) || observableOf([]);
      this.onRecipientsChange.emit({
        recipients: this.recipients,
        recipientCount: this.recipientCount,
        communityPersons$: communityPersons$
      });
      this.isLoading = false;
      this.changeDetectorRef.detectChanges();
    }, (err) => {
      this.isLoading = false;
      console.log(err);
    });
    /* invoke the observable sequence for the first time */
    if (Object.keys(this.filters).length === 0)
      this.filterGroup.update.emit(null);
  }

  getSelector(page?: number, communityId?: number, filters?: any) {
    return new CoreApiSelector({
      endpoint: `/leads`,
      filters: filters,
      page: page,
      pageSize: this.infiniteScroll.pageSize,
      include: [
        'community',
        'person__email_address'
      ],
      orderBy: 'person__last_name'
    });
  }

  reset() {
    this.recipients = [];
    this.infiniteScroll.reset();
  }

  nextPage() {
    this.infiniteScroll.nextPage();
  }

  get() {
    let debouncedFilterChange$ = this.filterGroup.update.pipe(debounceTime(2000),tap((newVal) => {
      if (this.initialLoad && Object.keys(this.filters).length === 0)
        this.filters = newVal;
      if (!this.initialLoad)
        this.filters = newVal;
      this.initialLoad = false;
      this.onFiltersChange.emit(this.filters);
      this.reset();
    }),);

    let loadMoreBtnPageChange$ = this.infiniteScroll.currentPage$.pipe(switchMap(page => {
      this.isLoading = true;
      return this.coreApiSvc.get(this.getSelector(page, this.communityGroupId, this.filters).stringify()).pipe(
        catchError((err: any, caught: Observable<any>) =>
          observableOf({ count: 0, data: [] })
        ))
    }));

    // merge streams and subscribe
    return debouncedFilterChange$.pipe(switchMap((value: string, index: number) =>
      loadMoreBtnPageChange$
    ),
      map((result: { count: number, data: any[] }) => {
        this.recipientCount = result.count;
        return result.data.map((lead: Lead) => {
          let model = new RecipientModel();
          model.personId = lead.personId;
          model.communityId = lead.communityId;
          model.communityName = lead.community.name;
          model.emailAddress = lead.person.emailAddress ? lead.person.emailAddress.address : null;
          model.firstName = lead.person.firstName;
          model.lastName = lead.person.lastName;
          return model;
        });
      }),);
  }

  getCommunityPersons(filters: any): Observable<string[]> {
    let selector = new CoreApiSelector({
      endpoint: `/leads`,
      filters: filters,
      fields: ['community_id', 'person_id']
    });

    return this.coreApiSvc.get(selector.stringify()).pipe(
      catchError((err) => {
        console.error(err);
        return observableOf([]);
      }),
      mergeMap((results) => results),
      map((result: { communityId: number, personId: number }) => `${result.communityId}:${result.personId}`),
      toArray(),);
  }

  trackByPersonId(index, item) {
    return item ? item.personId : undefined;
  }
}
