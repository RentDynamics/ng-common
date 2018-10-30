import { Input, Output, EventEmitter, Component, OnInit } from '@angular/core';

import { ImgixService } from '../../../../imgix/imgix.service';

@Component({
  selector: 'rd-email-attachment',
  templateUrl: './email-attachment.component.html',
  styleUrls: ['./email-attachment.component.less']
})
export class EmailAttachmentComponent implements OnInit {
  @Input() attachments: any[] = [];

  @Output() update: EventEmitter<any> = new EventEmitter<any>();

  openModal: boolean = false;

  constructor(public imgixSvc: ImgixService) { }

  ngOnInit() {
  }

  addAttachment(event){
    this.attachments.push(event[0]);
    this.update.emit(this.attachments);
  }

  removeAttachment(attachment){
    let index = this.attachments.indexOf(attachment);
    this.attachments.splice(index, 1);
    this.update.emit(this.attachments);
  }

}
