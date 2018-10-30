
import {of as observableOf,  Observable ,  Observer ,  Subject } from 'rxjs';
import { Component, OnInit, Input, Output, OnChanges, EventEmitter, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';
import * as moment from 'moment';

import { CoreApiService, CoreApiSelector } from '@rd/core';

import { RecipientModel } from '../shared/recipient.model';
import { RecipientResult } from '../shared/recipient';
import { SELECTION_TYPE } from '../shared/selection-type.enum';
import { Recipient } from '../shared/recipient';

@Component({
  selector: 'rd-bulk-email-residents',
  templateUrl: './residents.component.html',
  styleUrls: ['./residents.component.less']
})
export class ResidentsComponent implements OnInit, OnChanges {
  @Input() communityGroupId: number;
  @Input() filters: any;
  @Input() listRecipients: Recipient[] = [];
  @Input() selectedRecipients: Recipient[] = [];
  @Output() onListSelectionChange = new EventEmitter<Recipient[]>();
  @Output() onRecipientsChange = new EventEmitter<RecipientResult>();
  @Output() onFiltersChange = new EventEmitter();

  /* todo: add community select to this component or one of its children
  and remove hard-coded communityId value below */
  selectionType: SELECTION_TYPE = SELECTION_TYPE.LIST;
  SELECTION_TYPE = SELECTION_TYPE;

  constructor() {
  }

  ngOnInit() {

  }

  ngOnChanges(newVal: SimpleChanges) {
    let selectionTypeChange: SimpleChange = newVal['selectionType'];
    if (selectionTypeChange && selectionTypeChange.currentValue != selectionTypeChange.previousValue && selectionTypeChange.currentValue == SELECTION_TYPE.LIST){
      this.selectedRecipients = this.listRecipients;
      this.onRecipientsChange.emit({
        recipients: this.selectedRecipients,
        recipientCount: this.selectedRecipients.length,
        communityPersons$: observableOf(this.selectedRecipients.map((recipient: Recipient) => `${recipient.communityId}:${recipient.personId}`))
      });
    }
  }

}
