import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextMaskModule } from 'angular2-text-mask';

import { TextUnmaskDirective } from './text-unmask.directive';

@NgModule({
  imports: [
    CommonModule,
    TextMaskModule,
  ],
  declarations: [
    TextUnmaskDirective,
  ],
  exports: [
    TextUnmaskDirective,
    TextMaskModule,
  ]
})
export class RdAngularMaskModule { }
