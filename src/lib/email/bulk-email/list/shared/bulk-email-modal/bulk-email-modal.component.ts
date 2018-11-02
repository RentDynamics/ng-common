import { Component, EventEmitter, OnInit, Output, Input, Inject } from '@angular/core';

import { BulkEmailMessageModel } from '../../../../shared/bulk-email-message/bulk-email-message.model';
import { EMAIL_MESSAGE_STATUS_TYPE } from '../../../../shared/email-message-status-type/email-message-status-type.enum';

@Component({
  selector: 'rd-bulk-email-modal',
  templateUrl: './bulk-email-modal.component.html',
  styleUrls: ['./bulk-email-modal.component.less']
})
export class BulkEmailModalComponent implements OnInit {
  @Input() message: BulkEmailMessageModel = null;
  @Output() hidden = new EventEmitter();

  EMAIL_MESSAGE_STATUS_TYPE = EMAIL_MESSAGE_STATUS_TYPE;

  modalOptions: ModalOptions = {
    show: true
  };

  constructor() { }

  ngOnInit() {
  }

  onHidden($event){
    this.hidden.emit($event);
  }

}
