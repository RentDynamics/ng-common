import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { CoreApiService } from '@rd/core';

@Component({
  selector: 'rd-button-selector',
  templateUrl: './button-selector.component.html',
  styleUrls: ['./button-selector.component.less']
})
export class ButtonSelectorComponent implements OnInit {
  @Input() enableCommunitySelect: boolean;
  @Input() communityGroup: any;
  @Input() multiple = false;
  @Input() value: any = null;
  @Output() change = new EventEmitter();

  targetCommunity: any;
  optionList: any[] = [];
  open = false;

  constructor(private coreApiSvc: CoreApiService) { }

  ngOnInit() {
    this.optionList = [{
      'title': 'Visit our website',
      'type': 'url',
      'value': null,
      'description': 'Direct recipient to the community website'
    }, {
      'title': 'Get directions',
      'type': 'map',
      'value': null,
      'description': 'Link recipient to Google Maps directions'
    }, {
      'title': 'Call us',
      'type': 'phone',
      'value': null,
      'description': 'Provide community phone number'
    }, {
      'title': 'Email us',
      'type': 'email',
      'value': null,
      'description': 'Prompt recipient to compose a new email'
    }];
  }

  ngOnChanges() {
    if (this.targetCommunity) {
      if (this.targetCommunity.website) {
        this.optionList[0].value = this.targetCommunity.website.indexOf('http://') !== -1 ? this.targetCommunity.website : `http://${this.targetCommunity.website}`;
      }
      this.optionList[1].value =  `geo:${this.targetCommunity.latitude},${this.targetCommunity.longitude}`;
    }

    if (this.communityGroup) {
      if (this.communityGroup.emailMsgItAdsourceTracking) {
        this.optionList[2].value = `tel:${this.communityGroup.emailMsgItAdsourceTracking.phoneNumber}`;
        this.optionList[3].value = `mailto:${this.communityGroup.emailMsgItAdsourceTracking.email}`;
      } else {
        this.optionList[2].value = this.communityGroup && this.communityGroup.communityGroupPhones && this.communityGroup.communityGroupPhones.phone ? `tel:${this.communityGroup.communityGroupPhones.phone.phoneNumber}` : null;
        this.optionList[3].value = this.targetCommunity && this.targetCommunity.outboundEmail ? `mailto:${this.targetCommunity.outboundEmail}` : null;
      }
    }
  }

  toggleOpen() {
    this.open = !this.open;
  }

  clearSelected() {
    this.value = null;
    this.toggleOpen();
  }

  onChange($event) {
    this.value = this.optionList[$event];
    this.change.emit(this.value);
    this.toggleOpen();
  }

  targetCommunityChange($event) {
    if ($event > 0) {
      this.coreApiSvc.get(`/communities/${$event}?include=community_group&community_group_phones__phone`).subscribe((result) => {
        if (result.website) {
          this.optionList[0].value = result.website.indexOf('http://') !== -1 ? result.website : `http://${result.website}`;
        }
        this.optionList[1].value = `geo:${result.latitude},${result.longitude}`;
      });
    }
  }

}
