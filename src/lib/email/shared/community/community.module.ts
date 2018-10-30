import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommunityDirective } from './community.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CommunityDirective,
  ],
  exports: [
    CommunityDirective,
  ],
  providers: []
})
export class CommunityModule { }
