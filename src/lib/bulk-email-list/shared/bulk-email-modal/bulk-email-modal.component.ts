import { Component, EventEmitter, OnInit, Output, Input, Inject } from '@angular/core';

import { EMAIL_MESSAGE_STATUS_TYPE } from '../../email-message-status-type.enum';
import { BulkEmailMessageModel } from '../../bulk-email-message.model';

@Component({
  selector: 'rd-bulk-email-modal',
  templateUrl: './bulk-email-modal.component.html',
  styleUrls: ['./bulk-email-modal.component.less']
})
export class BulkEmailModalComponent implements OnInit {
  @Input() message: BulkEmailMessageModel = null;
  @Input() recipientStatusEndpoint: string;
  @Output() hidden = new EventEmitter();

  EMAIL_MESSAGE_STATUS_TYPE = EMAIL_MESSAGE_STATUS_TYPE;

  modalOptions: any = {
    show: true
  };

  constructor() { }

  ngOnInit() {
  }

  onHidden($event){
    this.hidden.emit($event);
  }

}
