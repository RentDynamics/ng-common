
import {of as observableOf,  Observable } from 'rxjs';

import {catchError} from 'rxjs/operators';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as moment from 'moment';

import { CoreApiService, CoreApiSelector } from '@rd/core';
import { Footer } from '../shared/footer';

@Component({
  selector: 'rd-footer-select',
  templateUrl: './footer-select.component.html',
  styleUrls: ['./footer-select.component.less']
})
export class FooterSelectComponent implements OnInit {
  @Input() communityGroupCommunities: any[];
  @Input() communityGroupId: number;
  @Output() change = new EventEmitter<Footer>();


  @Input() footer: Footer = {
    name: null,
    phone: null,
    address: {
      addressLine1: null,
      addressLine2: null,
      city: null,
      state: {
        abbreviation: null
      },
      zip: null
    },
    communityGroupDayOfWeekHours: [],
    communityId: null,
    showAdaLogo: false
  };

  constructor(public coreApiSvc: CoreApiService) { }

  ngOnInit() {
    if (this.communityGroupCommunities.length === 1) {
      this.footer.communityId = this.communityGroupCommunities[0].id;
    }
    this.getFooterData();
  }

  getCommunityGroupSelector(communityGroupId: number, filters?: any) {
    return new CoreApiSelector({
      endpoint: `/communityGroups/${communityGroupId}`,
      include: [
        'community_group_day_of_week_hours',
        'community_group_phones__phone',
        'email_msg_it_adsource_tracking'
      ]
    });
  }

  getCommunitySelector(communityId: number, filters?: any) {
    return new CoreApiSelector({
      endpoint: `/communities/${communityId}`,
      include: [
        'address__state'
      ]
    });
  }

  getFooterData() {
    this.get(this.getCommunityGroupSelector(this.communityGroupId)).subscribe(
      result => {
        if (result) {
          this.footer.phone = result.emailMsgItAdsourceTracking ? result.emailMsgItAdsourceTracking.phoneNumber : null;
          this.footer.communityGroupDayOfWeekHours = result.communityGroupDayOfWeekHours.map ? result.communityGroupDayOfWeekHours.map(
            (hours) => {
              return {
                dayOfWeek: this.dayOfWeekAsString(hours.dayOfWeekId),
                startTime: moment(hours.startTime, 'HH:mm:ss'),
                endTime: moment(hours.endTime, 'HH:mm:ss'),
                isClosed: hours.startTime === hours.endTime
              };
            }
          ) : null;
          this.change.emit(this.footer);
        }
      }
    );

    if (this.footer.communityId && this.footer.communityId !== -1) {
      this.getCommunityData();
    }

  }

  getCommunityData() {
    this.get(this.getCommunitySelector(this.footer.communityId)).subscribe(
      community => {
        if (community && community.address && community.address.state) {
          this.footer.name = community.name;
          this.footer.address.addressLine1 = community.address.addressLine_1;
          this.footer.address.addressLine2 = community.address.addressLine_2;
          this.footer.address.city = community.address.city;
          this.footer.address.state = community.address.state.abbreviation;
          this.footer.address.zip = community.address.zip;
          this.footer.showAdaLogo = community.isAdaCompliant;
          this.change.emit(this.footer);
        }
      }
    );
  }

  get(selector) {
    return this.coreApiSvc.get(selector.stringify()).pipe(
      catchError((err: any, caught: Observable<any>) =>
        observableOf(<any>{})
      ));
  }

  footerCommunityChange(event) {
    this.footer.communityId = event;
    if (this.footer.communityId && this.footer.communityId !== -1) {
      this.getCommunityData();
    }
  }

  dayOfWeekAsString(dayIndex) {
    return ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'][dayIndex - 1];
  }

}


// Falls at Riverwoods

// 435-555-1234

// 140 E. 2200 N.
// North Logan, Utah 84341
// S:  Closed
// M:  9:00 AM - 6:00 PM
// T:  9:00 AM - 6:00 PM
// W:  9:00 AM - 6:00 PM
// T:  9:00 AM - 6:00 PM
// F:  9:00 AM - 6:00 PM
// S:  9:00 AM - 6:00 PM
