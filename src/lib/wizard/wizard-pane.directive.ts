import { Directive, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[rdWizardPane]',
  exportAs: 'rdWizardPane'
})
export class WizardPaneDirective implements OnInit {
  @Input() errorMsg?: string;
  @Input() icon?: string;
  @Input() displayName?: string;
  @Input() valid?: boolean;
  @Input() requireValid?: boolean;

  submitted: boolean = false;

  constructor() {

  }

  ngOnInit() {

  }
}
