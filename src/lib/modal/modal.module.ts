import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BootstrapModalComponent } from './bootstrap-modal/bootstrap-modal.component';
import { ModalComponent } from './modal.component';
import { ModalHideButton } from './shared/modal-hide-button.directive';
import { ModalShowButton } from './shared/modal-show-button.directive';
import { ModalToggleButton } from './shared/modal-toggle-button.directive';

@NgModule({
  declarations: [
    BootstrapModalComponent,
    ModalComponent,
    ModalHideButton,
    ModalShowButton,
    ModalToggleButton
  ],
  exports: [
    CommonModule,
    BootstrapModalComponent,
    ModalComponent,
    ModalHideButton,
    ModalShowButton,
    ModalToggleButton
  ],
  providers: []
})
export class ModalModule { }
