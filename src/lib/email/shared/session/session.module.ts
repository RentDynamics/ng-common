import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionCommunityGroupCommunityDirective } from './session-community-group-community.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SessionCommunityGroupCommunityDirective],
  exports: [SessionCommunityGroupCommunityDirective]
})
export class SessionModule { }
