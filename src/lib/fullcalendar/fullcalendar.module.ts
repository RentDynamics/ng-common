import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FullcalendarDirective } from './fullcalendar.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FullcalendarDirective
  ],
  exports: [
    FullcalendarDirective
  ]
})
export class FullcalendarModule { }
