
import {of as observableOf,  Observable } from 'rxjs';

import {refCount, publishReplay, map} from 'rxjs/operators';
import { Injectable } from '@angular/core';

import { CoreApiService } from '@rd/core';

// import { CacheService } from '../../../../../../../shared/cache.service'
// import { CommunityGroup, Community, CommunityGroupModel } from '../../../../../../../shared/core-api'
import { CallToActionSelectActionOption } from './call-to-action-select-action-option';

@Injectable()
export class CallToActionService {
  constructor(private cacheSvc: any, private coreApiSvc: CoreApiService) {}

  getCallToActionOptions(
    communityGroup: any,
    community?: any
  ): Observable<CallToActionSelectActionOption[]> {
    return observableOf([
      {
        title: 'Visit our website',
        type: 'url',
        value:
          community && community.website && (community.website.indexOf('http://') !== -1 || community.website.indexOf('https://') !== -1)
            ? community.website : `http://${community.website}`,
        description: 'Direct recipient to the community website'
      },
      {
        title: 'Get directions',
        type: 'map',
        value:
          community && community.latitude && community.longitude ? `https://www.google.com/maps/search/?api=1&query=${community.latitude},
          ${community.longitude}` : null,
        description: 'Link recipient to Google Maps directions'
      },
      {
        title: 'Call us',
        type: 'phone',
        value:
          communityGroup &&
          communityGroup.emailMsgItAdsourceTracking &&
          communityGroup.emailMsgItAdsourceTracking.phoneNumber
            ? `tel:${communityGroup.emailMsgItAdsourceTracking.phoneNumber}`
            : communityGroup && communityGroup.phone
              ? `tel:${communityGroup.phone.phoneNumber}`
              : null,
        description: 'Provide community phone number'
      },
      {
        title: 'Email us',
        type: 'email',
        value:
          communityGroup &&
          communityGroup.emailMsgItAdsourceTracking &&
          communityGroup.emailMsgItAdsourceTracking.email
            ? `mailto:${communityGroup.emailMsgItAdsourceTracking.email}`
            : community
              ? `mailto:${community.outboundEmailAddress}`
              : null,
        description: 'Prompt recipient to compose a new email'
      }
    ]);
  }

  getCommunityGroup(communityGroupId: number) {
    return this.coreApiSvc
      .get(
        `/communityGroups/${communityGroupId}?include=client,communities,email_msg_it_adsource_tracking,phone`
      )
      .pipe(map((result: any) => new Object(result)));
  }

  getCommunityGroupCache(communityGroupId: number) {
    if (this.cacheSvc.cache[`call_to_action_community_group${communityGroupId}`] ) {
      return this.cacheSvc.cache[`call_to_action_community_group${communityGroupId}`];
    }
    this.cacheSvc.cache[
      `call_to_action_community_group${communityGroupId}`
    ] = this.coreApiSvc
      .get(
        `/communityGroups/${communityGroupId}?include=client,communities,email_msg_it_adsource_tracking,phone`
      )
      .pipe(
      map((result: any) => new Object(result)),
        publishReplay(1),
        refCount()
      );
    return this.cacheSvc.cache[
      `call_to_action_community_group${communityGroupId}`
    ];
  }
}
