import { Directive, Inject, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Directive({
  selector: '[rdSessionCommunityGroupCommunity]',
  exportAs: 'rdSessionCommunityGroupCommunity'
})
export class SessionCommunityGroupCommunityDirective implements OnInit {
  @Input() communityGroupId: number;
  @Output() result: EventEmitter<any[]> = new EventEmitter<any[]>();

  get initialCommunityId(){
    if(!this.communityGroupId) return null;
    return this.getCommunityGroupCommunities(this.communityGroupId)[0] ?
      this.getCommunityGroupCommunities(this.communityGroupId)[0].id :
      null;
  }

  constructor( @Inject('SessionService') private sessionSvc: any) { }

  ngOnInit() {
    if(!this.communityGroupId){
      this.communityGroupId = this.sessionSvc.getSelectedCommunityGroupID();
    }

    this.result.emit(this.getCommunityGroupCommunities(this.communityGroupId));
  }

  getCommunityGroupCommunities(communityGroupId:number) {
    return this.sessionSvc.getSessionCommunitiesAsQueryable({communityGroupID:communityGroupId}).toArray();
  }

  hasMoreThanOneCommunity(id: number){
    let communityGroup =  this.sessionSvc.getSessionCommunityGroupsAsQueryable({id: id}).toArray()[0];
    if(!communityGroup) return;
    return communityGroup.communityIDs && communityGroup.communityIDs.length > 1;
  }

}
