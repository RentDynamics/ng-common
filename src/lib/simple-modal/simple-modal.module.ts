import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimpleModalComponent } from './simple-modal.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    SimpleModalComponent,
  ],
  exports: [
    SimpleModalComponent,
  ],
  providers: [
  ]
})
export class SimpleModalModule { }
