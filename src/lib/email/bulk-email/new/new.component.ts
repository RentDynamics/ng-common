
import {timer as observableTimer,  Observable } from 'rxjs';
import { Component, Inject, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';

import { CoreApiService } from '@rd/core';

import { RECIPIENT_TYPE } from './recipients/shared/recipient-type.enum';
import { WizardDirective } from '../../../wizard/wizard.directive';
import { Recipient, RecipientResult } from './recipients/shared/recipient';
import { Message } from './message/shared/message';
import { MessageModel } from './message/shared/message.model';

@Component({
  selector: 'rd-bulk-email-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.less']
})
export class NewComponent implements OnInit {
  @ViewChild(WizardDirective) wizard: WizardDirective;

  communityGroup: any;
  leadFilters: any = {};
  residentFilters: any = {};
  filters: any = {};
  recipients: Recipient[] = [];
  listRecipients: Recipient[] = [];
  message: Message = new MessageModel();
  recipientCount: number;
  recipientPaneValid: boolean = false;
  messagePaneValid: boolean = false;
  communityPersons: string[] = [];
  emailHtml: string;
  recipientType: number = RECIPIENT_TYPE.RESIDENTS;
  isReviewPaneReady: boolean = false;
  isSending: boolean = false;

  constructor(private coreApiSvc: CoreApiService, @Inject('SessionService') public sessionSvc: any,
    @Inject('$state') public $state: any,
    @Inject('$stateParams') public $stateParams: any) { }

  ngOnInit() {
    this.communityGroup = this.sessionSvc.getSessionCommunityGroupsAsQueryable({ id: +this.$stateParams['communityGroupId'] }).toArray()[0];
  }

  isReviewBtnDisabled() {
    return this.isSending || !this.isReviewPaneReady;
  }

  onCompileEmail(newVal) {
    this.emailHtml = newVal;
  }

  onFiltersChange(newVal) {
    if (this.recipientType == RECIPIENT_TYPE.LEADS)
      this.leadFilters = newVal;
    else
      this.residentFilters = newVal;

    this.filters = newVal;
  }

  onReviewPaneInit(event) {
    this.isReviewPaneReady = false;
    observableTimer(2000).subscribe(() => this.isReviewPaneReady = true);
  }

  onRecipientsChange(newVal: RecipientResult) {
    this.recipients = newVal.recipients;
    this.recipientCount = newVal.recipientCount;
    this.recipientPaneValid = this.recipients.length > 0;
    newVal.communityPersons$.subscribe((result) => {
      this.communityPersons = result;
    });
  }


  onListSelectionChange(newVal: Recipient[]) {
    this.listRecipients = newVal;
  }

  onRecipientTypeChange(newVal: number) {
    this.recipientType = newVal;

    if (this.recipientType == RECIPIENT_TYPE.LEADS)
      this.filters = this.leadFilters;
    else
      this.filters = this.residentFilters;
  }

  onMessageChange(newVal: Message) {
    this.message = newVal;
  }

  sendMessage() {
    if (this.isReviewBtnDisabled())
      return;
    this.isSending = true;
    this.coreApiSvc.post(`/communityGroups/${this.communityGroup.id}/bulkEmailMessages`, {
      subject: this.message.subject,
      body: this.emailHtml,
      communityPersons: this.communityPersons.join(),
      createdById: this.sessionSvc.getSelectedAgentID()
    }).subscribe(() => {
      // this.$state.go('rd.communicationCenter.unprocessedEmail.bulk');
      console.log('// this.$state.go(\'rd.communicationCenter.unprocessedEmail.bulk\');');
    }, (err) => {
      console.log(err);
    }, () => {
      this.isSending = false;
    });
  }
}
