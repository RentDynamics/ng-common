import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

import { CallToActionService } from '../shared/call-to-action.service';
import { CallToActionSelectActionOption } from '../shared/call-to-action-select-action-option';

@Component({
  selector: 'rd-call-to-action-select-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.less']
})
export class DropdownComponent implements OnInit, OnChanges {
  @Input() communityGroup: any;
  @Input() callToAction: CallToActionSelectActionOption;
  @Input() communityId: number;
  @Output() communityIdChange = new EventEmitter<number>();
  @Output() callToActionChange = new EventEmitter<CallToActionSelectActionOption>();
  @Output() hide = new EventEmitter<any>();

  optionList: CallToActionSelectActionOption[] = [];

  constructor(private callToActionSvc: CallToActionService) { }

  ngOnInit() {
    if (!this.communityGroup)
      return;

    this.getList(this.communityId);
  }

  ngOnChanges(newVal: SimpleChanges) {
    let communityIdChange: SimpleChange = newVal['communityId'];
    if (communityIdChange && communityIdChange.currentValue != communityIdChange.previousValue && !communityIdChange.isFirstChange())
      this.getList(communityIdChange.currentValue);
  }

  getSelectedCommunity(communityId: number) {
    if (!this.communityGroup || !this.communityGroup.communities || !communityId)
      return null;
    return this.communityGroup.communities.find((community) =>
      community.id === communityId
    )
  }

  onCallToActionChange(option: CallToActionSelectActionOption) {
    this.setCallToAction(option);
    this.getList(this.communityId);
    this.hide.emit(null);
  }

  onCommunityIdChange(newVal: number) {
    this.communityId = newVal;
    this.communityIdChange.emit(newVal);
    this.getList(newVal);
  }

  getList(communityId: number) {
    let communityGroup = this.communityGroup;
    let community = this.getSelectedCommunity(communityId);
    this.callToActionSvc.getCallToActionOptions(communityGroup, community).subscribe((results: CallToActionSelectActionOption[]) => {
      this.optionList = results;
      this.setCallToAction(this.optionList.find((option) => this.callToAction && option.title === this.callToAction.title));
    });
  }

  setCallToAction(newVal: CallToActionSelectActionOption) {
    this.callToAction = newVal;
    this.callToActionChange.emit(newVal);
  }
}
