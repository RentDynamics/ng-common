import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoadingIndicatorComponent } from './loading-indicator.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    LoadingIndicatorComponent,
  ],
  exports: [
    LoadingIndicatorComponent,
  ]
})
export class LoadingIndicatorModule { }
