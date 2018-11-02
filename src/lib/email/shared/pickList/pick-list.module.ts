import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PickListItemDirective } from './pick-list-item.directive';
import { PickListDirective } from './pick-list.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    PickListDirective,
    PickListItemDirective,
  ],
  exports: [
    PickListDirective,
    PickListItemDirective,
  ]
})
export class PickListModule {

}
