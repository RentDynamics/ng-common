import { Component, EventEmitter, OnInit, Output, Input, Inject } from '@angular/core';

import { EMAIL_MESSAGE_STATUS_TYPE } from '../../email-message-status-type.enum';
import { BulkEmailMessageModel } from '../../bulk-email-message.model';

@Component({
  selector: 'rd-bulk-email-modal',
  templateUrl: './bulk-email-modal.component.html',
  styleUrls: ['./bulk-email-modal.component.less']
})
export class BulkEmailModalComponent implements OnInit {
  @Input() communityGroupId: number;
  @Input() message: BulkEmailMessageModel = null;
  @Output() hidden = new EventEmitter();
  tabCalculations: any;

  EMAIL_MESSAGE_STATUS_TYPE = EMAIL_MESSAGE_STATUS_TYPE;

  modalOptions: any = {
    show: true
  };

  constructor() { }

  ngOnInit() {
    this.setTabValues(this.message);
  }

  onHidden($event){
    this.hidden.emit($event);
  }

  setTabValues(message) {
    this.tabCalculations = {};
    this.tabCalculations['sent'] = message.sent;
    this.tabCalculations['opened'] = message.sent > 0 ? ((message.opened + message.clicked + message.unsubscribed) / message.sent) : 0;
    this.tabCalculations['clicked'] = message.sent > 0 ? (message.clicked / message.sent) : 0;
    this.tabCalculations['unsubscribed'] = message.unsubscribed;
    this.tabCalculations['failed'] = message.sent > 0 ? (message.failed / message.sent) : 0;
  }
}
