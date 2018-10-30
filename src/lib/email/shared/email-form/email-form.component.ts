import { Component, Inject, Input, OnInit, Output, EventEmitter, SimpleChange, SimpleChanges } from '@angular/core';

import { CoreApiService } from '@rd/core';
import { EmailVM } from '../../shared/email-vm.model';

@Component({
  selector: 'rd-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.less']
})
export class EmailFormComponent implements OnInit {
  @Input() communityId: number;
  @Input() subject: string;
  @Input() body: string;
  @Input() recipients: string;
  @Input() templateId: number;
  @Input() leadId: number;
  @Input() residentId: number;
  @Input() emailMessageDataId: number;
  @Input() contactAppointmentId: number;

  attachments: any[] = [];
  html: string;

  email: EmailVM;
  @Output()
  updateEmail: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private coreApiSvc: CoreApiService,
    @Inject('SessionService') public sessionSvc: any,
    @Inject('EmailTemplateService') public emailTemplateSvc: any
  ) {}

  ngOnInit() {
    this.fetchTemplateData(this.templateId);
  }

  ngOnChanges(newVal: SimpleChanges) {
    let subjectChange: SimpleChange = newVal['subject'];
    let bodyChange: SimpleChange = newVal['body'];
    let recipientChange: SimpleChange = newVal['recipients'];
    let communityChange: SimpleChange = newVal['communityId'];
    let templateIdChange: SimpleChange = newVal['templateId'];

    if (
      (subjectChange &&
        subjectChange.currentValue != subjectChange.previousValue) ||
      (bodyChange && bodyChange.currentValue != bodyChange.previousValue) ||
      (recipientChange &&
        recipientChange.currentValue != recipientChange.previousValue)
    ) {
      this.formChanged();
    }
  }

  formChanged() {
    if (this.templateId) {
      this.emailTemplateSvc
        .renderEmailTemplateToString(this.templateId, this.body)
        .then(r => {
          this.html = r;
          this.sendUpdate();
        });
    } else {
      this.html = this.body;
      this.sendUpdate();
    }
  }

  sendUpdate() {
    this.email = new EmailVM();
    this.email.subject = this.subject;
    this.email.recipients =
      this.recipients && this.recipients.length
        ? this.recipients.split(',')
        : [];
    this.email.awsAttachmentIDs = this.attachments;
    this.email.html = this.html;
    this.email.isHTML = true;

    this.updateEmail.emit(this.email);
  }

  updateBody(event) {
    this.body = event;
    this.formChanged();
  }

  updateAttachments(event) {
    this.attachments = event.map(e => e.emailAttachmentId);
    this.formChanged();
  }

  fetchTemplateData(templateId) {
    this.templateId = templateId;
    if (this.templateId) {
      let params = this.getRdmlParserParams();
      let url: string = `/communityEmailTemplates/${this.templateId}${params}`;
      this.coreApiSvc.get(url).subscribe(result => {
        this.subject = result.subject;
        this.body = result.body;
        this.formChanged();
      });
    } else {
      this.subject = '';
      this.body = '';
      this.formChanged();
    }
  }

  getRdmlParserParams() {
    let currentAgent = this.sessionSvc.getAgent();
    let parserParams: string[] = [];
    if (currentAgent) parserParams.push(`senderId=${currentAgent.id}`);
    if (this.leadId) parserParams.push(`leadId=${this.leadId}`);
    if (this.residentId) parserParams.push(`residentId=${this.residentId}`);
    if (this.communityId) parserParams.push(`communityId=${this.communityId}`);
    if (this.emailMessageDataId)
      parserParams.push(`emailMessageDataId=${this.emailMessageDataId}`);
    if (this.contactAppointmentId)
      parserParams.push(`contactAppointmentId=${this.contactAppointmentId}`);

    if (parserParams.length > 0) {
      parserParams[0] = `?${parserParams[0]}`;
      return parserParams.join('&');
    }
  }
}
