import { AfterContentInit, Directive, OnInit, ContentChildren, QueryList } from '@angular/core';

import { ImmutableService } from '@rd/core';

import { WizardPaneDirective } from './wizard-pane.directive';

@Directive({
  selector: '[rdWizard]',
  exportAs: 'rdWizard'
})
export class WizardDirective implements AfterContentInit {
  @ContentChildren(WizardPaneDirective) private wizardPaneQueryList: QueryList<WizardPaneDirective> =
  new QueryList<WizardPaneDirective>();

  activeIndex: number = 0;
  panes: WizardPaneDirective[] = [];

  get activePane() {
    return this.panes[this.activeIndex];
  }

  get activePaneErrorMsg() {
    return this.activePane && !this.activePaneValid ? this.activePane.errorMsg : null;
  }

  get activePaneSubmitted() {
    return this.activePane && this.activePane.submitted;
  }

  get activePaneValid() {
    return this.activePane && (!this.activePane.requireValid || this.activePane.valid);
  }

  get nextPageDisabled() {
    return this.isLast() || (this.activePane && this.activePane.requireValid && !this.activePane.valid);
  }

  constructor(public immutable: ImmutableService) {

  }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.panes = this.wizardPaneQueryList.toArray();

    this.wizardPaneQueryList.changes.subscribe((r) => {
      console.log(r);
    });
  }

  isActive(wizardPane: WizardPaneDirective) {
    return this.activePane && wizardPane.displayName === this.activePane.displayName;
  }

  setActive(wizardPane: WizardPaneDirective) {
    let targetIndex = this.panes.findIndex(pane => pane.displayName === wizardPane.displayName);

    // is back
    if (targetIndex <= this.activeIndex) {
      this.activeIndex = targetIndex;
      // if not active pane require valid or active pane is valid
    } else if (!this.panes[targetIndex - 1].requireValid || this.panes[targetIndex - 1].valid) {
      this.activeIndex = targetIndex;
    }
  }

  isFirst() {
    return this.activeIndex === 0;
  }

  isLast() {
    return this.activeIndex === (this.panes.length - 1);
  }

  next() {
    this.activePane.submitted = true;
    if (!this.nextPageDisabled) {
      this.activeIndex++;
    }
  }

  back() {
    this.activeIndex--;
  }
}
