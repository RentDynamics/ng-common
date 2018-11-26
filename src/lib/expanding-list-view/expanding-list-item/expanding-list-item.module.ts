import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RdAngularCommonModule } from '@rd/common';

import { ShowMoreBtnComponent } from './show-more-btn/show-more-btn.component';
import { ExpandingListItemComponent } from './expanding-list-item.component';
import { ExpandingListItemDirective } from './expanding-list-item.directive';

@NgModule({
  imports: [
    CommonModule,
    RdAngularCommonModule,
  ],
  declarations: [
    ExpandingListItemComponent,
    ExpandingListItemDirective,
    ShowMoreBtnComponent,
  ],
  exports: [
    ExpandingListItemComponent,
    ExpandingListItemDirective,
    RdAngularCommonModule,
    ShowMoreBtnComponent,
  ]
})
export class ExpandingListItemModule { }
