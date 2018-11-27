import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextMaskModule } from 'angular2-text-mask';

import { TextUnmaskDirective } from './text-unmask.directive';
import { UnmaskDirective } from './unmask.directive';

@NgModule({
  imports: [
    CommonModule,
    TextMaskModule,
  ],
  declarations: [
    TextUnmaskDirective,
    UnmaskDirective
  ],
  exports: [
    UnmaskDirective,
    TextUnmaskDirective,
    TextMaskModule,
  ]
})
export class RdAngularMaskModule { }
