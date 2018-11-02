
import {of as observableOf,  Observable ,  Observer ,  Subject } from 'rxjs';

import {toArray, mergeMap, debounceTime, tap, switchMap, catchError, map} from 'rxjs/operators';
import {
  ChangeDetectorRef, Component, OnInit, Input, Output, EventEmitter,
  NgZone, ViewChild
} from '@angular/core';

import { CoreApiService, CoreApiSelector } from '@rd/core';

import { InfiniteScrollService } from '../../../../../../infinite-scroll/infinite-scroll.service';
import { FilterGroupDirective } from '../../../shared/recipient-filters/filter-group.directive';
import { RecipientModel } from '../../shared/recipient.model';
import { Recipient, RecipientResult } from '../../shared/recipient';

@Component({
  selector: 'rd-bulk-email-residents-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.less'],
  providers: [InfiniteScrollService]
})
export class FilterComponent implements OnInit {
  @Input() communityGroupId: number;
  @Input() filters: any = {};
  @Output() onFiltersChange = new EventEmitter();
  @Output() onRecipientsChange = new EventEmitter<RecipientResult>();
  @ViewChild(FilterGroupDirective) filterGroup: FilterGroupDirective;

  initialLoad: boolean = true;
  isLoading: boolean = true;
  recipientCount: number;
  recipients: Recipient[] = [];

  constructor(private changeDetectorRef: ChangeDetectorRef,
    public coreApiSvc: CoreApiService, public infiniteScroll: InfiniteScrollService,
    public ngZone: NgZone) {
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
      self.ngZone.run(() => {
        this.recipients = this.recipients.concat(results || []);
        let communityPersons$ = self.getCommunityPersons(self.filters) || observableOf([]);
        this.onRecipientsChange.emit({
          recipients: this.recipients,
          recipientCount: this.recipientCount,
          communityPersons$: communityPersons$
        });
        this.isLoading = false;

        console.log('change detecting..');
        //self.changeDetectorRef.detectChanges();
      });
      // this.changeDetectorRef.detectChanges();
    }, (err) => {
      this.isLoading = false;
      console.log(err);
    });
    /* invoke the observable sequence for the first time */
    if (Object.keys(this.filters).length === 0)
      this.filterGroup.update.emit(null);
  }

  getSelector(page?: number, filters?: any) {
    return new CoreApiSelector({
      endpoint: `/residents`,
      filters: filters,
      page: page,
      pageSize: this.infiniteScroll.pageSize,
      include: [
        'community',
        'person__email_address',
        'unit'
      ],
      orderBy: 'person__last_name',
      distinct: true
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
      return this.coreApiSvc.get(this.getSelector(page, this.filters).stringify()).pipe(
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
        return result.data.map((resident: any) => {
          let model = new RecipientModel();
          model.personId = resident.personId;
          model.communityId = resident.communityId;
          model.communityName = resident.community ? resident.community.name : null;
          model.emailAddress = resident.person && resident.person.emailAddress ? resident.person.emailAddress.address : null;
          model.firstName = resident.person ? resident.person.firstName : null;
          model.lastName = resident.person ? resident.person.lastName : null;
          model.unitNumber = resident.unit ? resident.unit.unitNumber : null;
          return model;
        });
      }),);
  }

  getCommunityPersons(filters: any): Observable<string[]> {
    let selector = new CoreApiSelector({
      endpoint: `/residents`,
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
