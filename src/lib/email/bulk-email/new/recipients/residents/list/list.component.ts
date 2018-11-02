
import {of as observableOf,  Observable, Subscription } from 'rxjs';
import {map} from 'rxjs/operators';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit, Input, Inject, NgZone, Output, EventEmitter, ViewChild } from '@angular/core';

import {GetResidentsBulkEmail} from '../../../../../shared/stored-procedure/get-residents-bulk-email';
import { FilterDirective } from '../../../shared/recipient-filters/shared/filter.directive';
import { Recipient, RecipientResult } from '../../shared/recipient';
import { RecipientModel } from '../../shared/recipient.model';


@Component({
  selector: 'rd-bulk-email-residents-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {
  @Input() communityGroupId: number;
  @Input() selectedRecipients: Recipient[] = [];
  @Output() onListSelectionChange = new EventEmitter<Recipient[]>();
  @Output() onRecipientsChange = new EventEmitter<RecipientResult>();
  @ViewChild(FilterDirective) communitySelector: FilterDirective;

  isLoading: boolean = true;
  recipients: Recipient[] = [];
  selectedCommunityIds: number[];

  constructor(private changeDetectorRef: ChangeDetectorRef, private ngZone: NgZone, @Inject('SessionService') private sessionSvc: any,
    private storedProcedureSvc: any) { }

  ngOnInit() {
    if (!this.communityGroupId) {
      return;
    }

    this.selectedCommunityIds = this.sessionSvc.getSessionCommunitiesAsQueryable({
      communityGroupID: this.communityGroupId
    }).select((community) => community.id)
      .toArray();

    this.getRecipients();
  }

  ngDoCheck() {
    // console.log('do check: bulk-email list')
  }

  get(orderBy: string) {
    return this.storedProcedureSvc
      .post({
        spName: 'GetResidentsBulkEmail',
        communityIds: this.selectedCommunityIds.join(','),
        orderBy: orderBy
      })
      .pipe(map((results: GetResidentsBulkEmail[]) => {
          return results.map((resident: GetResidentsBulkEmail) => {
            let model = new RecipientModel();
            model.personId = resident.personId;
            model.communityId = resident.communityId;
            model.communityName = resident.communityName;
            model.emailAddress = resident.emailAddress;
            model.firstName = resident.firstName;
            model.lastName = resident.lastName;
            model.unitNumber = resident.unitNumber;
            return model;
          });
        }));
  }

  getRecipients(orderBy: string = 'unitNumber') {
    this.get(orderBy).subscribe((results) => {
      this.ngZone.run(() => {
        this.recipients = results;
        this.isLoading = false;
      });
    }, (err) => {
      this.isLoading = false;
    });
  }

  onSelectedRecipientsChange(newVal: Recipient[]) {
    this.onListSelectionChange.emit(newVal);

    this.onRecipientsChange.emit({
      recipients: newVal,
      recipientCount: newVal.length,
      communityPersons$: observableOf(newVal.map((recipient: Recipient) => `${recipient.communityId}:${recipient.personId}`))
    });
  }
}
