import { Inject, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'communityDisplay'
})
export class CommunityDisplayPipe implements PipeTransform {

  get defaultResult() {
    return '';
  }

  constructor(@Inject('SessionService') private sessionSvc: any) {
  }

  transform(value: any, args?: any): any {
    return this.communityDisplayFilter(value);
  }

  communityDisplayFilter(communityOrGroupObj) {
    if (!communityOrGroupObj || this.sessionSvc.isSingleCommunityAgent()) {
      return '';
    }
    if (this.sessionSvc.isSingleCommunityGroupAgent()) {
      if (this.isGroupObj(communityOrGroupObj)) {
        return '';
      }
      return communityOrGroupObj.communityName;
    }

    return communityOrGroupObj.communityName || communityOrGroupObj.groupName;
  }

  isGroupObj(obj) {
    return obj.groupName && !this.isCommunityObj(obj);
  }

  isCommunityObj(obj) {
    return obj.communityName;
  }

}
