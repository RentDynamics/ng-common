import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WizardPaneDirective } from './wizard-pane.directive';
import { WizardDirective } from './wizard.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    WizardPaneDirective,
    WizardDirective
  ],
  exports: [
    WizardPaneDirective,
    WizardDirective
  ]
})
export class WizardModule { }
