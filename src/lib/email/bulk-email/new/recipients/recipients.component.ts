import { Component, OnInit, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

import { RECIPIENT_TYPE } from './shared/recipient-type.enum';
import { RecipientResult, Recipient } from './shared/recipient';

@Component({
  selector: 'rd-bulk-email-recipients',
  templateUrl: './recipients.component.html',
  styleUrls: ['./recipients.component.less']
})
export class RecipientsComponent implements OnInit {
  @Input() communityGroupId: number;
  @Input() recipientType: RECIPIENT_TYPE = RECIPIENT_TYPE.RESIDENTS;
  @Input() filters: any;
  @Input() recipients: Recipient[];
  @Input() listRecipients: Recipient[];
  @Output() onListSelectionChange = new EventEmitter<Recipient[]>();
  @Output() onRecipientsChange = new EventEmitter<RecipientResult>();
  @Output() onRecipientTypeChange = new EventEmitter();
  @Output() onFiltersChange = new EventEmitter();

  RECIPIENT_TYPE = RECIPIENT_TYPE;

  constructor() { }

  ngOnInit() {

  }

  updateRecipientType($event){
    this.onRecipientTypeChange.emit($event);
  }
}
