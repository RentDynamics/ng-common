import { Directive, EventEmitter, Input, Output, HostBinding, HostListener } from '@angular/core';

/* responsibility: to notify parent whenever the list item is picked */

@Directive({
  selector: '[rdPickListItem]',
  exportAs: 'rdPickListItem'
})
export class PickListItemDirective {
  @Input() itemKey: string;
  @Input() itemValue: any;
  @Output() onItemPicked: EventEmitter<any> = new EventEmitter();

  checked: boolean = false;

  constructor() { }

  check(event) {
    if (!event)
      return;
    this.checked = !event.checked;
    this.onItemPicked.emit(this.itemValue);
  }

}
