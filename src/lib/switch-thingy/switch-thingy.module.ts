import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwitchThingyComponent } from './switch-thingy.component';
import { SelectModule } from '@rd/forms';

@NgModule({
  imports: [
    CommonModule,
    SelectModule,
  ],
  declarations: [
    SwitchThingyComponent
  ],
  exports: [
    SwitchThingyComponent,
    SelectModule,
  ]
})
export class SwitchThingyModule { }
