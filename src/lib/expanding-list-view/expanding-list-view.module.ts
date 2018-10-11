import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpandingListViewComponent } from './expanding-list-view.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ExpandingListViewComponent
  ],
  exports: [
    ExpandingListViewComponent
  ]
})
export class ExpandingListViewModule { }
